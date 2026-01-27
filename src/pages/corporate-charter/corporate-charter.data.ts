import type { BusinessFile } from "../../components/file-card/file-card.type";
import documentFile from '/docs/business-plans/lecture.pdf';

export const CorporateCharterData: BusinessFile[] = [
    {
      id: '1',
      name: `Jamiyat nizomi`,
      size: '412 Kb',
      type: 'PDF',
      fileUrl: documentFile,
      createdAt: new Date('2025-12-20'),
    },
]