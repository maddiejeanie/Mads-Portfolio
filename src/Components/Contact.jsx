
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
      autoComplete="on"
      required
    />

    <label htmlFor="email" className="">Email:</label>
    <input
      type="email"
      id="email"
      name="email"
      autoComplete="on"
      required
    />


    <label htmlFor="message" className="">Message:</label>
    <textarea
      id="message"
      name="message"
      rows="4"
      required
    ></textarea>

    {/* Anti-spam field */}
    <input type="hidden" name="_gotcha" style={{ display: "none !important" }} />

    <button
      type="submit"
    >
      Send
    </button>

  </form>
      </div>
  );
}

export default Contact;
