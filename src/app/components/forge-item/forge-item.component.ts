import {Component, OnInit, AfterViewInit, OnDestroy} from '@angular/core';
import {BlockchainService} from '../../services/blockchain.service';
import {Options} from '@angular-slider/ngx-slider';
import swal from 'sweetalert2';

@Component({
  selector: 'app-forge-item',
  templateUrl: './forge-item.component.html',
  styleUrls: ['./forge-item.component.scss'],
})
export class ForgeItemComponent implements OnInit, AfterViewInit, OnDestroy {
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

  constructor(private blockchainService: BlockchainService) {
    this.updateSliderBounds = this.updateSliderBounds.bind(this);
  }

  async updateSliderBounds(type, balances) {
    if (type !== 'balances') return;
    let amt = ~~parseFloat(
      this.blockchainService.formatEther(balances.gas.erc20)
    );
    amt = amt < 10 ? amt : 10;
    this.forgeOptions.ceil = amt;
    this.forgeOptions.floor = this.forgeOptions.ceil !== 0 ? 1 : 0;
    this.forgingApproved = await this.blockchainService.isForgingApprovedForAll();
    this.state = 0;
  }

  async ngOnInit() {
    this.handleForgeClick = this.handleForgeClick.bind(this);
    this.state = 0;
    this.catalystAmount = 0;
    this.catalystOptions.ceil = 1;
    this.catalystOptions.step = 1 / 65536;
    this.catalystOptions.floor = 0;
    this.forgeAmount = 0;
    // gets called after balances are updated in the blockchain service
  }

  ngAfterViewInit() {
    // register the handler above with the blockchain service && call it to update UI
    this.blockchainService.addToUpdateList(this.updateSliderBounds);
    this.updateSliderBounds('balances', this.blockchainService.balances);
  }

  ngOnDestroy(): void {
    this.blockchainService.removeFromUpdateList(this.updateSliderBounds);
  }

  handleForgeClick() {
    const forgeAmt = this.forgeAmount;
    const catalystAmt = this.catalystAmount;

    this.state = 1;
    this.blockchainService
      .forgeRadiusItems(forgeAmt, catalystAmt)
      .then(() => {
        swal.fire({
          title: 'Forging NFTs...',
          text:
            'Submitted a transaction to forge ' +
            forgeAmt +
            ' NFTs, at a total cost of ' +
            forgeAmt +
            ' Radius Gas.' +
            (catalystAmt !== 0
              ? ' Each forge operation additionally contains ' +
                catalystAmt +
                ' Radius Catalyst.'
              : ''),
          buttonsStyling: false,
          customClass: {
            confirmButton: 'btn btn-info',
          },
        });
      })
      .catch(() => {});
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
