import type { BusinessFile } from "../../components/file-card/file-card.type";
import documentFile from '/docs/business-plans/lecture.pdf';

export const CertificatesData: BusinessFile[] = [
    {
      id: '1',
      name: `«Imkon Finans» AJ biznes-rejasi 2026 yil`,
      size: '412 Kb',
      type: 'PDF',
      fileUrl: documentFile,
      createdAt: new Date('2025-12-20'),
    },
    {
      id: '2',
      name: '«Imkon Finans» AJ biznes-rejasi 2025 yil',
      size: '412 Kb',
      type: 'PDF',
      fileUrl: documentFile,
      createdAt: new Date('2024-01-20'),
    },
]