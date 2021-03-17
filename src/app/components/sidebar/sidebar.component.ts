import {Component, OnInit} from '@angular/core';

export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  rtlTitle: string;
  collapse?: string;
  isCollapsed?: boolean;
  isCollapsing?: any;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  smallTitle?: string;
  rtlTitle: string;
  rtlSmallTitle?: string;
  type?: string;
  collapse?: string;
  children?: ChildrenItems2[];
  isCollapsed?: boolean;
}
export interface ChildrenItems2 {
  path?: string;
  smallTitle?: string;
  rtlSmallTitle?: string;
  title?: string;
  rtlTitle: string;
  type?: string;
}
//Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'tim-icons icon-chart-pie-36',
    rtlTitle: 'لوحة القيادة',
  },
  {
    path: '/stake',
    title: 'Stake',
    type: 'link',
    rtlTitle: '',
    icontype: 'tim-icons icon-molecule-40',
  },
  {
    path: '/forge',
    title: 'Forge',
    type: 'link',
    rtlTitle: '',
    icontype: 'tim-icons icon-settings',
  },
  {
    path: '/powerups',
    title: 'Powerups',
    type: 'link',
    rtlTitle: '',
    icontype: 'tim-icons icon-light-3',
  },
  {
    path: '/win',
    title: 'Win',
    type: 'link',
    rtlTitle: '',
    icontype: 'tim-icons icon-trophy',
  },
  {
    path: '/dividends',
    title: 'Dividends',
    type: 'link',
    rtlTitle: '',
    icontype: 'tim-icons icon-wallet-43',
  },
  {
    path: '/wallet',
    title: 'Wallet',
    type: 'link',
    rtlTitle: '',
    icontype: 'tim-icons icon-wallet-43',
  },
  {
    path: '/explore',
    title: 'Explore',
    type: 'link',
    rtlTitle: '',
    icontype: 'tim-icons icon-chart-bar-32',
  },
  {
    path: '/stats',
    title: 'Stats',
    rtlTitle: '',
    type: 'link',
    icontype: 'tim-icons icon-time-alarm',
  },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
}
