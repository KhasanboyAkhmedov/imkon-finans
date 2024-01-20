import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'ru', 'uz', 'uzk'] as const;

export const { Link, redirect, usePathname, useRouter } =
    createSharedPathnamesNavigation({ locales });