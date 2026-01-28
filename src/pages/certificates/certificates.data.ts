import type { BusinessFile } from "../../components/file-card/file-card.type";
import documentFile from '/docs/business-plans/lecture.pdf';
import MBReestri from '/docs/certificates/MB reestri 01.08.2022.pdf';
import licence from '/docs/certificates/guvohnoma.pdf';

export const CertificatesData: BusinessFile[] = [
    {
      id: '1',
      name: `«Imkon Finans» AJ guvohnomasi`,
      size: '412 Kb',
      type: 'PDF',
      fileUrl: licence,
      createdAt: new Date('2011-09-09'),
    },
    {
      id: '2',
      name: `«Imkon Finans» AJ biznes-rejasi 2026 yil`,
      size: '412 Kb',
      type: 'PDF',
      fileUrl: documentFile,
      createdAt: new Date('2025-12-20'),
    },
    {
      id: '3',
      name: `«Imkon Finans» aksiyadorlik jamiyatiga o'zgartirilgani haqidagi Markaziy bank reestri 01.08.2022`,
      size: '412 Kb',
      type: 'PDF',
      fileUrl: MBReestri,
      createdAt: new Date('2022-08-01'),
    },
]