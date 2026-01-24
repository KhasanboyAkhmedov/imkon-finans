import { FaBuildingColumns, FaGraduationCap, FaHandshake, FaStar } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { GiHills } from "react-icons/gi";
import { HiBriefcase } from "react-icons/hi";
import { HiMiniUserGroup } from "react-icons/hi2";
import { BsFillBriefcaseFill, BsFillHeartFill, BsFillLightningChargeFill, BsPersonFillCheck } from "react-icons/bs";
import { BiSolidIdCard } from "react-icons/bi";

export interface CreditTab {
  id: string;
  label: string;
  content: {
    title?: string;
    description?: string;
    min?: string;
    max?: string;
    unitMin?: string;
    unitMax?: string;
    isLargeText?: boolean;
    footer?: string;
  };
}

export interface Credit {
  id: string;
  title: string;
  description: string;
  icon: IconType;
  path: string;
  details: CreditTab[];
}

export const credits: Credit[] = [
  {
    id: "trust",
    title: "Ishonch Kredit",
    description: "Tashkilotning namunali mijozlari uchun garovsiz kredit. 1 mln so'mdan 10 mln so'mgacha, 3oydan 36oygacha muddatda, garovsiz",
    icon: FaHandshake,
    path: "/credits/trust",
    details: [
      {
        id: "purpose",
        label: "Kredit mahsulotining maqsadi",
        content: {
          title: `Ishonch krediti faqat "Imkon Finans" Mikromoliya Tashkilotining namunali mijozlariga beriladi`,
          description: "Tadbirkorlik faoliyati yoki shaxsiy ehtiyojlarini qondirish uchun mo'ljallangan",
          footer: "Maqsadli foydalanuv monitoring qilinmaydi"
        }
      },
      {
        id: "amount",
        label: "Kreditning miqdori",
        content: {
          title: `Ishonch krediti faqat "Imkon Finans" Mikromoliya Tashkilotining namunali mijozlariga beriladi`,
          min: "1 000 000",
          max: "10 000 000",
          unitMin: "so'mdan",
          unitMax: "so'mgacha",
          footer: "Yillik foiz stavkasi: 60%"
        }
      },
      {
        id: "duration",
        label: "Muddati",
        content: {
          title: `Ishonch krediti faqat "Imkon Finans" Mikromoliya Tashkilotining namunali mijozlariga beriladi`,
          min: "3",
          max: "36",
          unitMin: "oydan",
          unitMax: "oygacha",
          footer: "24 oydan yuqori bo'lgan muddatlarda to'lov jadvali differensial bo'ladi"
        }
      },
      {
        id: "collateral-type",
        label: "Ta'minot turi",
        content: {
          title: `Ishonch krediti faqat "Imkon Finans" Mikromoliya Tashkilotining namunali mijozlariga beriladi`,
          description: "Garovsiz",
          footer: "Ishonch asosida taqdim etiladi",
          isLargeText: true,
        }
      },
    ]
  },
  {
    id: "education",
    title: "Ta'lim Krediti",
    description: "Oliy va o'rta maxsus ta'lim, xususiy maktab hamda bog'chalar kontrakti uchun 20 mln so'mgacha, 3oydan 36oygacha muddatda garovsiz kredit",
    icon: FaGraduationCap,
    path: "/credits/education",
    details: [
      {
        id: "purpose",
        label: "Kredit mahsulotining maqsadi",
        content: {
          title: "Ta'lim muassasalarida kontrakt to'lovlarini amalga oshirish uchun.",
          description: "Oliy o'quv yurtlari, o'rta maxsus ta'lim muassasalari, xususiy maktab va maktabgacha ta'lim tashkilotlari uchun beriladi. Mablag' qat'iy ravishda ta'lim muassasasining bank hisob raqamiga o'tkaziladi.",
          footer: "To'lov o'tkazma yo'li bilan amalga oshiriladi"
        }
      },
      {
        id: "amount",
        label: "Kreditning miqdori",
        content: {
          min: "1 000 000",
          max: "20 000 000",
          unitMin: "so'mdan",
          unitMax: "so'mgacha",
          footer: "Yillik foiz stavkasi: 48%"
        }
      },
      {
        id: "duration",
        label: "Muddati",
        content: {
          min: "3",
          max: "36",
          unitMin: "oydan",
          unitMax: "oygacha",
          footer: "24 oydan yuqori bo'lgan muddatlarda to'lov jadvali differensial bo'ladi"
        }
      },
      {
        id: "collateral-type",
        label: "Ta'minot turi",
        content: {
          description: "GAROVSIZ",
          isLargeText: true,
          footer: "Mijozning to'lov qobiliyati asosida"
        }
      },
      {
        id: "requirements",
        label: "Mijozga talablar",
        content: {
          title: "O'zbekiston fuqarosi (18 yoshdan 70 yoshgacha)",
          description: "Salbiy kredit tarixiga ega bo'lmaslik va doimiy daromad manbaiga ega bo'lish lozim.",
          footer: "To'lov qobiliyati mavjudligi tekshiriladi"
        }
      },
      {
        id: "documents",
        label: "Kerakli hujjatlar",
        content: {
          title: "Shaxsni tasdiqlovchi hujjat va ta'lim shartnomasi",
          description: "Mijozning roziligi (foto uchun) va talaba (yoki jiyan/farzand) bilan birga tushilgan yuqori sifatli fotosurat.",
          footer: "Ta'lim muassasasidan shartnoma ko'rsatilishi shart"
        }
      }
    ]
  },
  {
    id: "unsecured",
    title: "Garovsiz Kredit",
    description: "Tadbirkorlik va shaxsiy ehtiyojlar uchun garovsiz hamda sug'urtasiz, 3oydan 36oygacha muddatda, 15 mln so'mgacha mikrokredit",
    icon: FaBuildingColumns,
    path: "/credits/unsecured",
    details: [
      {
        id: "purpose",
        label: "Kredit mahsulotining maqsadi",
        content: {
          title: "Shaxsiy ehtiyojlar va tadbirkorlik faoliyatini rivojlantirish uchun.",
          description: "Mebel, texnika, telefon sotib olish, davolanish, ta'mirlash yoki aylanma mablag'larni to'ldirish uchun beriladi. Maqsadli foydalanish monitoring qilinmaydi.",
          footer: "Garovsiz va sug'urtasiz taqdim etiladi"
        }
      },
      {
        id: "amount",
        label: "Kreditning miqdori",
        content: {
          min: "1 000 000",
          max: "10 000 000",
          unitMin: "so'mdan",
          unitMax: "so'mgacha",
          footer: "Takroriy mijozlarga (ijobiy tarix bilan) 15 mln so'mgacha berilishi mumkin. Yillik foiz stavkasi: 54%-60%"
        }
      },
      {
        id: "duration",
        label: "Muddati",
        content: {
          min: "3",
          max: "36",
          unitMin: "oydan",
          unitMax: "oygacha",
          footer: "24 oydan yuqori muddatlarda to'lov grafigi differensial bo'ladi"
        }
      },
      {
        id: "requirements",
        label: "Mijozga talablar",
        content: {
          title: "O'zbekiston fuqarosi (18 yoshdan 70 yoshgacha) bo'lishi lozim",
          description: "Salbiy kredit tarixiga ega bo'lmaslik, to'lov qobiliyati va tadbirkorlik uchun sharoitlar mavjudligi tekshiriladi",
          footer: "Turmush o'rtog'i (yoki ota-onasi) kafilligi talab etiladi"
        }
      },
    ]
  },
  {
    id: "agro",
    title: "Imkon Agro",
    description: "Qishloq xo'jaligi loyihalari uchun kredit. 1 mln so'mdan 300 mln so'mgacha, 3oydan 36oygacha muddatda, mol-mulk garovi yoki uchinchi shaxs kafilligi bilan imtiyozli kredit",
    icon: GiHills,
    path: "/credits/agro",
    details: [
      {
        id: "purpose",
        label: "Kredit mahsulotining maqsadi",
        content: {
          title: "Agrobiznes yo'nalishidagi loyihalarni moliyalashtirish uchun",
          description: "Dehqonchilik, chorvachilik, parrandachilik va bog'dorchilik kabi qishloq xo'jaligi faoliyatini rivojlantirish uchun mo'ljallangan",
          footer: "Istalgan agrobiznes loyihalari uchun"
        }
      },
      {
        id: "amount",
        label: "Kreditning miqdori",
        content: {
          title: "Yuridik va jismoniy shaxslar uchun turli cheklovlar mavjud",
          min: "1 000 000",
          max: "300 000 000",
          unitMin: "Jismoniy shaxslar uchun 100 mln so'mgacha",
          unitMax: "Yuridik shaxslar uchun 300 mln so'mgacha",
          footer: "Mol-mulk garovi asosida: 56% dan 51% gacha | Kafillik asosida: 60% dan 55% gacha"
        }
      },
      {
        id: "duration",
        label: "Muddati",
        content: {
          min: "3",
          max: "36",
          unitMin: "oydan",
          unitMax: "oygacha",
          footer: "24 oydan yuqori muddatlarda to'lov jadvali differensial bo'ladi"
        }
      },
      {
        id: "collateral-type",
        label: "Ta'minot turi",
        content: {
          title: "Mol-mulk garovi yoki kafillik asosida",
          description: "Mol-mulk garovi, uchinchi shaxs kafilligi yoki uy chorva mollari. Chorva mollari bozor narxiga 0.3 koeffitsiyenti bilan baholanadi",
          footer: "Garov va kafillik shartlari mavjud"
        }
      },
      {
        id: "requirements",
        label: "Mijozga talablar",
        content: {
          title: "Fuqaroligi bor va agrobiznes sharoitiga ega shaxslar",
          description: "18-70 yosh oralig'i bo'lishi, ijobiy kredit tarixi va qishloq xo'jaligini yuritish uchun yetarli shart-sharoitlar mavjud bo'lishi lozim",
          footer: "To'lov qobiliyati mavjudligi tekshiriladi"
        }
      },
      {
        id: "documents",
        label: "Kerakli hujjatlar",
        content: {
          title: "Shaxsiy va moliyaviy hujjatlar",
          description: "Daromadni tasdiqlovchi hujjatlar, ta'minot hujjatlari garov egasiga tegishli ekanligini bildiruvchi hujjarlar. Yuridik shaxslar uchun oxirgi moliyaviy hisobotlar talab etiladi",
          footer: "Kafildan (agar bor bo'lsa) uning shaxsini tasdiqlovchi hujjat so'raladi"
        }
      }
    ]
  },
  {
    id: "business",
    title: "Imkon Biznes",
    description: "Tadbirkorlik faoliyati va investitsiyalar uchun kredit. 1 mln so'mdan 300 mln so'mgacha, 3oydan 36oygacha muddatda, mol-mulk garovi yoki uchinchi shaxs kafilligi bilan",
    icon: HiBriefcase,
    path: "/credits/business",
    details: [
      {
        id: "purpose",
        label: "Kredit mahsulotining maqsadi",
        content: {
          title: "Tadbirkorlik faoliyati va investitsiya loyihalari uchun.",
          description: "Savdo, ishlab chiqarish, xizmat ko'rsatish sohalari hamda asosiy vositalarni sotib olish uchun mo'ljallangan.",
          footer: "Aylanma mablag'larni to'ldirish va investitsiyalar uchun"
        }
      },
      {
        id: "amount",
        label: "Kreditning miqdori",
        content: {
          title: "Yuridik va jismoniy shaxslar uchun turli cheklovlar mavjud",
          min: "1 000 000",
          max: "300 000 000",
          unitMin: "Jismoniy shaxslar uchun 100 mln so'mgacha",
          unitMax: "Yuridik shaxslar uchun 300 mln so'mgacha",
          footer: "Mol-mulk garovi asosida: 56% dan 51% gacha | Kafillik asosida: 60% dan 55% gacha"
        }
      },
      {
        id: "duration",
        label: "Muddati",
        content: {
          min: "3",
          max: "36",
          unitMin: "oydan",
          unitMax: "oygacha",
          footer: "24 oydan yuqori muddatlarda to'lov jadvali differensial bo'ladi"
        }
      },
      {
        id: "collateral-type",
        label: "Ta'minot turi",
        content: {
          title: "Mol-mulk garovi yoki kafillik asosida",
          description: "Mol-mulk garovi, uchinchi shaxs kafilligi va aylanma mablag'lar. Aylanma mablag'lar bozor narxiga 0.3 koeffitsiyenti bilan baholanadi.",
          footer: "Mol-mulk garovi yoki kafillik asosida taqdim etiladi"
        }
      },
      {
        id: "requirements",
        label: "Mijozga talablar",
        content: {
          title: "18 yoshdan 70 yoshgacha bo'lgan tadbirkorlar",
          description: "O'zbekiston fuqaroligi, ijobiy kredit tarixi va tadbirkorlikni yuritish uchun barcha shart-sharoitlar mavjudligi",
          footer: "To'lov qobiliyati mavjudligi tekshiriladi"
        }
      },
      {
        id: "documents",
        label: "Kerakli hujjatlar",
        content: {
          title: "Shaxsiy va moliyaviy hujjatlar",
          description: "Daromadni tasdiqlovchi hujjatlar, ta'minot hujjatlari garov egasiga tegishli ekanligini bildiruvchi hujjarlar. Yuridik shaxslar uchun oxirgi moliyaviy hisobotlar talab etiladi",
          footer: "Kafildan (agar bor bo'lsa) uning shaxsini tasdiqlovchi hujjat so'raladi"
        }
      }
    ]
  },
  {
    id: "group",
    title: "Imkon Guruh",
    description: "3 tadan 7 tagacha a'zodan iborat guruhlar uchun garovsiz, o'zaro kafillik asosidagi kredit",
    icon: HiMiniUserGroup,
    path: "/credits/group",
    details: [
      {
        id: "purpose",
        label: "Kredit mahsulotining maqsadi",
        content: {
          title: "Tadbirkorlik, qishloq xo'jaligi yoki shaxsiy ehtiyojlar uchun mo'ljallangan",
          description: "Guruh a'zolarining biznes faoliyati yoki shaxsiy ehtiyojlarini qondirish uchun beriladi. Maqsadli foydalanuv monitoring qilinmaydi",
          footer: "Guruh a'zolari soni: 3 tadan 7 kishigacha"
        }
      },
      {
        id: "amount",
        label: "Kreditning miqdori",
        content: {
          title: "Kredit sikliga qarab har bir a'zo uchun limitlar: 1-marta: 1-5 mln so'm | 2-marta: 1-8 mln so'm | 3-marta va undan ko'p: 1-10 mln so'm",
          min: "1 000 000",
          max: "10 000 000",
          unitMin: "so'mdan",
          unitMax: "so'mgacha",
          footer: "Har bir guruh a'zosi uchun alohida limit hisoblanadi. Yillik foiz stavkasi: 1-marta: 60% | 2-marta: 58% | 3-marta: 57% | 4-marta: 56% | 5-marta va undan ko'p: 55%"
        }
      },
      {
        id: "duration",
        label: "Muddati",
        content: {
          title: `Tadbirkorlik, qishloq xo'jaligi yoki shaxsiy ehtiyojlar uchun mo'ljallangan`,
          min: "3",
          max: "36",
          unitMin: "oydan",
          unitMax: "oygacha",
          footer: "24 oydan yuqori muddatlarda to'lov jadvali differensial bo'ladi"
        }
      },
      {
        id: "collateral-type",
        label: "Ta'minot turi",
        content: {
          title: "Guruh kafilligi",
          description: "Guruh a'zolari bir-birlari uchun kafil bo'ladilar",
          isLargeText: true,
          footer: "O'zaro birdamlik javobgarligi"
        }
      },
      {
        id: "requirements",
        label: "Talablari",
        content: {
          title: "O'zbekiston fuqorosi bo'lishi. Bir-birini taniydigan hamkorlar yoki qo'shnilar",
          description: "A'zolar bir-birini yaxshi tanishi do'st, qo'shni yoki hamkasb bo'lishi shart. Birga yashovchi oila a'zolari bitta guruhga a'zo bo'lishi mumkin emas",
          footer: "Yoshi 18 dan 70 yoshgacha bo'lgan fuqarolar uchun"
        }
      },
      {
        id: "documents",
        label: "Kerakli hujjatlar",
        content: {
          title: "Shaxsiy va daromad hujjatlari",
          description: "Har bir a'zoning shaxsini tasdiqlovchi hujjati va daromadlari to'g'risidagi ma'lumotlar",
          footer: "Guruh a'zolari soni: 3 tadan 7 kishigacha"
        }
      }
    ]
  },
  {
    id: "quick",
    title: "Tez Kredit",
    description: "Tadbirkorlik yoki shaxsiy ehtiyojlar uchun garovsiz va tezkor kredit. 1 mln so'mdan 5 mln so'mgacha, 3oydan 36oygacha muddatda",
    icon: BsFillLightningChargeFill,
    path: "/credits/quick",
    details: [
      {
        id: "purpose",
        label: "Kredit mahsulotining maqsadi",
        content: {
          title: "Tezkor ehtiyojlar va tadbirkorlik faoliyati uchun",
          description: "Mebel, texnika, telefon sotib olish, davolanish, ta'mirlash yoki boshqa shaxsiy ehtiyojlar uchun beriladi. Maqsadli foydalanuv monitoring qilinmaydi",
          footer: "Garovsiz va tezkor rasmiylashtirib beriladi"
        }
      },
      {
        id: "amount",
        label: "Kreditning miqdori",
        content: {
          title: "Tezkor ehtiyojlar va tadbirkorlik faoliyati uchun",
          min: "1 000 000",
          max: "5 000 000",
          unitMin: "so'mdan",
          unitMax: "so'mgacha",
          footer: "Mijoz to'lov qobiliyatiga ega bo'lishi lozim"
        }
      },
      {
        id: "duration",
        label: "Muddati",
        content: {
          title: "Yillik foiz stavkasi: 1-marta: 66% | 2-marta: 64% | 3-marta: 63% | 4-marta: 62% | 5-marta va undan ko'p: 61%",
          min: "3",
          max: "36",
          unitMin: "oydan",
          unitMax: "oygacha",
          footer: "24 oydan yuqori muddatlarda to'lov jadvali differensial bo'ladi"
        }
      },
      {
        id: "requirements",
        label: "Mijozga talablar",
        content: {
          title: "O'zbekiston fuqarosi (18 yoshdan 70 yoshgacha) bo'lishi lozim",
          description: "Salbiy kredit tarixiga ega bo'lmaslik va to'lov qobiliyatiga ega bo'lishi",
          footer: "Garovsiz va tezkor rasmiylashtirib beriladi"
        }
      },
      {
        id: "documents",
        label: "Kerakli hujjatlar",
        content: {
          title: "Talab qilinadigan hujjatlar",
          description: "Shaxsni tasdiqlovchi hujjatlar. Daromadni tasdiqlovchi hujjatlar (mavjud bo'lsa) taqdim etilishi lozim",
          footer: "Soddalashtirilgan jarayon, tez va oson"
        }
      },
    ]
  },
  {
    id: "guaranteed",
    title: "Imkon Kafolat",
    description: "Shaxsiy ehtiyojlar yoki tadbirkorlik uchun uchinchi shaxs kafilligi bilan 20 mln so'mgacha beriladigan kredit",
    icon: BsPersonFillCheck,
    path: "/credits/guaranteed",
    details: [
      {
        id: "purpose",
        label: "Kredit mahsulotining maqsadi",
        content: {
          title: "Shaxsiy ehtiyojlarini qondirish, tadbirkorlik yoki qishloq xo'jaligini rivojlantirish uchun",
          description: "Mebel, texnika sotib olish, davolanish, ta'mirlash yoki biznes loyihalar uchun beriladi",
          footer: "Maqsadli foydalanuv monitoring qilinmaydi"
        }
      },
      {
        id: "amount",
        label: "Kreditning miqdori",
        content: {
          title: "Yillik foiz stavkasi: 1-marta: 56% | 2-marta: 54% | 3-marta: 53% | 4-marta: 52% | 5-marta va undan ko'p: 51%",
          min: "1 000 000",
          max: "20 000 000",
          unitMin: "so'mdan",
          unitMax: "so'mgacha",
          footer: "Maqsadli foydalanuv monitoring qilinmaydi"
        }
      },
      {
        id: "duration",
        label: "Muddati",
        content: {
          title: "Shaxsiy ehtiyojlarini qondirish, tadbirkorlik yoki qishloq xo'jaligini rivojlantirish uchun",
          min: "3",
          max: "36",
          unitMin: "oydan",
          unitMax: "oygacha",
          footer: "24 oydan yuqori muddatlarda to'lov jadvali differensial bo'ladi"
        }
      },
      {
        id: "collateral-type",
        label: "Ta'minot turi",
        content: {
          title: "Uchinchi shaxs kafilligi",
          description: "Kamida 6 oylik ish stajiga ega bo'lgan va rasmiy daromadli uchinchi shaxs kafilligi.",
          isLargeText: true,
          footer: "Kafilning daromadi to'lovdan kamida 3 barobar yuqori bo'lishi shart"
        }
      },
      {
        id: "requirements",
        label: "Mijoz va kafilga talablar",
        content: {
          title: "Byudjet tashkiloti xodimi yoki rasmiy ish haqiga ega bo'lishi lozim",
          description: "Mijoz va kafil O'zbekiston fuqarosi (18 yoshdan 70 yoshgacha) bo'lishi, salbiy kredit tarixiga ega bo'lmagan va kamida 6 oylik uzluksiz ish stajiga ega bo'lishi lozim",
          footer: "Oila a'zolarining rasmiy daromadlari ham inobatga olinadi"
        }
      },
    ]
  },
  {
    id: "intent",
    title: "Imkon Niyat",
    description: "Shaxsiy ehtiyojlar uchun mol-mulk garovi yoki uchinchi shaxs kafilligi bilan 100 mln so'mgacha kredit.",
    icon: FaStar,
    path: "/credits/intent",
    details: [
      {
        id: "purpose",
        label: "Kredit mahsulotining maqsadi",
        content: {
          title: "Iste'mol ehtiyojlari va shaxsiy maqsadlar qondirish uchun mo'ljallangan",
          description: "Mebel, texnika, telefon sotib olish, davolanish, uy-joy ta'mirlash, avtomobil xarid qilish yoki dam olish maskanlari uchun beriladi",
          footer: "Maqsadli foydalanuv monitoring qilinmaydi"
        }
      },
      {
        id: "amount",
        label: "Kreditning miqdori",
        content: {
          title: "Iste'mol ehtiyojlari va shaxsiy maqsadlar qondirish uchun mo'ljallangan",
          min: "1 000 000",
          max: "100 000 000",
          unitMin: "so'mdan",
          unitMax: "so'mgacha",
          footer: "Maqsadli foydalanuv monitoring qilinmaydi"
        }
      },
      {
        id: "duration",
        label: "Muddati",
        content: {
          title: "Mol-mulk garovida: 56% - 51% | Kafillik ta'minotida: 60% - 55%",
          min: "3",
          max: "36",
          unitMin: "oydan",
          unitMax: "oygacha",
          footer: "24 oydan yuqori muddatlarda to'lov jadvali differensial bo'ladi"
        }
      },
      {
        id: "collateral-type",
        label: "Ta'minot turi",
        content: {
          title: "Garov yoki uchinchi shaxs kafilligi",
          description: "Mijoz tanloviga ko'ra mol-mulk garovi yoki rasmiy daromadga ega bo'lgan uchinchi shaxs kafilligi qabul qilinadi.",
          footer: "Garov egasining shaxsini tasdiqlovchi hujjatlari talab etiladi"
        }
      },
      {
        id: "requirements",
        label: "Mijozga talablar",
        content: {
          title: "O'zbekiston fuqarosi (18 yoshdan 70 yoshgacha)",
          description: "Salbiy kredit tarixiga ega bo'lmaslik va kreditni qaytarish uchun yetarli to'lov qobiliyati mavjudligi.",
          footer: "Doimiy daromad manbaiga ega bo'lishi lozim"
        }
      },
      {
        id: "documents",
        label: "Kerakli hujjatlar",
        content: {
          title: "Hujjatlar to'plami",
          description: "Mijoz va kafilning shaxsiy hujjatlari, daromadni tasdiqlovchi hujjatlar",
          footer: "Ta'minot (garov) hujjatlari, garov egasiga tegishliylik hujjatlari taqdim etilishi shart"
        }
      }
    ]
  },
  {
    id: "kiva",
    title: "KIVA",
    description: "Ayollar tadbirkorligi va qishloq xo'jaligini qo'llab-quvvatlash uchun 50 mln so'mgacha imtiyozli kredit, mol-mulk garovi yoki uchinchi shaxs kafilligi asosida",
    icon: BsFillBriefcaseFill,
    path: "/credits/kiva",
    details: [
      {
        id: "purpose",
        label: "Kredit mahsulotining maqsadi",
        content: {
          title: "Qishloq xo'jaligi loyihalari, tadbirkorlik faoliyati va ayollar tadbirkorligini qo'llab-quvvatlashga qaratilgan",
          description: "Tadbirkorlik (savdo, ishlab chiqarish, xizmatlar) yoki qishloq xo'jaligi (chorvachilik, dehqonchilik) loyihalari uchun mo'ljallangan",
          footer: "Kiva xalqaro platformasi doirasidagi imtiyozli loyiha"
        }
      },
      {
        id: "amount",
        label: "Kreditning miqdori",
        content: {
          title: "Qishloq xo'jaligi loyihalari, tadbirkorlik faoliyati va ayollar tadbirkorligini qo'llab-quvvatlashga qaratilgan",
          min: "1 000 000",
          max: "50 000 000",
          unitMin: "so'mdan",
          unitMax: "so'mgacha",
          footer: "Kiva xalqaro platformasi doirasidagi imtiyozli loyiha"
        }
      },
      {
        id: "duration",
        label: "Muddati",
        content: {
          title: "Mol-mulk garovida: 54% - 49% | Kafillik ta'minotida: 60% - 55%",
          min: "3",
          max: "24",
          unitMin: "oydan",
          unitMax: "oygacha",
          footer: "Maksimal muddat 24 oy"
        }
      },
      {
        id: "collateral-type",
        label: "Ta'minot turi",
        content: {
          title: "Garov, kafillik yoki aylanma mablag'lar",
          description: "Mol-mulk, uchinchi shaxs kafilligi, chorva mollari yoki aylanma mablag'lar (tovar). Chorva va tovarlar 0.3 koeffitsiyenti bilan baholanadi",
          footer: "Baholash koeffitsiyenti: 0.3"
        }
      },
      {
        id: "requirements",
        label: "Mijozga talablar",
        content: {
          title: "18 yoshdan 70 yoshgacha bo'lgan tadbirkorlar",
          description: "O'zbekiston fuqaroligi, ijobiy kredit tarixi hamda tadbirkorlik yoki dehqonchilik yuritish uchun yetarli shart-sharoitlar mavjudligi",
          footer: "To'lov qobilliyati mavjudligi"
        }
      },
      {
        id: "documents",
        label: "Kerakli hujjatlar",
        content: {
          title: "Hujjatlar to'plami",
          description: "Shaxsiy va daromadni tasdiqlovchi hujjatlari, mijozning roziligi hamda biznes fonidagi yuqori sifatli fotosurati",
          footer: "Mijoz biznes fonida fotosurat taqdim etishi lozim"
        }
      }
    ]
  },
  {
    id: "holy-woman",
    title: "Muqaddas Ayol",
    description: "Kam ta'minlangan ayollarga tadbirkorlik faoliyati uchun foizsiz va ta'minotsiz 12 mln so'mgacha yordam krediti",
    icon: BsFillHeartFill,
    path: "/credits/holy-woman",
    details: [
      {
        id: "purpose",
        label: "Kredit mahsulotining maqsadi",
        content: {
          title: "Kam ta'minlangan tadbirkor ayollarni qo'llab-quvvatlash uchun mo'ljallangan",
          description: "Tadbirkorlik faoliyatini olib borayotgan ayollarga aylanma mablag'lar va investitsiya loyihalari (savdo, ishlab chiqarish, xizmat ko'rsatish) uchun beriladi",
          footer: "Ta'minotsiz va foizsiz kredit"
        }
      },
      {
        id: "amount",
        label: "Kreditning miqdori",
        content: {
          title: "Kam ta'minlangan tadbirkor ayollarni qo'llab-quvvatlash uchun",
          min: "1 000 000",
          max: "12 000 000",
          unitMin: "so'mdan",
          unitMax: "so'mgacha",
          footer: "Foizsiz kredit"
        }
      },
      {
        id: "duration",
        label: "Muddati",
        content: {
          title: "Ushbu kredit mahsuloti yillik 0% foiz stavkasi bilan taqdim etiladi",
          min: "3",
          max: "24",
          unitMin: "oydan",
          unitMax: "oygacha",
          footer: "Maksimal muddat 24 oy"
        }
      },
      {
        id: "collateral-turi",
        label: "Ta'minot turi",
        content: {
          title: "Hech qanday garov yoki kafillik talab etilmaydi",
          description: "Kredit hech qanday garov yoki kafillik hujjatlarisiz, ishonch asosida ajratiladi",
          isLargeText: true,
          footer: "Garov talab etilmaydi"
        }
      },
      {
        id: "requirements",
        label: "Mijozga talablar",
        content: {
          title: "O'zbekiston fuqarosi bo'lgan ayollar uchun",
          description: "Yoshi 18-70 oralig'ida, salbiy kredit tarixiga ega bo'lmagan va tadbirkorlikni yuritish uchun shart-sharoiti bor ayollar",
          footer: "To'lov qobiliyati mavjudligi tekshiriladi"
        }
      },
      {
        id: "documents",
        label: "Kerakli hujjatlar",
        content: {
          title: "Minimal hujjatlar",
          description: "Mijozning shaxsini tasdiqlovchi hujjati (passport yoki ID-karta)",
          footer: "Soddalashtirilgan rasmiylashtirish jarayoni"
        }
      }
    ]
  },
  {
    id: "entrepreneur-woman",
    title: "Tadbirkor Ayol",
    description: "Ayollarga tadbirkorlik uchun 100 mln so'mgacha kredit. Intizomli mijozlar uchun to'langan foizlarning 10% keshbek sifatida qaytariladi",
    icon: BiSolidIdCard,
    path: "/credits/entrepreneur-woman",
    details: [
      {
        id: "purpose",
        label: "Kredit mahsulotining maqsadi",
        content: {
          title: "Ayollar tadbirkorligini rivojlantirish uchun",
          description: "Savdo, ishlab chiqarish, xizmat ko'rsatish sohalarida aylanma mablag'larni to'ldirish va asosiy vositalarni sotib olish uchun beriladi",
          footer: "Investitsiya loyihalari va tadbirkorlik uchun"
        }
      },
      {
        id: "amount",
        label: "Kreditning miqdori",
        content: {
          title: "Ta'minot turiga qarab limitlar: garovsiz maksimal: 10 mln so'm",
          min: "1 000 000",
          max: "100 000 000",
          unitMin: "so'mdan",
          unitMax: "so'mgacha",
          footer: "Garovli: 54% - 49% | Garovsiz yoki kafillikda: 58% - 53%. Mol-mulk garovi bilan 100 mln so'mgacha"
        }
      },
      {
        id: "duration",
        label: "Muddati",
        content: {
          title: "Agar mijoz kreditdan foydalanish davomida to'lovlarni kechiktirmasa, to'langan foizlarning 10% qismi keshbek sifatida qaytarib beriladi",
          min: "3",
          max: "36",
          unitMin: "oydan",
          unitMax: "oygacha",
          footer: "Yillik kechikishlar soni 10 kundan oshmasligi lozim"
        }
      },
      {
        id: "collateral-type",
        label: "Ta'minot turi",
        content: {
          title: "Garov, kafillik yoki garovsiz",
          description: "Mol-mulk garovi, uchinchi shaxs kafilligi yoki mijozning ijobiy tarixiga asosan garovsiz beriladi",
          footer: "Tanlangan ta'minotga qarab foiz stavkasi o'zgaradi"
        }
      },
      {
        id: "requirements",
        label: "Mijozga talablar",
        content: {
          title: "O'zbekiston fuqarosi bo'lgan ayol bo'lishi",
          description: "18 yoshdan 70 yoshgacha, ijobiy kredit tarixiga ega bo'lishi va tadbirkorlik shart-sharoitiga ega ayollar uchun",
          footer: "To'lov qobiliyati mavjudligi bo'lishi lozim"
        }
      },
      {
        id: "documents",
        label: "Kerakli hujjatlar",
        content: {
          title: "Hujjatlar to'plami",
          description: "Shaxsiy hujjatlar, daromadni tasdiqlovchi hujjatlar va ta'minotga oid (garov/kafil) hujjatlar",
          footer: "To'lov qobiliyati mavjudligi bo'lishi lozim"
        }
      }
    ]
  },
];