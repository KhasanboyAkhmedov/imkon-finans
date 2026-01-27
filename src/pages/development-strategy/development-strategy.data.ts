import type { BusinessFile } from "../../components/file-card/file-card.type";
import documentFile from '/docs/business-plans/lecture.pdf';

export const DevelopmentStrategyData: BusinessFile[] = [
    {
      id: '1',
      name: `Rivojlanish strategiyasi 2026 yil`,
      size: '412 Kb',
      type: 'PDF',
      fileUrl: documentFile,
      createdAt: new Date('2025-12-20'),
    },
    {
      id: '2',
      name: `Rivojlanish strategiyasi 2023 yil`,
      size: '412 Kb',
      type: 'PDF',
      fileUrl: documentFile,
      createdAt: new Date('2022-12-20'),
    },
]