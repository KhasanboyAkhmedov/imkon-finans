import type { NavMenu } from "../../types/navbar.types";

export const navMenu: NavMenu[] = [
    {
        title: 'Jamiyat haqida',
        href: './about-us',
        variant: 'filled',
        items: [
            { label: "Jamiyat tarixi", href: "./2-page/jamiyat_2_page.html" },
            { label: "Kuzatuv kengashi", href: "./3-page/kuzatuv_k_page_3.html" },
            { label: "Boshqaruv orgni", href: "./4-page/boshqaruv_org_page_4.html" },
            { label: "Jamiyat faoliyati va maqsadlari", href: "./5-page/jamiyat_faoliyat_page_5.html" },
            { label: "Jamiyat tashkiliy tuzilmasi", href: "./6-page/jamiyat_tuzilmasi_page_6.html" },
            { label: "Ish o'rinlari", href: "./7-page/vakansiya_page_7.html" },
            { label: "Qabul qilish kunlari", href: "./8-page/qabul_kunlari_page8.html" },
            { label: "Xamkorlar", href: "./9-page/xamkorlar_page_9.html" },
            { label: "Aloqalar", href: "./10-page/aloqa_page10.html" },
        ]
    },
    {
        title: 'Xizmatlar',
        href: './services',
        variant: 'stock',
        items: [
            {
                label: 'Mikromoliyaviy xizmatlar',
                href: './11-page_select_2/xizmlatlar_page11.html',
            },
            {
                label: 'Mikrokredit va mikroqarzlar',
                href: '../loyixa1-qismi/12-page_select_2/xizmlatlar_page12.html',
            },
            {
                label: 'Agentlik xizmati',
                href: './13-page_select_3/xizmlatlar_page13.html',
            },
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
