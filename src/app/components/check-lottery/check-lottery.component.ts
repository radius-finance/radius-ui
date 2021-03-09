import {Component, OnInit, OnDestroy} from '@angular/core';
import {BlockchainService} from '../../services/blockchain.service';
import {Options} from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-check-lottery',
  templateUrl: './check-lottery.component.html',
  styleUrls: ['./check-lottery.component.scss'],
})
export class CheckLotteryComponent implements OnInit, OnDestroy {
  updateSliderBounds;
  checkLottoAmount: number;
  checkLottoOptions: Options = {
    floor: 0,
    step: 1,
    ceil: 0,
  };
  constructor(private blockchainService: BlockchainService) {}

  ngOnInit(): void {
    this.handleCheckLottoClick = this.handleCheckLottoClick.bind(this);
    this.checkLottoAmount = 0;
    // gets called after balances are updated in the blockchain service
    this.updateSliderBounds = (type, balances) => {
      if (type !== 'balances') return;
      this.checkLottoOptions.ceil = 10;
      this.checkLottoOptions.floor = this.checkLottoOptions.ceil != 0 ? 1 : 0;
      this.checkLottoAmount = this.checkLottoOptions.ceil != 0 ? 1 : 0;
    };
    // register the handler with the blockchain service
    this.blockchainService.addToUpdateList(this.updateSliderBounds);
    this.updateSliderBounds('balances', this.blockchainService.balances);
  }

  ngOnDestroy(): void {
    this.blockchainService.removeFromUpdateList(this.updateSliderBounds);
  }

  handleCheckLottoClick() {
    this.blockchainService
      .checkRadiusLottery(this.checkLottoAmount)
      .then(() => {
        this.checkLottoOptions.ceil = ~~parseFloat(
          this.blockchainService.formatEther(
            this.blockchainService.balances.lottery.erc20
          )
        );
      });
  }

  get radiusGasJackpot() {
    return '1';
  }

  get radiusCatalystJackpot() {
    return '1';
  }
}
