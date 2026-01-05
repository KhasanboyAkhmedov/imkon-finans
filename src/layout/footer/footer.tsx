import './footer.css';
import logoWithText from '/logo-with-text.svg';
import { email, map, phone } from '../../assets/footer';
import { pageSections, socialLinks, usefulResources } from './footer.data';

const Footer = () => {

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
                        <h4 className='title'>Aloqa ma'lumotlari</h4>
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
                        <h4 className='title'>Manzil</h4>
                        <a className="contact-data with-map" href="#">
                            Oʻzbekiston Respublikasi, Andijon viloyati, Andijon shahar, A. Temur ko‘chasi 44A uy.
                            <img className="" src={map} alt="map" /> 
                        </a>
                    </div>
                </div>
                <h2 className='footer-navigation-title'>Sahifalar ro'yxati</h2>
                <div className="footer-navigation">
                    {pageSections.map((section) => (
                        <div className='contact-datas' key={section.title}>
                            <h4 className='title'>{section.title}</h4>
                            {section.links.map((link) => (
                                <a key={link.id} href={link.url} target="_blank" rel="noopener noreferrer" className="contact-data">
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    ))}
                </div>

                <hr className='footer-line-2'/>
                <div className="footer__bottom">
                    <p className="footer__bottom-text-rights">
                        © {new Date().getFullYear()} Imkon Finans. All rights reserved.
                    </p>
                    <p className="footer__bottom-text">
                        Barcha hujjatlar — asl nusxalardan. Foydalanishda saytga havola ko'rsatilishi lozim.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
