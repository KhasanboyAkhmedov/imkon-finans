export interface Branch {
  _id: string;
  name: {
    uzb: string;
    rus: string;
    eng: string;
  };
  phones: string[];
  mapEmbedUrl: string;
  workingDays?: {
    uzb: string;
    rus: string;
    eng: string;
  },
  workingHours?: string;
  coordinates?: [string, string];
}

export const branches: Branch[] = [
  { 
    _id: '1', 
    name: { uzb: 'Bosh ofis', rus: 'Головной офис', eng: 'Head Office' }, 
    phones: ['+998 74 228-32-12', '+998 78 298-12-35'],
    workingDays: {
        uzb: "du-sh", 
        rus: 'пн-сб', 
        eng: 'mon-sat' 
    },
    workingHours: "9.00-18.00",
    mapEmbedUrl: "https://yandex.uz/maps/10329/andijan/?ll=72.360667%2C40.768785&mode=search&sll=72.354389%2C40.765167&text=40.765167%2C72.354389&utm_source=share&z=14",
  },
  { 
    _id: '2', 
    name: { 
      uzb: 'Asaka filiali', 
      rus: 'Асакинский филиал', 
      eng: 'Asaka Branch' 
    },
    phones: ['+998 55 203-35-12'],
    workingDays: {
        uzb: "du-sh", 
        rus: 'пн-сб', 
        eng: 'mon-sat' 
    },
    workingHours: "9.00-18.00",
    mapEmbedUrl: "https://yandex.uz/maps/189659/asaka/?ll=72.236604%2C40.649656&mode=search&sll=72.244944%2C40.645889&text=40.645889%2C72.244944&utm_source=share&z=14",
  },
  { 
    _id: '3', 
    name: { uzb: 'Jalaquduq filiali', rus: 'Джалахудукский филиал', eng: 'Jalaquduq Branch' }, 
    phones: ['+998 74 755-22-30'],
    workingDays: {
        uzb: "du-sh", 
        rus: 'пн-сб', 
        eng: 'mon-sat' 
    },
    workingHours: "9.00-18.00",
    mapEmbedUrl: "https://yandex.uz/maps/189939/jalakuduk/?ll=72.636916%2C40.725702&mode=search&sll=72.637472%2C40.723333&text=40.723333%2C72.637472&utm_source=share&z=14",
  },
  { 
    _id: '4', 
    name: { 
      uzb: "Bo'ston (Buloqboshi) filiali", 
      rus: 'Бустонский (Булокбоши) филиал', 
      eng: 'Boston (Buloqboshi) Branch' 
    },
    phones: ['+998 55 203-12-35'],
    workingDays: {
        uzb: "du-sh", 
        rus: 'пн-сб', 
        eng: 'mon-sat' 
    },
    workingHours: "9.00-18.00",
    mapEmbedUrl: "https://yandex.uz/maps/?ll=72.500435%2C40.629154&mode=search&sll=72.500250%2C40.629250&text=40.629250%2C72.500250&utm_source=share&z=17",
  },
  { 
    _id: '5',
    name: { 
      uzb: "Farg'ona filiali", 
      rus: 'Ферганский филиал', 
      eng: 'Fergana Branch' 
    },
    phones: ['+998 55 810-40-20'],
    workingDays: {
        uzb: "du-sh", 
        rus: 'пн-сб', 
        eng: 'mon-sat' 
    },
    workingHours: "9.00-18.00",
    mapEmbedUrl: "https://yandex.uz/maps/10336/fergana/?ll=71.802376%2C40.386343&mode=search&sll=71.802056%2C40.386139&text=40.386139%2C71.802056&utm_source=share&z=15",
  },
  { 
    _id: '6', 
    name: { uzb: "Paxtaobod filiali", rus: "Пахтаабадский филиал", eng: "Pakhtaobod Branch" },
    phones: ['+998 55 202-35-12'],
    workingDays: {
        uzb: "du-sh", 
        rus: 'пн-сб', 
        eng: 'mon-sat' 
    },
    workingHours: "9.00-18.00",
    mapEmbedUrl: "https://yandex.uz/maps/?ll=72.526951%2C40.929971&mode=search&sll=72.494806%2C40.930833&text=40.930833%2C72.494806&utm_source=share&z=11",
  }
];