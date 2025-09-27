import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'invest',
        loadComponent: () => import('../features/portfolio/pages/invest/invest.page').then(m => m.InvestPage),
      },
      {
        path: 'discover',
        loadComponent: () => import('../features/discover/pages/discover-page/discover.page').then(m => m.DiscoverPage),
      },
      {
        path: '',
        redirectTo: '/tabs/invest',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/invest',
    pathMatch: 'full',
  },
];
