import { FaEnvelope, FaFacebookF, FaLocationDot, FaPhoneVolume } from 'react-icons/fa6';
import './contactCard.css';
import { FaLinkedinIn, FaTelegram } from 'react-icons/fa';
import { PiInstagramLogoFill } from 'react-icons/pi';

const socialLinks = [
  {id: 1, url: 'https://www.facebook.com/', icon: <FaFacebookF />, alt: 'facebook' },
  {id: 2, url: 'https://www.linkedin.com/', icon: <FaLinkedinIn />, alt: 'linkedin' },
  {id: 3, url: 'https://www.instagram.com/', icon: <PiInstagramLogoFill />, alt: 'instagram' },
  {id: 4, url: 'https://x.com/', icon: <FaTelegram />, alt: 'telegram' },
];

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
        <div className='socials'>
            {socialLinks.map((social) => (
                <div key={social.id} className="social-wrapper">
                    <a className="social-link-a" target="_blank" rel="noopener noreferrer" href={social.url}>
                        {social.icon}
                    </a>
                </div>
            ))}
        </div>
    </div>
  );
};

export default ContactCard;