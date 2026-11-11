import { FaFacebookF } from 'react-icons/fa';
import { PiInstagramLogoFill } from 'react-icons/pi';
import './social-links.css';
import type { JSX } from 'react';
import { socialAccounts, type SocialKey } from '../../config/social';

const icons: Record<SocialKey, JSX.Element> = {
  facebook: <FaFacebookF />,
  instagram: <PiInstagramLogoFill />,
};

const socialLinks = socialAccounts;

const SocialLinks: React.FC = () => {
  return (
    <div className="socials">
      {socialLinks.map((social) => (
        <div key={social.id} className="social-wrapper">
          <a 
            className="social-link-a" 
            target="_blank" 
            rel="noopener noreferrer" 
            href={social.url}
            aria-label={social.alt}
          >
            {icons[social.key]}
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;