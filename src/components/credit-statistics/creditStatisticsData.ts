import { agroStats, businessStats, educationStats, homeStats, otherStats, peopleStats } from '../../assets/statistics';

interface StatLanguageContent {
  name: string;
  amount: string;
  _id: string;
}

interface StatIcon {
  lib: string;
  name: string;
}

export interface StatData {
  _id: string;
  icon: StatIcon;
  uzb: StatLanguageContent;
  rus: StatLanguageContent;
  eng: StatLanguageContent;
}

interface CreditStat {
  id: number;
  amount: string;
  category: string;
  icon: string;
}

export const creditStatistics: CreditStat[] = [
    { id: 1, amount: '3 795 366', category: "Iste'mol kreditlar", icon: peopleStats },
    { id: 2, amount: '7 813 989', category: "Qishloq xo'jaligi", icon: agroStats },
    { id: 3, amount: '3 906 995', category: "Biznes & Ishlab chiqarish", icon: businessStats },
    { id: 4, amount: '3 795 366', category: "Uy tamiri va sotib olish", icon: homeStats },
    { id: 5, amount: '7 813 989', category: "Ta'lim", icon: educationStats },
    { id: 6, amount: '3 906 995', category: "Boshqa kreditlar", icon: otherStats },
];