import type { MultilingualContent } from "../news/newsData";

export interface InfoCardItem {
  _id: string;    
  uzb: MultilingualContent;
  rus: MultilingualContent;
  eng: MultilingualContent;
  title: string;
  description: string;
  imageUrl?: string; 
  videoUrl?: string;
  link?: string;
  isFloating?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface InfoCardProps {
  item: InfoCardItem;
  index: number;
  isClickable?: boolean;
  isFloating?: boolean;
  showDate?: boolean;
  navigateUrl?: string;
}