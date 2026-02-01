import { building, discussion, staff } from "../../assets/events";
import type { InfoCardItem } from "../../components/info-card/info-card.types";


export const EventsData: InfoCardItem[] = [
  {
    id: '1',
    title: "Lorem ipsum lorem ipsum ased",
    description: "«IMKON FINANS mikrokredit tashkiloti» mas’uliyati cheklangan jamiyati 2011-yil 9-sentabr kuni Andijon shahar hokimligi huzuridagi tadbirkorlik subyektlarini ro‘yxatdan o‘tkazish inspeksiyasi tomonidan №16255 tartib raqami bilan ro‘yxatga olingan va tegishli guvohnoma berilgan.",
    imageUrl: building,
    createdAt: new Date("2024-01-16"),
    link: "/events/"
  },
  {
    id: '2',
    title: "Lorem ipsum lorem ipsum ased",
    description: "«IMKON FINANS mikrokredit tashkiloti» mas’uliyati cheklangan jamiyati 2011-yil 9-sentabr kuni Andijon shahar hokimligi huzuridagi tadbirkorlik subyektlarini ro‘yxatdan o‘tkazish inspeksiyasi tomonidan №16255 tartib raqami bilan ro‘yxatga olingan va tegishli guvohnoma berilgan.",
    imageUrl: staff,
    createdAt: new Date("2024-01-16"),
    link: "/events/",
  },
  {
    id: '3',
    title: "Lorem ipsum lorem ipsum ased",
    description: "«IMKON FINANS mikrokredit tashkiloti» mas’uliyati cheklangan jamiyati 2011-yil 9-sentabr kuni Andijon shahar hokimligi huzuridagi tadbirkorlik subyektlarini ro‘yxatdan o‘tkazish inspeksiyasi tomonidan №16255 tartib raqami bilan ro‘yxatga olingan va tegishli guvohnoma berilgan.",
    imageUrl: discussion,
    createdAt: new Date("2024-01-16"),
    link: "/events/"
  },
];