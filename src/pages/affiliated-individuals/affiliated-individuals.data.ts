import type { BusinessFile } from "../../components/file-card/file-card.type";
import documentFile from '/docs/business-plans/lecture.pdf';

export const AffiliatedIndividualsData: BusinessFile[] = [
    {
      id: '1',
      name: `Affilangan shaxslar ro'yxati 2026 yil`,
      size: '412 Kb',
      type: 'PDF',
      fileUrl: documentFile,
      createdAt: new Date('2026-01-08'),
    },
    {
      id: '2',
      name: `Affilangan shaxslar ro'yxati 2025 yil`,
      size: '412 Kb',
      type: 'PDF',
      fileUrl: documentFile,
      createdAt: new Date('2025-01-20'),
    },
]