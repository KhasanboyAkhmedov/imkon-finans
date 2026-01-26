import type { BusinessFile } from "../../components/file-card/file-card.type";
import documentFile from '/docs/business-plans/lecture.pdf';

export const EmissionData: BusinessFile[] = [
    {
      id: '1',
      name: `Obligatsiya qarori №2`,
      size: '412 Kb',
      type: 'PDF',
      fileUrl: documentFile,
      createdAt: new Date('2025-12-20'),
    },
    {
      id: '2',
      name: 'Emissiya risolari №2',
      size: '412 Kb',
      type: 'PDF',
      fileUrl: documentFile,
      createdAt: new Date('2024-01-20'),
    },
    {
      id: '3',
      name: 'Depozit guvohnomasi chiqarish shartlari',
      size: '412 Kb',
      type: 'PDF',
      fileUrl: documentFile,
      createdAt: new Date('2023-01-20'),
    },
    {
      id: '4',
      name: `Qo'shimcha qaror`,
      size: '412 Kb',
      type: 'PDF',
      fileUrl: documentFile,
      createdAt: new Date('2022-01-20'),
    },
]