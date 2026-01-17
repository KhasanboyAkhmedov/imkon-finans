export interface MenuItem {
  title: string;
  href?: string;
  items?: {
    label: string;
    href: string;
  }[];
}

export const mainMenu: MenuItem[] = [
  {
    title: "Xizmatlar",
    // href: "./our-services",
    items: [
      { label: "Mikromoliyaviy xizmatlar", href: "/our-services" },
      { label: "Mikrokredit va mikroqarzlar", href: "/our-services" },
      { label: "Agentlik xizmati", href: "/our-services" },
    ],
  },
  {
    title: "Aksiyadorlar",
    href: "/",
    items: [
      { label: "Biznes rejalari", href: "./6-page/jamiyat_tuzilmasi_page_6.html" },
      { label: "Dividendlar", href: "#" },
      { label: "Emissiya risolasi", href: "./2-page/jamiyat_2_page.html" },
    ],
  },
  {
    title: "Korporativ Boshqaruv",
    href: "/",
    items: [
      { label: "Guvohnoma", href: "./2-page/jamiyat_2_page.html" },
      { label: "Jamiyat nizomi", href: "../loyixa1-qismi/5-page/jamiyat_faoliyat_page_5.html" },
    ],
  },
  {
    title: "Matbuot Markazi",
    href: "/",
    items: [
      { label: "Yangiliklar", href: "./15-page_select_6/yangiliklar.html" },
      { label: "Tadbirlar", href: "./16-page_select6/tadbir.html" },
      { label: "Video", href: "./17-page_select7/videos.html" },
    ],
  },
];
