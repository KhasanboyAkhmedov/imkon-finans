import type { BusinessFile } from "../../components/file-card/file-card.type";
import documentFile from '/docs/business-plans/lecture.pdf';

export const ShareCapitalData: BusinessFile[] = [
    {
      id: 'r1',
      name: `2025-yil yakuni bo'yicha ustav fondi`, 
      size: '2.8 Mb',
      type: 'PDF',
      fileUrl: documentFile,
      createdAt: new Date('2026-01-25'),
    },
];