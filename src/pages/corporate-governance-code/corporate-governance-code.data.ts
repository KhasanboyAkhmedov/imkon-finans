import type { BusinessFile } from "../../components/file-card/file-card.type";
import documentFile from '/docs/business-plans/lecture.pdf';

export const CorporateGovernanceCodeData: BusinessFile[] = [
    {
      id: 'g1',
      name: `«Imkon Finans» AJ Korporativ boshqaruv kodeksi`,
      size: '1.2 Mb',
      type: 'PDF',
      fileUrl: documentFile,
      createdAt: new Date('2025-01-15'),
    },
    {
      id: 'g2',
      name: `Korporativ etika va odob-axloq qoidalari`,
      size: '850 Kb',
      type: 'PDF',
      fileUrl: documentFile,
      createdAt: new Date('2025-03-10'),
    },
    {
      id: 'g3',
      name: `Axborot siyosati to'g'risidagi nizom`,
      size: '640 Kb',
      type: 'PDF',
      fileUrl: documentFile,
      createdAt: new Date('2025-06-20'),
    },
    {
      id: 'g4',
      name: `Manfaatlar to'qnashuvini boshqarish qoidalari`,
      size: '520 Kb',
      type: 'PDF',
      fileUrl: documentFile,
      createdAt: new Date('2025-09-05'),
    }
];