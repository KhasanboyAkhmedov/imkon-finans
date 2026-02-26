import './footer.css';
import logoWithText from '/logo-with-text.svg';
import { email, map, phone } from '../../assets/footer';
import { socialLinks, usefulResources } from './footer.data';
import { useTranslation } from 'react-i18next';
import { getNavMenu } from '../navbar/navData';

const Footer = () => {
    const { t: navT } = useTranslation('layout', { keyPrefix: 'navbar' });
    const { t: footT } = useTranslation('layout', { keyPrefix: 'footer' });
    const navMenu = getNavMenu(navT);
    
    return (
        <footer className="footer">
            <div className='container'>
                <div className="footer__top">
                    <img className="footer__top-logo" 
                        src={logoWithText} alt="footer-logo" />
                    <div className="footer__top-info">
                        {socialLinks.map((social) => (
                            <div key={social.id} className="footer__top-info-link">
                                <a className="footer__top-info-link-a" target="_blank" rel="noopener noreferrer" href={social.url}>
                                    <img className="footer__top-info-link-a-icon" 
                                        src={social.icon} alt={social.alt} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <hr className='footer-line'/>
                <div className='contact-data-wrapper'>
                    <div className='contact-datas'>
                        <h4 className='title'>Foydali resurslar</h4>
                        {usefulResources.map((link) => (
                            <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="contact-data">
                                {link.label}
                            </a>
                        ))}
                    </div>
                    <div className='contact-datas'>
                        <h4 className='title'>{footT('contact_info')}</h4>
                        <a className="contact-data" href="#">
                            <img className="footer__bottom-top-first-a-img" src={email} alt="email" /> 
                            info@imkonfinans.uz
                        </a>
                        <a className="contact-data" href="#">
                            <img className="footer__bottom-top-first-a-img" src={phone} alt="phone" /> 
                            +998 78 298 12 35 
                        </a>
                        <a className="contact-data" href="#">
                            <img className="footer__bottom-top-first-a-img" src={phone} alt="phone" /> 
                            +998 74 228 32 12
                        </a>
                    </div>
                    <div className='contact-datas contact-datas-with-map'>
                        <h4 className='title'>{footT('address')}</h4>
                        <a className="contact-data with-map">
                            {footT('address_text')}
                            <img className="" src={map} alt="map" /> 
                        </a>
                    </div>
                </div>
                <h2 className='footer-navigation-title'>{footT('website_map')}</h2>
                <div className="footer-navigation">
                    {navMenu.map((section) => (
                        <div className='contact-datas' key={section.title}>
                            <h4 className='title'>{section.title}</h4>
                            {section.items.map((link, index) => (
                                <a key={index+1} href={link.url} className="contact-data">
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    ))}
                </div>

                <hr className='footer-line-2'/>
                <div className="footer__bottom">
                    <p className="footer__bottom-text-rights">
                        Imkon Finans © {new Date().getFullYear()}. {footT('rights')}
                    </p>
                    <p className="footer__bottom-text">{footT('disclaimer')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
