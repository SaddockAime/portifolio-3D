/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter: ['var(--font-inter)']
      },
      colors:{
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        muted: 'rgb(var(--muted))',
        accent: 'rgb(var(--accent))',
      },
      backgroundImage:{
        'firefly-radial': "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.8) 0%, rgba(220, 235, 255, 0) 100%)"
      },
      boxShadow:{
        'glass-inset': 'inset 0 17px 5px -9px rgba(126 181 200, 0.9)',
        'glass-sm': '5px 5px 20px 0px rgba(126 181 200, 0.9)',
      },
      keyframes:{
      'spin-reverse':{
        '0%': {transform: 'rotate(0deg)'},
        '100%': {transform: 'rotate(-360deg)'}
      }
      },
      animation:{
        'spin-slow': 'spin 40s linear infinite',
        'spin-slow-reverse': 'spin-reverse 40s linear infinite',
      },
      screens:{
        xs: '480px',
      }
    },
  },
  plugins: [],
};
