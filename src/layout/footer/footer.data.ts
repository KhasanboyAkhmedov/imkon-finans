import { facebook, instagram, linkedin, twitter } from "../../assets/footer";

export interface FooterLink {
  id?: number;
  label: string;
  url: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}
export const socialLinks = [
  {id: 1, url: 'https://www.facebook.com/', icon: facebook, alt: 'facebook' },
  {id: 2, url: 'https://www.linkedin.com/', icon: linkedin, alt: 'linkedin' },
  {id: 3, url: 'https://www.instagram.com/', icon: instagram, alt: 'instagram' },
  {id: 4, url: 'https://x.com/', icon: twitter, alt: 'twitter' },
];

export const usefulResources: FooterLink[] = [
  { id: 1, label: 'www.openinfo.uz', url: 'https://www.openinfo.uz' },
  { id: 2, label: 'www.fondbozori.uz', url: 'https://www.fondbozori.uz' },
  { id: 3, label: 'www.gov.uz', url: 'https://www.gov.uz' },
  { id: 4, label: 'www.president.uz', url: 'https://www.president.uz' },
  { id: 5, label: 'www.uforum.uz', url: 'https://www.uforum.uz' },
];

export const pageSections: FooterSection[] = [
  {
    title: 'JAMIYAT HAQIDA',
    links: [
      { label: "Jamiyat tarixi", url: "./history" },
      { label: "Kuzatuv kengashi", url: "./council" },
      { label: "Boshqaruv organi", url: "./management" },
      { label: "Jamiyat faoliyati va maqsadlari", url: "./mission-and-vision" },
      { label: 'Jamiyat tashkiliy tuzilmasi', url: '/organizational-structure' },
      { label: "Ish o'rinlari", url: '/vacancies' },
      { label: "Qabul qilish kunlari", url: '/reception-days' },
      { label: "Hamkorlar", url: '/partners' },
      { label: "Aloqalar", url: '/contacts' },
    ],
  },
  {
    title: 'XIZMATLAR',
    links: [
      { label: 'Mikromoliyaviy xizmatlar', url: '/our-services' },
      { label: 'Mikrokredit va mikroqarzlar', url: '/our-services' },
      { label: 'Agentlik xizmati', url: '/our-services' },
    ],
  },
  {
    title: 'AKSIYADORLAR',
    links: [
      { label: 'Biznes rejalar', url: '#' },
      { label: 'Dividendlar', url: '#' },
      { label: 'Qayta sotib olingan aksiyalar', url: '#' },
      { label: 'Emisiya risolasi', url: '#' },
      { label: 'Muhim faktlar', url: '#' },
      { label: 'Emitentning hisobotlari', url: '#' },
      { label: 'Taqdimot', url: '#' },
    ],
  },
  {
    title: 'KORPORATIV BOSHQARUV',
    links: [
      { label: 'Guvohnoma', url: '#' },
      { label: 'Jamiyat nizomi', url: '#' },
      { label: 'Sertifikatlar', url: '#' },
      { label: 'Rivojlanish strategiyasi', url: '#' },
      { label: 'Affilangan shaxslar', url: '#' },
      { label: 'Korporativ boshqaruv kodeksi', url: '#' },
      { label: 'Jamiyat qoidalari', url: '#' },
      { label: 'Audit hisobotlari', url: '#' },
    ],
  },
  {
    title: 'MATBUOT MARKAZI',
    links: [
      { label: 'Matbuot xizmati', url: '#' },
      { label: "Yangiliklar va e'lonlar", url: '#' },
      { label: 'Tadbirlar', url: '#' },
      { label: "Foto qo'llanma", url: '#' },
      { label: 'Video', url: '#' },
    ],
  },
];
