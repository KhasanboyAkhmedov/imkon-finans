export interface Branch {
  id: string;
  name: {
    uzb: string;
    rus: string;
    eng: string;
  };
  phones: string[];
  mapEmbedUrl: string;
  coordinates: number[]; 
}

export const branches: Branch[] = [
  { 
    id: '1', 
    name: { uzb: 'Bosh ofis', rus: 'Головной офис', eng: 'Head Office' }, 
    phones: ['+998 74 228-32-12', '+998 78 298-12-35'],
    mapEmbedUrl: "https://yandex.com/map-widget/v1/?z=16&ol=biz&oid=196915386086",
    coordinates: [40.765394, 72.354256],
  },
  { 
    id: '2', 
    name: { 
      uzb: 'Asaka filiali', 
      rus: 'Асакинский филиал', 
      eng: 'Asaka Branch' 
    },
    phones: ['+998 55 203-35-12'],
    mapEmbedUrl: "https://yandex.com/map-widget/v1/?z=16&ol=biz&oid=196915386086",
    coordinates: [40.765394, 72.354256], 
  },
  { 
    id: '3', 
    name: { uzb: 'Jalaquduq filiali', rus: 'Джалахудукский филиал', eng: 'Jalaquduq Branch' }, 
    phones: ['+998 74 755-22-30'],
    mapEmbedUrl: "https://yandex.com/map-widget/v1/?z=16&ol=biz&oid=196915386086",
    coordinates: [40.765394, 72.354256],
  },
  { 
    id: '4', 
    name: { 
      uzb: "Bo'ston (Buloqboshi) filiali", 
      rus: 'Бустонский (Булокбоши) филиал', 
      eng: 'Boston (Buloqboshi) Branch' 
    },
    phones: ['+998 55 203-12-35'],
    mapEmbedUrl: "https://yandex.com/map-widget/v1/?z=16&ol=biz&oid=196915386086",
    coordinates: [40.765394, 72.354256],
  },
  { 
    id: '5',
    name: { 
      uzb: "Farg'ona filiali", 
      rus: 'Ферганский филиал', 
      eng: 'Fergana Branch' 
    },
    phones: ['+998 55 810-40-20'],
    mapEmbedUrl: "https://yandex.com/map-widget/v1/?z=16&ol=biz&oid=196915386086",
    coordinates: [40.765394, 72.354256],
  },
  { 
    id: '6', 
    name: { 
      uzb: "Furqat filiali", 
      rus: 'Фуркатский филиал', 
      eng: 'Furqat Branch' 
    },
    phones: ['+998 55 203-32-12'],
    mapEmbedUrl: "https://yandex.com/map-widget/v1/?z=16&ol=biz&oid=196915386086",
    coordinates: [40.765394, 72.354256],
  },
  { 
    id: '7', 
    name: { uzb: "Paxtaobod filiali", rus: "Пахтаабадский филиал", eng: "Pakhtaobod Branch" },
    phones: ['+998 55 202-35-12'],
    mapEmbedUrl: "https://yandex.com/map-widget/v1/?z=16&ol=biz&oid=196915386086",
    coordinates: [40.765394, 72.354256],
  },
  { 
    id: '8', 
    name: { 
      uzb: "Jahon bozor filiali", 
      rus: 'Филиал Жахон бозор', 
      eng: 'Jahon Bozor Branch' 
    },
    phones: ['+998 55 201-67-61'],
    mapEmbedUrl: "https://yandex.com/map-widget/v1/?z=16&ol=biz&oid=196915386086",
    coordinates: [41.311151, 69.279737],
  },
];