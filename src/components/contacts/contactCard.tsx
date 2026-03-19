import { FaEnvelope, FaLocationDot, FaPhoneVolume } from 'react-icons/fa6';
import './contactCard.css';
import SocialLinks from '../social-links/social-links';
import { useTranslation } from 'react-i18next';


const ContactCard = () => {
    const { t } = useTranslation('pages', { keyPrefix: 'contacts' });
    return (
        <div className="contact-card">
            <h2 className="contact-title">{t('card_title')}</h2>

            <div className="contact-details">
                <div className="contact-item">
                    <FaPhoneVolume className='contact-icon' />
                    <div className="item-text">
                        <p>+998 78 298-12-35</p>
                    </div>
                </div>
                <div className="contact-item">
                    <FaEnvelope className='contact-icon'/>
                    <div className="item-text">
                        <p>info@imkon-finans.uz</p>
                    </div>
                </div>
                <div className="contact-item">
                    <FaLocationDot className='contact-icon'/>
                    <div className="item-text">
                        <p>{t('address')}</p>
                    </div>
                </div>
            </div>
            <SocialLinks />
        </div>
    );
};

export default ContactCard;