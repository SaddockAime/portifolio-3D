"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0 },
  show: { scale: 1 },
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const sendToWhatsApp = (data) => {
    const toastId = toast.loading("Preparing your message for WhatsApp...");

    // Format the message for WhatsApp
    const message = `*New Portfolio Contact*%0A%0A*Name:* ${encodeURIComponent(data.name)}%0A*Email:* ${encodeURIComponent(data.email)}%0A%0A*Message:*%0A${encodeURIComponent(data.message)}`;

    // WhatsApp number (include country code without + or spaces)
    const whatsappNumber = "250788938717";
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

    // Open WhatsApp in a new tab
    setTimeout(() => {
      window.open(whatsappURL, '_blank');
      toast.success(
        "Opening WhatsApp! Please send the message to complete your contact request.",
        {
          id: toastId,
          duration: 5000,
        }
      );
      reset(); // clear the form
    }, 500);
  };

  const onSubmit = (data) => {
    sendToWhatsApp(data);
  };

  return (
    <>
      <Toaster richColors={true} />
      <motion.form
        variants={container}
        initial="hidden"
        animate="show"
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-md w-full flex flex-col items-center justify-center space-y-4"
      >
        <motion.input
          variants={item}
          type="text"
          placeholder="name"
          {...register("name", {
            required: "This field is required!",
            minLength: {
              value: 3,
              message: "Name should be atleast 3 characters long.",
            },
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.name && (
          <span className="inline-block self-start text-accent">
            {errors.name.message}
          </span>
        )}
        <motion.input
          variants={item}
          type="email"
          placeholder="email"
          {...register("email", { required: "This field is required!" })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.email && (
          <span className="inline-block self-start text-accent">
            {errors.email.message}
          </span>
        )}
        <motion.textarea
          variants={item}
          placeholder="message"
          {...register("message", {
            required: "This field is required!",
            maxLength: {
              value: 5000,
              message: "Message should be less than 5000 characters",
            },
            minLength: {
              value: 5,
              message: "Message should be more than 5 characters",
            },
          })}
          className="w-full p-2 rounded-md shadow-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 custom-bg"
        />
        {errors.message && (
          <span className="inline-block self-start text-accent">
            {errors.message.message}
          </span>
        )}

        <motion.input
          variants={item}
          value="Cast your message!"
          className="px-10 py-4 rounded-md shadow-lg bg-background border border-accent/30 border-solid
      hover:shadow-glass-sm backdrop-blur-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 cursor-pointer capitalize
      "
          type="submit"
        />
      </motion.form>
    </>
  );
}