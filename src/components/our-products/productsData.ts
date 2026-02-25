import * as FaIcons from 'react-icons/fa';
import * as BsIcons from 'react-icons/bs';

export type SupportedLocale = 'uzb' | 'rus' | 'eng';

export interface LocalizedString {
  uzb: string;
  rus: string;
  eng: string;
}

export interface CreditIcon {
  lib: 'fa' | 'bs';
  name: keyof typeof FaIcons | keyof typeof BsIcons;
}

export interface CreditDetailContent {
  title: LocalizedString;
  description: LocalizedString;
  min?: LocalizedString;
  max?: LocalizedString;
  unitMin?: LocalizedString;
  unitMax?: LocalizedString;
  footer: LocalizedString;
  isLargeText?: boolean;
}

export interface CreditDetail {
  label: LocalizedString;
  content: CreditDetailContent;
  _id: string;
}

export interface Credit {
  _id: string;
  title: LocalizedString;
  description: LocalizedString;
  icon: CreditIcon;
  details: CreditDetail[];
  createdAt: string;
  updatedAt: string;
}

export interface CreditsApiResponse {
  totalCount: number;
  page: number;
  pageSize: number;
  data: Credit[];
}