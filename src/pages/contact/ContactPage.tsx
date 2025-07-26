import contactImage from '../../assets/contact.jpg';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-container">
      <img src={contactImage} width="400px" className="contact-image" alt="Contact" />
      <div className="contact-text">
        <a href="mailto:isabel.scastanho@gmail.com">Send me an email</a>
        <span className="contact-text-soon">
          More coming soon...
        </span>
      </div>
    </div>
  )
}

export default ContactPage
