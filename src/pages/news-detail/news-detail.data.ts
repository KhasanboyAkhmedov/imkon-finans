interface NewsDetailLanguageContent {
  _id: string;
  title: string;
  description: string;
}

export interface NewsDetailType {
  _id: string;
  title: string;
  description: string;
  uzb: NewsDetailLanguageContent;
  rus: NewsDetailLanguageContent;
  eng: NewsDetailLanguageContent;
  imageUrl?: string;
  createdAt?: string;
}
