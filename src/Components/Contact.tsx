import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { SectionWraper } from "../Utils";
import pcImg from "../Assets/pc.webp";

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_goxmau3',
        'template_q839291',
        {
          from_name: form.name,
          to_name: 'Nandha Kumar',
          from_email: form.email,
          to_email: 'cnkumar28@gmail.com',
          message: form.message,
        },
        'wssqdw0XKRykQ4bzY'
      )
      .then(() => {
        setLoading(false);
        alert('Thank you. I will get back to you as soon as possible.');
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        alert('Something went wrong.');
      });
  };

  return (
    <div className="flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center md:text-left mb-6 sm:mb-8"
      >
        <p className="text-[#4dba87] font-medium text-base sm:text-lg mb-2">Get in touch</p>
        <h3 className="text-3xl sm:text-4xl font-bold text-white">Contact</h3>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full items-center"
      >
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full max-w-2xl border border-[#4dba87]/20 rounded-2xl p-6 sm:p-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-4 sm:space-y-6"
          >
            <div>
              <label className="flex flex-col">
                <span className="text-gray-200 font-medium mb-2">Your Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="border border-[#4dba87]/20 py-3 px-4 placeholder:text-gray-400 text-white rounded-lg
                           outline-none text-base sm:text-lg focus:border-[#4dba87]/50 transition-colors duration-300
                           bg-transparent"
                />
              </label>
            </div>

            <div>
              <label className="flex flex-col">
                <span className="text-gray-200 font-medium mb-2">Your Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  className="border border-[#4dba87]/20 py-3 px-4 placeholder:text-gray-400 text-white rounded-lg
                           outline-none text-base sm:text-lg focus:border-[#4dba87]/50 transition-colors duration-300
                           bg-transparent"
                />
              </label>
            </div>

            <div>
              <label className="flex flex-col">
                <span className="text-gray-200 font-medium mb-2">Your Message</span>
                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What do you want to say?"
                  className="border border-[#4dba87]/20 py-3 px-4 placeholder:text-gray-400 text-white rounded-lg
                           outline-none text-base sm:text-lg focus:border-[#4dba87]/50 transition-colors duration-300
                           bg-transparent resize-none"
                />
              </label>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#4dba87] py-3 px-6 w-full text-white font-bold rounded-lg
                       hover:bg-[#3da876] text-base sm:text-lg
                       transition-all duration-300 ease-out mt-2"
            >
              {loading ? (
                <span className="inline-flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : "Send Message"}
            </motion.button>
          </motion.div>
        </form>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: 0.3,
            type: "spring",
            stiffness: 200
          }}
          className="flex justify-center items-center h-[300px] md:h-[600px]"
        >
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 15
            }}
            className="h-full"
          >
            <motion.img
              src={pcImg}
              alt="PC Setup"
              className="w-full h-full rounded-lg object-contain"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default SectionWraper(Contact, "contact");
