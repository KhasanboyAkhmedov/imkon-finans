export interface InfoCardItem {
  id: string;    
  title: string;
  description: string;
  imageUrl?: string; 
  videoUrl?: string;
  link?: string;
  isFloating?: boolean;
  createdAt?: Date; 
}

export interface InfoCardProps {
  item: InfoCardItem;
  index: number;
  isClickable?: boolean;
  navigateUrl?: string;
}