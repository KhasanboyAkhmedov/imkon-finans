import type { BusinessFile } from "../../components/file-card/file-card.type";
import documentFile from '/docs/business-plans/lecture.pdf';

export const ImportantFactsData: BusinessFile[] = [
    {
      id: '1',
      name: 'Muhim fakt #20, 26 dekabr 2025 yil',
      size: '211 Kb',
      type: 'PDF',
      fileUrl: documentFile,
      createdAt: new Date('2025-12-26'),
    },
    {
      id: '2',
      name: 'Muhim fakt #36, 26 noyabr 2025 yil',
      size: '171 Kb',
      type: 'PDF',
      fileUrl: documentFile,
      createdAt: new Date('2025-11-26'),
    },
    {
      id: '3',
      name: 'Muhim fakt #08, 26 noyabr 2025 yil',
      size: '138 Kb',
      type: 'PDF',
      fileUrl: documentFile,
      createdAt: new Date('2025-11-26'),
    },
    {
      id: '4',
      name: 'Muhim fakt #42, 6 noyabr 2025 yil',
      size: '395 Kb',
      type: 'PDF',
      fileUrl: documentFile,
      createdAt: new Date('2025-11-06'),
    },
    {
      id: '5',
      name: 'Muhim fakt #06, 30 oktabr 2025 yil',
      size: '229 Kb',
      type: 'PDF',
      fileUrl: documentFile,
      createdAt: new Date('2025-10-30'),
    },
    {
      id: '6',
      name: 'Muhim fakt #32, 6 sentabr 2025 yil',
      size: '225 Kb',
      type: 'PDF',
      fileUrl: documentFile,
      createdAt: new Date('2025-09-06'),
    },
];