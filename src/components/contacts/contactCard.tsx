import { FaEnvelope, FaLocationDot, FaPhoneVolume } from 'react-icons/fa6';
import './contactCard.css';
import SocialLinks from '../social-links/social-links';


const ContactCard = () => {
  return (
    <div className="contact-card">
      <h2 className="contact-title">Aloqa ma'lumotlari</h2>

        <div className="contact-details">
            <div className="contact-item">
                <FaPhoneVolume className='contact-icon' />
                <div className="item-text">
                    <p>+998 74 228-32-12</p>
                    <p>+99878 298-12-35</p>
                </div>
            </div>
            <div className="contact-item">
                <FaEnvelope className='contact-icon'/>
                <div className="item-text">
                    <p>info@imkonfinans.uz</p>
                </div>
            </div>
            <div className="contact-item">
                <FaLocationDot className='contact-icon'/>
                <div className="item-text">
                    <p>O’zbekiston Respublikasi, Andijon viloyati, Andijon shahri, Amir Temur ko’chasi, 44A-uy</p>
                </div>
            </div>
        </div>
        <SocialLinks />
    </div>
  );
};

export default ContactCard;