import type { IconType } from "react-icons";
import { BiSolidIdCard } from "react-icons/bi";
import { BsFillBriefcaseFill, BsFillHeartFill, BsFillLightningChargeFill, BsPersonFillCheck } from "react-icons/bs";
import { FaBuildingColumns, FaGraduationCap, FaHandshake, FaStar } from "react-icons/fa6";
import { GiHills } from "react-icons/gi";
import { HiBriefcase } from "react-icons/hi";
import { HiMiniUserGroup } from "react-icons/hi2";

export interface Credit {
    id: number | string;
    title: string;
    description: string;
    icon: IconType;
    path: string;
}

export const credits: Credit[] = [
  {
    id: "trust",
    title: "Ishonch Kredit",
    description: "Faol mijozlar uchun garovsiz kredit. 1 mln so'mdan 10 mln so'mgacha, 3oydan 36oygacha muddatda, garovsiz",
    icon: FaHandshake,
    path: "/credits/trust",
  },
  {
    id: "education",
    title: "Ta'lim Kredit",
    description: "Ta'lim kontrakti uchun kredit. 1 mln so'mdan 10 mln so'mgacha, 3oydan 36oygacha muddatda, garovsiz",
    icon: FaGraduationCap,
    path: "/credits/education",
  },
  {
    id: "unsecured",
    title: "Garovsiz Kredit",
    description: "Garovsiz va sug'urtasiz 1 mln so'mdan 10 mln so'mgacha, 3oydan 36oygacha muddatda",
    icon: FaBuildingColumns,
    path: "/credits/unsecured",
  },
  {
    id: "agro",
    title: "Imkon Agro",
    description: "Qishloq xo'jaligi loyihalari uchun kredit. 1 mln so'mdan 300 mln so'mgacha, 3oydan 36oygacha muddatda, mol-mulk garovi yoki uchinchi shaxs kafilligi bilan",
    icon: GiHills,
    path: "/credits/agro",
  },
  {
    id: "business",
    title: "Imkon Biznes",
    description: "Tadbirkorlik faoliyati va investitsiyalar uchun kredit. 1 mln so'mdan 300 mln so'mgacha, 3oydan 36oygacha muddatda, mol-mulk garovi yoki uchinchi shaxs kafilligi bilan",
    icon: HiBriefcase,
    path: "/credits/business",
  },
  {
    id: "group",
    title: "Imkon Guruh",
    description: "3 tadan 7 tagacha a'zodan iborat guruhlar uchun garovsiz, o'zaro kafillik asosidagi kredit. 1 mln so'mdan 10 mln so'mgacha, 3oydan 36oygacha muddatda. Guruh kafilligi asosida",
    icon: HiMiniUserGroup,
    path: "/credits/group",
  },
  {
    id: "quick",
    title: "Tez Kredit",
    description: "Tadbirkorlik yoki shaxsiy ehtiyojlar uchun garovsiz kredit. 1 mln so'mdan 5 mln so'm, 3oydan 36oygacha muddatda",
    icon: BsFillLightningChargeFill,
    path: "/credits/quick",
  },
  {
    id: "guaranteed",
    title: "Imkon Kafolat Kredit",
    description: "Shaxsiy ehtiyojlar yoki tadbirkorlik uchun uchinchi shaxs kafilligi bilan kredit. 1 mln so'mdan 20 mln so'mgacha, 3oydan 36oygacha muddatda",
    icon: BsPersonFillCheck,
    path: "/credits/guaranteed",
  },
  {
    id: "intent",
    title: "Imkon Niyat",
    description: "Shaxsiy ehtiyojlar uchun mol-mulk garovi yoki uchinchi shaxs kafilligi bilan kredit. 1 mln so'mdan 100 mln so'mgacha, 3oydan 36oygacha muddatda",
    icon: FaStar,
    path: "/credits/intent",
  },
  {
    id: "kiva",
    title: "KIVA",
    description: "Tadbirkorlik yoki qishloq xo'jaligi loyihalari uchun kredit. 1 mln so'mdan 50 mln so'mgacha, 3oydan 24oygacha, mol-mulk garovi yoki uchinchi shaxs kafilligi bilan. Ayollar tadbirkorligini qo'llab-quvvatlashga mo'ljallangan",
    icon: BsFillBriefcaseFill,
    path: "/credits/kiva",
  },
  {
    id: "holy-woman",
    title: "Muqaddas Ayol",
    description: "Kam ta'minlangan ayollarga tadbirkorlik faoliyati uchun foizsiz kredit. 1 mln so'mdan 12 mln so'mgacha, 3oydan 24oygacha, ta'minotsiz.",
    icon: BsFillHeartFill,
    path: "/credits/holy-woman",
  },
  {
    id: "entrepreneur-woman",
    title: "Tadbirkor Ayol",
    description: "Ayollarga tadbirkorlik faoliyati uchun kredit. 1 mln so'mdan 100 mln so'mgacha, 3oydan 36oygacha, mol-mulk garovi, uchinchi shaxs kafilligi yoki garovsiz. Mijoz tomonidan to'lov kechiktirilmasa foiz to'lovlarining 10% keshbek orqali qaytariladi",
    icon: BiSolidIdCard,
    path: "/credits/entrepreneur-woman",
  }
];