export const ServiceContentType = {
  List: 'list',
  Accordion: 'accordion',
  Text: 'text',
} as const;

// This extracts the values ('list' | 'accordion' | 'text') as a type
export type ServiceContentType = (typeof ServiceContentType)[keyof typeof ServiceContentType];

export interface ServiceBase {
  id: string;
  title: string;
  type: ServiceContentType;
}

export interface ServiceList extends ServiceBase {
  type: typeof ServiceContentType.List;
  items: string[];
}

export interface ServiceAccordion extends ServiceBase {
  type: typeof ServiceContentType.Accordion;
  items: {
    id: string;
    question: string;
    answer: string;
  }[];
  footerAlert?: string;
}

export interface ServiceText extends ServiceBase {
  type: typeof ServiceContentType.Text;
  content: string;
}

export type ServiceTab = ServiceList | ServiceAccordion | ServiceText;

export const servicesData: ServiceTab[] = [
  {
    id: 'microfinance',
    title: 'Mikromoliyaviy xizmatlar',
    type: ServiceContentType.List,
    items: [
      'Mikrokredit, mikroqarz va mikrolizing, shuningdek agentlik xizmatlari',
      'Qarz majburiyatlarini sotib olish va sotish',
      'Jamiyat mikrokredit, mikroqarz, mikrolizing berish va boshqa mikromoliyaviy xizmatlar ko‘rsatish bilan bog‘liq maslahat va axborot xizmatlarini taqdim etadi',
      'Qonun hujjatlariga muvofiq boshqa turdagi mikromoliyaviy xizmatlar, jumladan iste’mol kreditlarini ko‘rsatadi',
    ],
  },
  {
    id: 'microcredits',
    title: 'Mikrokredit va mikroqarzlar',
    type: ServiceContentType.Accordion,
    items: [
      {
        id: 'q1',
        question: 'Kredit kimlarga beriladi?',
        answer: 'Yuridik va jismoniy shaxslarga',
      },
      {
        id: 'q2',
        question: 'Kredit miqdori?',
        answer: 'Kredit miqdori mijozning to‘lov qobiliyatiga qarab belgilanadi.',
      },
      {
        id: 'q3',
        question: 'Kredit muddati?',
        answer: '12 oydan 36 oygacha.',
      },
      {
        id: 'q4',
        question: 'Kreditni qaytarish usullari?',
        answer: 'Kreditni qaytarish har oyda teng miqdorda (annuitet) yoki differensial usulda amalga oshiriladi.',
      },
      {
        id: 'q5',
        question: 'Kredit ta’minoti turlari?',
        answer: 'Garov, kafillik yoki sug‘urta polisi.',
      },
      {
        id: 'q6',
        question: 'Qanday hujjatlar talab qilinadi?',
        answer: 'Pasport, daromadlar to‘g‘risida ma’lumotnoma va ta’minot hujjatlari.',
      },
      {
        id: 'q7',
        question: 'Boshlang‘ich to‘lov qancha?',
        answer: 'Boshlang‘ich to‘lov talab etilmaydi.',
      },
    ],
    footerAlert:
      'Kredit faqat aniq ish joyi va daromadga ega bo‘lgan shaxslarga beriladi',
  },
  {
    id: 'agency-service',
    title: 'Agentlik xizmati',
    type: ServiceContentType.Text,
    content:
      "O‘zbekiston Respublikasi Prezidentining 2019-yil 23-iyuldagi PQ–4400-sonli “Mikromoliyaviy xizmatlar ommabopligini oshirish chora-tadbirlari to‘g‘risida”gi qarori imzolandi. Ushbu qarorga asosan, 2019-yil 1-avgustdan boshlab mikrokredit tashkilotlari, banklar, sug‘urta kompaniyalari va boshqa moliyaviy tashkilotlarning agenti sifatida faoliyat yurirish mumkin.",
  },
];