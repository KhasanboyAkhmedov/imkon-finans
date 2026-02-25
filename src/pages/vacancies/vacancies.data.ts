export interface VacancyContent {
  title: string;
  description: string;
  requirements: string[];
  benefits: string[];
  hours: string;
  location: string;
  _id: string;
}
export interface Vacancy {
  _id: string;
  uzb: VacancyContent;
  rus: VacancyContent;
  eng: VacancyContent;
  createdAt?: string;
  updatedAt?: string;
}