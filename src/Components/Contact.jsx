import React from 'react';

function Contact() {
  return (
    <div id="Contact" className="">
            
      <div className="container mx-auto px-4">
      <h2 className="text-5xl h2 font-bold text-purple-200 mb-4 uppercase tracking-wide">
          Contact </h2>
        <form
          action="https://getform.io/f/3d45e44f-c964-4deb-8055-0933fa59eb9a"
          method="POST"
          className="max-w-md mx-auto"
        >
          <div className="mb-4">
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="Name"
              type="text"
              id="name"
              name="name"
              autoComplete="on"
              required
            />
          </div>
          <div className="mb-4">
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="Email"
              type="email"
              id="email"
              name="email"
              autoComplete="on"
              required
            />
          </div>
          <div className="mb-4">
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="Leave a message"
              id="message"
              name="message"
              rows="4"
              required
            ></textarea>
          </div>
          {/* Anti-spam field */}
          <input type="hidden" name="_gotcha" style={{ display: 'none !important' }} />
          <div className="text-center">
            <button
              type="submit"
              className="bg-violet-500 hover:bg-violet-600 uppercase tracking-widest text-white py-2 px-4 rounded transition-colors duration-300 mr-4"            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;