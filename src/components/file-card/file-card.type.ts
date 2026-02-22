export interface BusinessFile {
  _id: string;
  name: string;
  size: string;
  fileUrl: string;
  type: 'PDF' | 'DOCX' | 'XLSX';
  createdAt: string;
}