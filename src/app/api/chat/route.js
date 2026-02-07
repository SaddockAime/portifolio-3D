import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { message, conversationHistory } = await request.json();
    const API_KEY = process.env.NEXT_PUBLIC_HUGGINGFACE_API;

    if (!API_KEY) {
      return NextResponse.json(
        { error: 'API key not configured' },
        { status: 500 }
      );
    }

    // Portfolio context about Saddock
    const systemContext = `You are an AI assistant for Saddock Kabandana's portfolio website. 
Key information about Saddock:
- Full-stack developer with strong expertise in both frontend and backend technologies
- Backend Skills: Node.js, NestJS with TypeScript - building scalable server-side applications and RESTful APIs
- Frontend Skills: Next.js (React framework), Vue.js - creating modern, performant user interfaces
- Additional Skills: Three.js for 3D web graphics, Tailwind CSS, JavaScript/TypeScript, modern web development
- Built projects including e-commerce platforms, educational websites, travel applications, and agricultural platforms
- Notable projects: E-commerce Ninjas, Pulse education rating, Hope to Hope travel, Agriconnect Rwanda
- Rwandan developer passionate about creating innovative web solutions
- Open to freelance work, full-time positions, and collaborations
- Contact: Available on LinkedIn, GitHub, and Twitter

Please provide helpful, friendly, and conversational responses about Saddock's work, skills, projects, or general web development topics. Keep responses concise and engaging.`;

    // Build messages array in OpenAI format
    const messages = [
      { role: 'system', content: systemContext }
    ];

    // Add recent conversation history
    const recentMessages = conversationHistory.slice(-6);
    recentMessages.forEach(msg => {
      messages.push({
        role: msg.type === 'user' ? 'user' : 'assistant',
        content: msg.content
      });
    });

    // Add current user message
    messages.push({ role: 'user', content: message });

    // Use Hugging Face Router API (OpenAI compatible format)
    const response = await fetch(
      'https://router.huggingface.co/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'Qwen/Qwen3-Coder-Next:novita',
          messages: messages,
          max_tokens: 250,
          temperature: 0.7,
          stream: false
        }),
      }
    );

    // Check if response is OK before parsing JSON
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Hugging Face API HTTP error:', response.status, errorText);
      
      if (response.status === 404) {
        return NextResponse.json({
          reply: '❌ Model not found. The Hugging Face model endpoint may have changed. Please check the model URL.',
        });
      }
      
      if (response.status === 401 || response.status === 403) {
        return NextResponse.json({
          reply: '🔑 Invalid API key. Please check your Hugging Face API key.',
        });
      }
      
      if (response.status === 429) {
        return NextResponse.json({
          reply: '⏳ Rate limit reached. Please wait a moment and try again.',
        });
      }
      
      return NextResponse.json({
        reply: `❌ API error (${response.status}): ${errorText}`,
      });
    }

    const data = await response.json();
    console.log('API response data:', data);

    // Extract the assistant's reply from the response
    const aiReply = data.choices?.[0]?.message?.content || "I'm having trouble generating a response right now.";

    return NextResponse.json({ reply: aiReply.trim() });

  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { reply: "I'm having trouble connecting to my AI brain right now. Please try again in a moment!" },
      { status: 500 }
    );
  }
}
