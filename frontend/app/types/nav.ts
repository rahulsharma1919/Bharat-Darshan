export type NavLink = {
  name: string;
  href: string;
};

export type NavSection = {
  title: string;
  links: NavLink[];
};

export type MegaMenu = {
  sections: NavSection[];
};

export type NavItem = {
  name: string;
  href?: string; // Some items may have direct links
  megaMenu?: MegaMenu; // Some items have mega menus
};
