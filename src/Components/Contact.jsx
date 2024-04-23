
function Contact() {
  return (
              <div className={``} id='Contact'>
      <h2>Contact</h2>
      <form action="https://getform.io/f/3d45e44f-c964-4deb-8055-0933fa59eb9a" method="POST">
    
    <input
      placeholder="name"
      type="text"
      id="name"
      name="name"
      autoComplete="on"
      required
    />

    <input
      placeholder="email"
      type="email"
      id="email"
      name="email"
      autoComplete="on"
      required
    />

<textarea
        placeholder="leave a message"
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
