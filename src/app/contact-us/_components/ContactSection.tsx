"use client";
import Image from "next/image";
import React, { useState, FormEvent } from "react";
import {motion} from 'framer-motion'

const ContactSection: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Simulate sending email or API call
    setTimeout(() => {
      setSending(false);
      setSent(true);
      setName("");
      setEmail("");
      setMessage("");
    }, 1500);
  };

  return (
    <div className="pt-34">
      <div className="text text-center pb-16">
        <h1 className="text-[45px] font-[500]">Contact us</h1>
        <p className="text-sm">
          Have questions or feedback? Reach out to us <br /> by filling out the
          form below.
        </p>
      </div>
      <section className="bg-[#f2efe9] grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto">
        {/* Left form and info */}
        <div className="bg-[#e7e4dd] p-10 md:p-16 flex flex-col justify-center gap-10">
          <form
            onSubmit={handleSubmit}
            className="max-w-md w-full flex flex-col gap-5"
          >
            <p className="text-lg font-semibold text-gray-900 mb-3">
              Feel free to message us with any questions or concerns.
            </p>

            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-full border border-gray-300 py-2 px-6 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
            />

            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-full border border-gray-300 py-2 px-6 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
            />

            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="resize-none w-full rounded-2xl border border-gray-300 py-3 px-6 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
            />

            <button
              type="submit"
              disabled={sending}
              className={`mt-2 rounded-full py-3 font-bold text-sm text-white transition-colors ${
                sending
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-gray-900 hover:bg-black"
              }`}
            >
              {sending ? "Sending..." : "SEND"}
            </button>

            {sent && (
              <p className="text-green-600 font-semibold mt-3 select-none">
                Thank you for your message!
              </p>
            )}
          </form>

          <div className="bg-white p-6 rounded-md max-w-md mt-10 text-gray-800 font-sans text-lg leading-relaxed">
            <p className="font-semibold mb-1">Address:</p>
            <p>
              123 Oak Avenue
              <br />
              Sunnyvale, CA 94085
            </p>

            <hr className="my-4 border-gray-300" />

            <p className="font-semibold mb-1">Hours:</p>
            <p>
              Monday – Friday: 10 AM – 6 PM
              <br />
              Saturday – Sunday: 11 AM – 4 PM
            </p>

            <button className="mt-4 text-xs uppercase font-semibold text-gray-900 flex items-center gap-1 hover:underline focus:outline-none">
              FIND US ON MAPS{" "}
              <span aria-hidden="true" className="text-lg">
                ›
              </span>
            </button>
          </div>
        </div>

        {/* Right side image */}
        <div className="flex items-center justify-center">
          <Image
            src="https://ik.imagekit.io/msmrd69gi/JDbHVQPwvkqaUvWxu8KwWYcm4.png?updatedAt=1750503286516"
            alt="Stylish woman looking up"
            loading="lazy"
            width={600}
            height={600}
          />
        </div>
      </section>
      <motion.div
          className="w-full h-[500px] max-md:h-[400px] overflow-hidden border-white/10 relative pt-20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
        >
          <div className="absolute inset-0 bg-gradient-to-b pointer-events-none" />

          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3421.993044999479!2d73.43393557552691!3d30.81377977487316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391901f3dcd8e3ff%3A0x39f57b8c5b5ddbb!2sOkara%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1709658438214!5m2!1sen!2s"
            loading="lazy"
          />
        </motion.div>
    </div>
  );
};

export default ContactSection;
