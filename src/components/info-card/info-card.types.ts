export interface InfoCardItem {
  _id: string;    
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