export type SocialKey = 'facebook' | 'instagram';

export interface SocialAccount {
  id: number;
  key: SocialKey;
  url: string;
  alt: string;
}

export const socialAccounts: SocialAccount[] = [
  { id: 1, key: 'facebook', url: 'https://www.facebook.com/imkonfinans.uz', alt: 'facebook' },
  { id: 2, key: 'instagram', url: 'https://www.instagram.com/imkonfinans.uzb', alt: 'instagram' },
];
