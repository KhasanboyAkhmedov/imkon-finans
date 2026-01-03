import { agro, bank, business, groupSolid, hat, trust } from "../../assets";

interface Product {
  id: number;
  title: string;
  description: string;
  icon: string;
  isPrimary?: boolean;
  path: string;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Ishonch Kredit",
    description: "1 mln so'mdan 10 mln so'mgacha, garovsiz va tezkor 1 mln so'mdan 10 mln so'mgacha, garovsiz va tezkor",
    icon: trust,
    path: "/credits/trust",
  },
  {
    id: 2,
    title: "Ta'lim Kredit",
    description: "1 mln so'mdan 20 mln so'mgacha, 3 yillik muddatda 1 mln so'mdan 20 mln so'mgacha, 3 yillik muddatda",
    icon: hat,
    path: "/credits/education",
  },
  {
    id: 3,
    title: "Garovsiz Kredit",
    description: "1 mln so'mdan 15 mln so'mgacha, garovsiz va kafolatsiz 1 mln so'mdan 15 mln so'mgacha, garovsiz va kafolatsiz",
    icon: bank,
    path: "/credits/unsecured",
  },
  {
    id: 4,
    title: "Imkon Agro",
    description: "Qishloq xo'jaligi loyihalari uchun 1 mln so'mdan 300 mln so'mgacha Qishloq xo'jaligi loyihalari uchun 1 mln so'mdan 300 mln so'mgacha",
    icon: agro,
    path: "/credits/agro",
  },
  {
    id: 5,
    title: "Imkon Biznes",
    description: "Tadbirkorlik va investitsiya loyihalari uchun 1 mln so'mdan 300 mln so'mgacha Tadbirkorlik va investitsiya loyihalari uchun 1 mln so'mdan 300 mln so'mgacha",
    icon: business,
    path: "/credits/business",
  },
  {
    id: 6,
    title: "Imkon Guruh",
    description: "3 dan 7 kishilik guruhlar uchun, 1 mln so'mdan 10 mln so'mgacha 3 dan 7 kishilik guruhlar uchun, 1 mln so'mdan 10 mln so'mgacha",
    icon: groupSolid,
    path: "/credits/group",
  }
];
