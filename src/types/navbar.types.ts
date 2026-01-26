export interface NavMenuItem {
  label: string;
  url: string;
}

export type NavDropdownVariant = "stock" | "filled";

export interface NavMenu {
  title: string;
  url?: string;
  variant?: NavDropdownVariant;
  items: NavMenuItem[];
}
