
function Contact() {
  return (
              <div className='Card Contact' id='Contact'>
      <h2>Contact</h2>
      <form action="https://getform.io/f/3d45e44f-c964-4deb-8055-0933fa59eb9a" method="POST">
    <label htmlFor="name" className="">Name:</label>
    <input
      type="text"
      id="name"
      name="name"
      autocomplete="on"
      className="block w-full px-4 py-2 border  border-white rounded-lg text-indigo-700 focus:outline-none focus:bg-indigo-100 varwhite"
      required
    />

    <label htmlFor="email" className="">Email:</label>
    <input
      type="email"
      id="email"
      name="email"
      autocomplete="on"
      className="block w-full px-4 py-2 border border-white rounded-lg  text-indigo-700 focus:outline-none focus:bg-indigo-100"
      required
    />


    <label htmlFor="message" className="">Message:</label>
    <textarea
      id="message"
      name="message"
      rows="4"
      className="block w-full px-4 py-2 border border-white rounded-lg  text-indigo-700 focus:outline-none focus:bg-indigo-100"
      required
    ></textarea>

    {/* Anti-spam field */}
    <input type="hidden" name="_gotcha" style={{ display: "none !important" }} />

    <div className="flex justify-end">
    <button
      type="submit"
      className="my-2 w-1/2 px-4 py-2 border border-white text-white rounded-lg shadow-lg hover:bg-indigo-400 focus:outline-none focus:bg-indigo-400"
    >
      Send
    </button>
    </div>
  </form>
      </div>
  );
}

export default Contact;
