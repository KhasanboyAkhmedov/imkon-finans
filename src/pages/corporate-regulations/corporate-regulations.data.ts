import type { BusinessFile } from "../../components/file-card/file-card.type";
import documentFile from '/docs/business-plans/lecture.pdf';

export const GovernanceRegulationsData: BusinessFile[] = [
    {
      id: 'g1',
      name: `«Imkon Finans» aksiyadorlik jamiyati qoidalari`,
      size: '1.2 Mb',
      type: 'PDF',
      fileUrl: documentFile,
      createdAt: new Date('2025-01-15'),
    },
];