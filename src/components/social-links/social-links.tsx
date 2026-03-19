import { FaFacebookF } from 'react-icons/fa';
import { PiInstagramLogoFill } from 'react-icons/pi';
import './social-links.css';
import type { JSX } from 'react';

export interface SocialLink {
  id: number;
  url: string;
  icon: JSX.Element;
  alt: string;
}

const socialLinks: SocialLink[] = [
  { id: 1, url: 'https://www.facebook.com/imkonfinans.uz', icon: <FaFacebookF />, alt: 'facebook' },
  { id: 2, url: 'https://www.instagram.com/imkonfinans.uz', icon: <PiInstagramLogoFill />, alt: 'instagram' },
];

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
            {social.icon}
          </a>
        </div>
      ))}
    </div>
  );
};

export default SocialLinks;