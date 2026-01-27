import type { BusinessFile } from "../../components/file-card/file-card.type";
import documentFile from '/docs/business-plans/lecture.pdf';

export const ReportsData: BusinessFile[] = [
    {
      id: 'r1',
      name: `2025-yil yakuni bo'yicha yillik moliyaviy hisobot`, 
      size: '2.8 Mb',
      type: 'PDF',
      fileUrl: documentFile,
      createdAt: new Date('2026-01-25'),
    },
    {
      id: 'r2',
      name: `2025-yil uchun mustaqil auditorlik xulosasi`, 
      size: '1.4 Mb',
      type: 'PDF',
      fileUrl: documentFile,
      createdAt: new Date('2026-01-20'),
    },
    {
      id: 'r3',
      name: `2024-yil 4-chorak choraklik hisoboti`, 
      size: '950 Kb',
      type: 'PDF',
      fileUrl: documentFile,
      createdAt: new Date('2025-01-05'),
    },
    {
      id: 'r4',
      name: `Kuzatuv kengashining 2024-yil faoliyati yuzasidan hisoboti`, 
      size: '1.1 Mb',
      type: 'PDF',
      fileUrl: documentFile,
      createdAt: new Date('2024-01-15'),
    },
];