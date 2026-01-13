export interface Branch {
  id: string;
  name: string;
  phones: string[];
  mapEmbedUrl: string;
  coordinates: number[]; 
}

export const branches: Branch[] = [
  { 
    id: '1', 
    name: 'Bosh ofis', 
    phones: ['+998 74 228-32-12', '+998 78 298-12-35'],
    mapEmbedUrl: "https://yandex.com/map-widget/v1/?z=16&ol=biz&oid=196915386086",
    coordinates: [40.765394, 72.354256],
  },
  { 
    id: '2', 
    name: 'Asaka filiali', 
    phones: ['+998 55 203-35-12'],
    mapEmbedUrl: "https://yandex.com/map-widget/v1/?...",
    coordinates: [40.765394, 72.354256], 
  },
  { 
    id: '3', 
    name: 'Jalaquduq filiali', 
    phones: ['+998 74 755-22-30'],
    mapEmbedUrl: "https://yandex.com/map-widget/v1/?...",
    coordinates: [40.765394, 72.354256],
  },
  { 
    id: '4', 
    name: "Bo'ston (Buloqboshi) filiali",
    phones: ['+998 55 203-12-35'],
    mapEmbedUrl: "https://yandex.com/map-widget/v1/?...",
    coordinates: [40.765394, 72.354256],
  },
  { 
    id: '5', 
    name: "Farg'ona filiali",
    phones: ['+998 55 810-40-20'],
    mapEmbedUrl: "https://yandex.com/map-widget/v1/?...",
    coordinates: [40.765394, 72.354256],
  },
  { 
    id: '6', 
    name: "Furqat filiali",
    phones: ['+998 55 203-32-12'],
    mapEmbedUrl: "https://yandex.com/map-widget/v1/?...",
    coordinates: [40.765394, 72.354256],
  },
  { 
    id: '7', 
    name: "Paxtaobod filiali",
    phones: ['+998 55 202-35-12'],
    mapEmbedUrl: "https://yandex.com/map-widget/v1/?ll=[COORDINATES]&z=[ZOOM]",
    coordinates: [40.765394, 72.354256],
  },
  { 
    id: '8', 
    name: "Jahon bozor filiali",
    phones: ['+998 55 201-67-61'],
    mapEmbedUrl: "https://yandex.com/map-widget/v1/?ll=[COORDINATES]&z=[ZOOM]",
    coordinates: [41.311151, 69.279737],
  },
];