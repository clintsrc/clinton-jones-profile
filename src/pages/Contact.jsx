
import "../assets/css/Contact.css";

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <form>
        <label className="contact-label">Name:</label>
        <input 
          id="username" 
          type="text" 
          name="username" 
          placeholder="name"
        />

        <label className="contact-label">Email:</label>
        <input 
          id="email" 
          type="email" 
          name="email" 
          placeholder="email"
        />

        <label className="contact-label">Message:</label>
        <textarea 
          id="message" 
          name="message"
          placeholder="Type your message here..."
        />

        <button type="submit">Submit</button>
      </form>

      <div className="submitted-text"></div>
    </div>
  );
}
