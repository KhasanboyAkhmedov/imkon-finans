export interface NavMenuItem {
  label: string;
  href: string;
}

export type NavDropdownVariant = "stock" | "filled";

export interface NavMenu {
  title: string;
  href?: string;
  variant?: NavDropdownVariant;
  items: NavMenuItem[];
}
