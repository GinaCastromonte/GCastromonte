"use client";
import React, { useState } from "react";
import GithubIcon from "../../public/github2.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const [emailForm, setEmailForm] = useState({
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmailForm((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const emailURL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/send`;
      await axios.post(emailURL, emailForm);
      setEmailSubmitted(true);
      setEmailForm({
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-transparent rounded-full h-60 w-60 z-0 blur-lg absolute top-[50%] left-[7rem] transform -translate-x-1/2 -translate-1/2"></div>
      <div className="">
        <h5 className="lg:text-4xl sm:text-2xl font-bold text-white my-2">
          Let`s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I am actively exploring new career opportunities and welcome your
          inquiries. Feel free to reach out, whether you have questions or
          simply want to have a conversation!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/GinaCastromonte">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/ginacastromonte/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div className="">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              type="email"
              value={emailForm.email}
              id="email"
              name="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="john@google.com"
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              value={emailForm.subject}
              id="subject"
              name="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi"
              onChange={handleChange}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              value={emailForm.message}
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Leave your message here..."
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-green-400 text-sm mt-2">
              Email sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
