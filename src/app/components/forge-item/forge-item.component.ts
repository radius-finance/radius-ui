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
  forgingApproved;
  state;
  catalystAmount: number;
  catalystOptions: Options = {
    floor: 0,
    ceil: 1,
  };
  forgeAmount: number;
  forgeOptions: Options = {
    floor: 1,
    step: 1,
    ceil: 10,
  };

  constructor(private blockchainService: BlockchainService) {}

  async ngOnInit() {
    this.handleForgeClick = this.handleForgeClick.bind(this);
    this.state = 0;
    this.catalystAmount = 0;
    this.catalystOptions.ceil = 1;
    this.catalystOptions.step = 1 / 65536;
    this.catalystOptions.floor = 0;
    this.forgeAmount = 0;
    // gets called after balances are updated in the blockchain service
    this.updateSliderBounds = async (type, balances) => {
      if (type !== 'balances') return;
      let amt = ~~parseFloat(
        this.blockchainService.formatEther(balances.gas.erc20)
      );
      amt = amt < 10 ? amt : 10;
      this.forgeOptions.ceil = amt;
      this.forgeOptions.floor = this.forgeOptions.ceil !== 0 ? 1 : 0;
      this.forgingApproved = await this.blockchainService.isForgingApprovedForAll();
      this.state = 0;
    };
    // register the handler above with the blockchain service && call it to update UI
    this.blockchainService.addToUpdateList(this.updateSliderBounds);
    await this.updateSliderBounds('balances', this.blockchainService.balances);
    this.forgingApproved = this.blockchainService.isForgingApprovedForAll;
  }

  ngOnDestroy(): void {
    this.blockchainService.removeFromUpdateList(this.updateSliderBounds);
  }

  handleForgeClick() {
    const afterTxn = () => {
      this.state = 0;
    };
    this.state = 1;
    this.blockchainService
      .forgeRadiusItems(this.forgeAmount, this.catalystAmount)
      .then(() => afterTxn())
      .catch(() => afterTxn());
  }

  get catalystMagnificationRatio() {
    if (this.catalystAmount && !isNaN(this.catalystAmount)) {
      return ~~(this.catalystAmount * 65536);
    } else return 0;
  }

  get buttonText() {
    return this.state === 0
      ? this.forgingApproved
        ? 'Forge'
        : 'Approve'
      : this.forgingApproved
      ? 'Forging...'
      : 'Approving....';
  }

  get buttonEnabled() {
    return this.state !== 0 ? 'disabled' : '';
  }
}
