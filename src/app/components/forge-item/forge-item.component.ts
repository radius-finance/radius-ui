import {Component, OnInit} from '@angular/core';
import {BlockchainService} from '../../services/blockchain.service';
import {Options} from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-forge-item',
  templateUrl: './forge-item.component.html',
  styleUrls: ['./forge-item.component.scss'],
})
export class ForgeItemComponent implements OnInit {
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
    this.forgeAmount = 1;
    this.forgeOptions.ceil = ~~parseFloat(
      this.blockchainService.formatEther(
        this.blockchainService.balances.gas.erc20
      )
    );
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
      return ~~(this.catalystAmount * 64);
    } else return 0;
  }
}
