import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {ModalModule} from 'ngx-bootstrap/modal';
import {DxVectorMapModule} from 'devextreme-angular';
import {JwBootstrapSwitchNg2Module} from 'jw-bootstrap-switch-ng2';
import {NgxSliderModule} from '@angular-slider/ngx-slider';

import {FooterComponent} from './footer/footer.component';
import {NavbarComponent} from './navbar/navbar.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {AuthNavbarComponent} from './auth-navbar/auth-navbar.component';
import {FixedPluginComponent} from './fixed-plugin/fixed-plugin.component';
import {ItemVisualizerComponent} from './item-visualizer/item-visualizer.component';
import {StakeTokenComponent} from './stake-token/stake-token.component';
import {ItemPanelComponent} from './item-panel/item-panel.component';
import {ForgeItemComponent} from './forge-item/forge-item.component';
import {BalancePanelComponent} from './balance-panel/balance-panel.component';
import {CheckLotteryComponent} from './check-lottery/check-lottery.component';
import {LotteryWinnersListComponent} from './lottery-winners-list/lottery-winners-list.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    JwBootstrapSwitchNg2Module,
    DxVectorMapModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    NgxSliderModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    AuthNavbarComponent,
    FixedPluginComponent,
    ItemVisualizerComponent,
    StakeTokenComponent,
    ItemPanelComponent,
    ForgeItemComponent,
    BalancePanelComponent,
    CheckLotteryComponent,
    LotteryWinnersListComponent,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    AuthNavbarComponent,
    FixedPluginComponent,
    ItemVisualizerComponent,
    StakeTokenComponent,
    ItemPanelComponent,
    ForgeItemComponent,
    BalancePanelComponent,
    CheckLotteryComponent,
    LotteryWinnersListComponent,
  ],
})
export class ComponentsModule {}
