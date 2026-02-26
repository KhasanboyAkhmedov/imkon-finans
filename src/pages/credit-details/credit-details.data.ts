import type { IconType } from "react-icons";

export interface CreditTab {
  id: string;
  label: string;
  content: {
    title?: string;
    description?: string;
    min?: string;
    max?: string;
    unitMin?: string;
    unitMax?: string;
    isLargeText?: boolean;
    footer?: string;
  };
}

export interface Credit {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  path: string;
  details: CreditTab[];
}