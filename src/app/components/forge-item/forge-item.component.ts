import {Component, OnInit, OnDestroy} from '@angular/core';
import {BlockchainService} from '../../services/blockchain.service';
import {Options} from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-forge-item',
  templateUrl: './forge-item.component.html',
  styleUrls: ['./forge-item.component.scss'],
})
export class ForgeItemComponent implements OnInit, OnDestroy {
  updateSliderBounds;
  catalystAmount: number;
  catalystOptions: Options = {
    floor: 0,
    step: 0.1,
    ceil: 1,
  };
  forgeAmount: number;
  forgeOptions: Options = {
    floor: 1,
    step: 1,
    ceil: 255,
  };
  constructor(private blockchainService: BlockchainService) {}

  ngOnInit(): void {
    this.handleForgeClick = this.handleForgeClick.bind(this);
    this.catalystAmount = 0;
    this.catalystOptions.ceil = 1;
    this.catalystOptions.step = 1 / 65536;
    this.catalystOptions.floor = 0;
    this.forgeAmount = 0;
    // gets called after balances are updated in the blockchain service
    this.updateSliderBounds = (type, balances) => {
      if (type !== 'balances') return;
      this.forgeOptions.ceil = ~~parseFloat(
        this.blockchainService.formatEther(balances.gas.erc20)
      );
      this.forgeOptions.floor = this.forgeOptions.ceil !== 0 ? 1 : 0;
      this.forgeAmount = this.forgeOptions.floor;
    };
    // register the handler above with the blockchain service && call it to update UI
    this.blockchainService.addToUpdateList(this.updateSliderBounds);
    this.updateSliderBounds('balances', this.blockchainService.balances);
  }

  ngOnDestroy(): void {
    this.blockchainService.removeFromUpdateList(this.updateSliderBounds);
  }

  handleForgeClick() {
    this.blockchainService
      .forgeRadiusItems(this.forgeAmount, this.catalystAmount)
      .then(() => {
        this.forgeOptions.ceil = ~~parseFloat(
          this.blockchainService.formatEther(
            this.blockchainService.balances.gas.erc20
          )
        );
      });
  }

  get catalystMagnificationRatio() {
    if (this.catalystAmount && !isNaN(this.catalystAmount)) {
      return ~~(this.catalystAmount * 65536);
    } else return 0;
  }
}
