import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {AuthLayoutComponent} from './layouts/auth-layout/auth-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren:
          './pages/examples/dashboard/dashboard.module#DashboardModule',
      },
      {
        path: 'item',
        loadChildren: './pages/examples/item/item.module#ItemModule',
      },
      {
        path: 'stake',
        loadChildren: './pages/examples/stake/stake.module#StakeModule',
      },
      {
        path: 'forge',
        loadChildren: './pages/examples/forge/forge.module#ForgeModule',
      },
      {
        path: 'powerups',
        loadChildren:
          './pages/examples/powerups/powerups.module#PowerupsModule',
      },
      {
        path: 'win',
        loadChildren: './pages/examples/win/win.module#WinModule',
      },
      {
        path: 'dividends',
        loadChildren:
          './pages/examples/dividends/dividends.module#DividendsModule',
      },
      {
        path: 'wallet',
        loadChildren: './pages/examples/wallet/wallet.module#WalletModule',
      },
      {
        path: 'explore',
        loadChildren: './pages/examples/explore/explore.module#ExploreModule',
      },
      {
        path: 'stats',
        loadChildren: './pages/examples/stats/stats.module#StatsModule',
      },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'pages',
        loadChildren: './pages/examples/pages/pages.module#PagesModule',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      scrollOffset: [0, 64],
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
