export interface MultilingualContent {
  title: string;
  description: string;
  _id: string;
}
export interface NewsItem {
  _id: string;
  uzb: MultilingualContent;
  rus: MultilingualContent;
  eng: MultilingualContent;
  title: string;
  description: string;
  imageUrl?: string;
  createdAt: string;
  updatedAt?: string;
}
