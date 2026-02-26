import type { TFunction } from "i18next";
import type { NavMenu } from "../../types/navbar.types";

export const getNavMenu = (t: TFunction<"layout", "navbar">): NavMenu[] => [
    {
        title: t('sections.about'),
        variant: 'filled',
        items: [
            { label: t("links.history"), url: "/history" },
            { label: t("links.council"), url: "/council" },
            { label: t("links.management"), url: "/management" },
            { label: t("links.structure"), url: "/organizational-structure" },
            { label: t("links.vacancies"), url: "/vacancies" },
            { label: t("links.reception"), url: "/reception-days" },
            { label: t("links.partners"), url: "/partners" },
            { label: t("links.contacts"), url: "/contacts" },
        ]
    },
    {
        title: t('sections.services'),
        variant: 'stock',
        items: [
            { label: t("links.micro_services"), url: "/our-services" },
            { label: t("links.micro_credit_services"), url: "/our-services" },
            { label: t("links.agency_services"), url: "/our-services" },
        ],
    },
    {
        title: t('sections.shareholders'),
        variant: 'stock',
        items: [
            { label: t('links.business_plans'), url: '/business-plans' },
            { label: t('links.dividends'), url: '/dividends' },
            { label: t('links.share_capital'), url: '/share-capital' },
            { label: t('links.repurchased'), url: '/re-purchased-shares' },
            { label: t('links.emission'), url: '/emission' },
            { label: t('links.reports'), url: '/reports' },
            { label: t('links.facts'), url: '/important-facts' },
        ],
    },
    {
        title: t('sections.corporate'),
        variant: 'stock',
        items: [
            { label: t('links.charter'), url: '/corporate-charter' },
            { label: t('links.certificates'), url: '/certificates' },
            { label: t('links.strategy'), url: '/development-strategy' },
            { label: t('links.affiliated'), url: '/affiliated-individuals' },
            { label: t('links.code'), url: '/corporate-governance-code' },
            { label: t('links.regulations'), url: '/corporate-regulations' },
        ],
    },
    {
        title: t('sections.press'),
        variant: 'stock',
        items: [
            { label: t('links.news'), url: '/news' },
            { label: t('links.events'), url: '/events' },
            { label: t('links.videos'), url: '/videos' }
        ],
    },
];