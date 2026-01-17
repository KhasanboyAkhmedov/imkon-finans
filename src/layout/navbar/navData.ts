import type { NavMenu } from "../../types/navbar.types";

export const navMenu: NavMenu[] = [
    {
        title: 'Jamiyat haqida',
        // href: './about-us',
        variant: 'filled',
        items: [
            { label: "Jamiyat tarixi", href: "/history" },
            { label: "Kuzatuv kengashi", href: "/council" },
            { label: "Boshqaruv organi", href: "/management" },
            { label: "Jamiyat faoliyati va maqsadlari", href: "/mission-and-vision" },
            { label: "Jamiyat tashkiliy tuzilmasi", href: "/organizational-structure" },
            { label: "Ish o'rinlari", href: "/vacancies" },
            { label: "Qabul qilish kunlari", href: "/reception-days" },
            { label: "Xamkorlar", href: "/partners" },
            { label: "Aloqalar", href: "/contacts" },
        ]
    },
    {
        title: 'Xizmatlar',
        // href: './services',
        variant: 'stock',
        items: [
            { label: "Mikromoliyaviy xizmatlar", href: "/our-services" },
            { label: "Mikrokredit va mikroqarzlar", href: "/our-services" },
            { label: "Agentlik xizmati", href: "/our-services" },
        ],
    },
    {
        title: 'Aksiyadorlar',
        href: '/',
        variant: 'stock',
        items: [
            {
                label: 'Biznes rejalari',
                href: '/business-plans',
            },
            {
                label: 'Dividendlar',
                href: '/dividends',
            },
            {
                label: 'Qayta sotib olingan aksiyalar',
                href: '/re-purchased-shares',
            },
            {
                label: 'Emissiya risolasi',
                href: '/emission-prospectus',
            },
            {
                label: 'Muxim faktlar',
                href: '/important-facts',
            },
            {
                label: 'Taqdimotlari',
                href: '/presentations',
            },
        ],
    },
    {
        title: 'Korporativ Boshqaruv',
        href: '/coorporate-governance',
        variant: 'stock',
        items: [
            {
                label: 'Guvohnoma',
                href: '/certificate',
            },
            {
                label: 'Jamiyat nizomi',
                href: '/dividends',
            },
            {
                label: 'Sertifikatlar',
                href: '/certificates',
            },
            {
                label: 'Rivojlanish strategiyasi',
                href: '/',
            },
            {
                label: 'Affillangan shaxslar',
                href: '/affiliated-individuals',
            },
            {
                label: 'Korporativ boshqaruv kodeksi',
                href: '/corporate-governance-code',
            },
            {
                label: 'Jamiyat qoidalari',
                href: '/company-rules',
            },
            {
                label: 'Audit xisobotlari',
                href: '/audit-reports',
            },
        ],
    },
    {
        title: 'Matbuot Markazi',
        href: '/media-center',
        variant: 'stock',
        items: [
            {
                label: 'Yangiliklar va elonlar',
                href: '/news-and-announcements',
            },
            {
                label: 'Tadbirlar',
                href: '/events',
            },
            {
                label: 'Foto qollanma',
                href: '/photo-gallery',
            },
            {
                label: 'Video',
                href: '/video',
            }
        ],
    },
] 
