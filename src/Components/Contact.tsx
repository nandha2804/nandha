import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { SectionWraper } from "../Utils";

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
          to_email: 'nandha28042003@gmail.com',
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
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 max-w-7xl mx-auto px-4 sm:px-8 md:px-16 py-10 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center md:text-left"
        >
          <p className="text-[#4dba87] font-medium mb-2">Get in touch</p>
          <h3 className="text-4xl md:text-5xl font-bold text-white">Contact.</h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex flex-col gap-8 items-center"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-[#161b22]/80 backdrop-blur-md p-8 sm:p-10 rounded-2xl w-full max-w-2xl
                     border border-[#4dba87]/20 shadow-lg hover:shadow-[#4dba87]/5 transition-shadow duration-300"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="space-y-8"
            >
              <div className="mb-6">
                <label className="flex flex-col">
                  <span className="text-gray-200 font-medium mb-3">Your Name</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your name?"
                    className="bg-black/30 py-4 px-6 placeholder:text-gray-400 text-white rounded-lg
                             outline-none border border-[#4dba87]/20 font-medium
                             focus:border-[#4dba87]/50 transition-colors duration-300"
                  />
                </label>
              </div>

              <div className="mb-6">
                <label className="flex flex-col">
                  <span className="text-gray-200 font-medium mb-3">Your Email</span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email?"
                    className="bg-black/30 py-4 px-6 placeholder:text-gray-400 text-white rounded-lg
                             outline-none border border-[#4dba87]/20 font-medium
                             focus:border-[#4dba87]/50 transition-colors duration-300"
                  />
                </label>
              </div>

              <div className="mb-6">
                <label className="flex flex-col">
                  <span className="text-gray-200 font-medium mb-3">Your Message</span>
                  <textarea
                    rows={7}
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="What do you want to say?"
                    className="bg-black/30 py-4 px-6 placeholder:text-gray-400 text-white rounded-lg
                             outline-none border border-[#4dba87]/20 font-medium resize-none
                             focus:border-[#4dba87]/50 transition-colors duration-300"
                  />
                </label>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#4dba87] py-4 px-8 outline-none w-full text-white font-bold rounded-lg
                         shadow-lg shadow-[#4dba87]/20 hover:bg-[#3da876]
                         transition-all duration-300 ease-out"
              >
                {loading ? (
                  <span className="inline-flex items-center">
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
        </motion.div>
      </div>
    </div>
  );
}

export default SectionWraper(Contact, "contact");
