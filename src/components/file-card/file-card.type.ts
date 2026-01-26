export interface BusinessFile {
  id: string;
  name: string;
  size: string;
  fileUrl: string;
  type: 'PDF' | 'DOCX' | 'XLSX';
  createdAt: Date;
}