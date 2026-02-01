import type { NavMenu } from "../../types/navbar.types";

export const navMenu: NavMenu[] = [
    {
        title: 'Jamiyat haqida',
        variant: 'filled',
        items: [
            { label: "Jamiyat tarixi", url: "/history" },
            { label: "Kuzatuv kengashi", url: "/council" },
            { label: "Boshqaruv organi", url: "/management" },
            { label: "Jamiyat tashkiliy tuzilmasi", url: "/organizational-structure" },
            { label: "Ish o'rinlari", url: "/vacancies" },
            { label: "Qabul qilish kunlari", url: "/reception-days" },
            { label: "Xamkorlar", url: "/partners" },
            { label: "Aloqalar", url: "/contacts" },
        ]
    },
    {
        title: 'Xizmatlar',
        variant: 'stock',
        items: [
            { label: "Mikromoliyaviy xizmatlar", url: "/our-services" },
            { label: "Mikrokredit va mikroqarzlar", url: "/our-services" },
            { label: "Agentlik xizmati", url: "/our-services" },
        ],
    },
    {
        title: 'Aksiyadorlar',
        url: '/',
        variant: 'stock',
        items: [
            {
                label: 'Biznes rejalar',
                url: '/business-plans',
            },
            {
                label: 'Dividendlar',
                url: '/dividends',
            },
            {
                label: 'Qayta sotib olingan aksiyalar',
                url: '/re-purchased-shares',
            },
            {
                label: 'Emissiya',
                url: '/emission',
            },
            {
                label: 'Hisobotlar',
                url: '/reports',
            },
            {
                label: 'Muhim faktlar',
                url: '/important-facts',
            },
        ],
    },
    {
        title: 'Korporativ Boshqaruv',
        url: '/coorporate-governance',
        variant: 'stock',
        items: [
            {
                label: 'Jamiyat nizomi',
                url: '/corporate-charter',
            },
            {
                label: 'Sertifikatlar',
                url: '/certificates',
            },
            {
                label: 'Rivojlanish strategiyasi',
                url: '/development-strategy',
            },
            {
                label: 'Affillangan shaxslar',
                url: '/affiliated-individuals',
            },
            {
                label: 'Korporativ boshqaruv kodeksi',
                url: '/corporate-governance-code',
            },
            {
                label: 'Jamiyat qoidalari',
                url: '/corporate-regulations',
            },
        ],
    },
    {
        title: 'Matbuot Markazi',
        url: '/media-center',
        variant: 'stock',
        items: [
            {
                label: 'Yangiliklar va elonlar',
                url: '/news',
            },
            {
                label: 'Tadbirlar',
                url: '/events',
            },
            {
                label: 'Video',
                url: '/video',
            }
        ],
    },
] 
