export interface Vacancy {
  _id: string;
  title: string;
  hours: string;
  location: string;
  description: string;
  requirements: string[];
  benefits: string[];
  createdAt?: string;
  updatedAt?: string;
}