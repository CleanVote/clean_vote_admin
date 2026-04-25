import paths, { rootPaths } from './paths';

export interface SubMenuItem {
  id?: number;
  subheader: string;
  path?: string;
  pathName?: string;
  icon?: string;
  avatar?: string;
  active?: boolean;
  items?: SubMenuItem[];
}

export type MenuItem = SubMenuItem;

const sitemap: MenuItem[] = [
  {
    id: 1,
    subheader: 'Dashboard',
    path: rootPaths.root,
    icon: 'ic:round-home',
    active: true,
  },
  {
    id: 2,
    subheader: 'seasons',
    path: paths.seasons,
    icon: 'ic:outline-calendar-month',
  },
  {
    id: 3,
    subheader: 'categories',
    path: paths.categories,
    icon: 'ic:outline-category',
  },
  {
    id: 4,
    subheader: 'organizations',
    path: paths.organizations,
    icon: 'ic:outline-account-balance',
  },
];

export default sitemap;
