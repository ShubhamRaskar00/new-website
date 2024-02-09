"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { server } from "../../../../../server/constants";

function ContactPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Send form data to backend API
    try {
      const response = await axios.post(`${server}contact/sendmail`, formData);
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        message: "",
      });

      if(response.data.success){
        setSubmitted(true)
      }

    } catch (err) {
      console.log("error___________", err);
    } finally {
      router.refresh();
    }

    // Handle the response as needed
  };
  return (
    <div className="contact-1 py-4 md:py-12">
      <div className="container mx-auto px-4">
        <div className="xl:flex -mx-4">
          <div className="xl:mx-auto">
            <div className="xl:w-3/4 mb-4">
              <h1 className="text-3xl text-medium mb-4">Contact Us</h1>
              <p className="text-xl mb-2">
                Please submit your information and we will get back to you.
              </p>
              <p>
                Call us at{" "}
                <a
                  href="tel:+917709861765"
                  className="text-indigo-600 border-b border-transparent hover:border-indigo-600 transition-colors duration-300"
                >
                  +91770986175
                </a>
              </p>
            </div>

            <div className="md:flex md:-mx-4 mt-4 md:mt-10">

              {submitted ? (
              <div className="alert animate-bounce bg-green-500 text-white p-4 rounded flex justify-center items-center">
                <span className=" text-center md:text-3xl">
                  Your message was sent successfully! <br /> We&apos;ll get back to you as soon as possible.
                </span>
              </div>
            ) : (
              <form className="md:w-2/3 md:px-4" onSubmit={handleSubmit}>
                <div className="sm:flex sm:flex-wrap -mx-3">
                  <div className="sm:w-1/2 px-3 mb-6">
                    <input
                      type="text"
                      placeholder="Full Name"
                      name="name"
                      className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
                      onChange={handleChange}
                      value={formData.name}
                    />
                  </div>
                  
                  <div className="sm:w-1/2 px-3 mb-6">
                    <input
                      type="email"
                      placeholder="E-mail address"
                      name="email"
                      className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
                      onChange={handleChange}
                      value={formData.email}
                    />
                  </div>
                  <div className="sm:w-1/2 px-3 mb-6">
                    <input
                      type="text"
                      name="phoneNumber"
                      placeholder="Phone Number"
                      className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
                      onChange={handleChange}
                      value={formData.phoneNumber}
                    />
                  </div>
                  <div className="sm:w-full px-3">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Your message here"
                      className="border-2 rounded px-3 py-1 w-full focus:border-indigo-400 input"
                      onChange={handleChange}
                      value={formData.message}
                    ></textarea>
                  </div>
                </div>
                <div className="text-right mt-4 md:mt-12">
                  <button className="border-2 border-indigo-600 rounded px-6 py-2 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-300">
                    Send a Message
                    <i className="fas fa-chevron-right ml-2 text-sm"></i>
                  </button>
                </div>
              </form>
            )}

              <div className="md:w-1/3 md:px-4 mt-10 md:mt-0">
                <div className="bg-indigo-100 rounded py-4 px-6">
                  <h5 className="text-xl font-medium mb-3">Help</h5>
                  <p className="text-gray-700 mb-4">
                    Need help or have any query? Don&apos;t hesitate, you can
                    directly shoot us an{" "}
                    <a
                      href="mailto:shubhamraskar69@gmail.com"
                      className="text-indigo-600 border-b border-transparent hover:border-indigo-600 inline-block"
                    >
                      email
                    </a>{" "}
                    or call us at{" "}
                    <a
                      href="tel:"
                      className="text-indigo-600 border-b border-transparent hover:border-indigo-600 inline-block"
                    >
                      +917709861765
                    </a>
                  </p>
                  <p className="text-gray-700">
                    You can move to{" "}
                    <a
                      href="#"
                      className="text-indigo-600 border-b border-transparent hover:border-indigo-600 inline-block"
                    >
                      FAQs
                    </a>{" "}
                    or{" "}
                    <a
                      href="#"
                      className="text-indigo-600 border-b border-transparent hover:border-indigo-600 inline-block"
                    >
                      Support
                    </a>{" "}
                    page to get more information about our site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
