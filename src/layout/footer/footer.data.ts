import { facebook, instagram } from "../../assets/footer";
import { socialAccounts, type SocialKey } from "../../config/social";

const socialIcons: Record<SocialKey, string> = { facebook, instagram };

export interface FooterLink {
  id?: number;
  label: string;
  url: string;
}

export const socialLinks = socialAccounts.map(account => ({
  ...account,
  icon: socialIcons[account.key],
}));

export const usefulResources: FooterLink[] = [
  { id: 1, label: 'www.openinfo.uz', url: 'https://www.openinfo.uz' },
  { id: 2, label: 'www.fondbozori.uz', url: 'https://www.fondbozori.uz' },
  { id: 3, label: 'www.gov.uz', url: 'https://www.gov.uz' },
  { id: 4, label: 'www.president.uz', url: 'https://www.president.uz' },
  { id: 5, label: 'www.uforum.uz', url: 'https://www.uforum.uz' },
];

