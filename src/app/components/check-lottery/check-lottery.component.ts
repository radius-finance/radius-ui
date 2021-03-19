import {Component, OnInit, AfterViewInit, OnDestroy} from '@angular/core';
import {BlockchainService} from '../../services/blockchain.service';
import {Options} from '@angular-slider/ngx-slider';

@Component({
  selector: 'app-check-lottery',
  templateUrl: './check-lottery.component.html',
  styleUrls: ['./check-lottery.component.scss'],
})
export class CheckLotteryComponent implements OnInit, OnDestroy, AfterViewInit {
  checkLottoAmount: number;
  checkLottoOptions: Options = {
    floor: 0,
    step: 1,
    ceil: 0,
  };
  constructor(private blockchainService: BlockchainService) {
    this.onUpdate = this.onUpdate.bind(this);
  }

  async onUpdate(type, obj) {
    if (type !== 'balances') return;
    const numTickets = obj.lottery.toNumber();
    this.checkLottoOptions.ceil = numTickets;
    this.checkLottoOptions.floor = this.checkLottoOptions.ceil != 0 ? 1 : 0;
    this.checkLottoAmount = this.checkLottoOptions.ceil != 0 ? 1 : 0;
  }

  ngOnInit(): void {
    this.handleCheckLottoClick = this.handleCheckLottoClick.bind(this);
    this.checkLottoAmount = 0;
    // register the handler with the blockchain service
    this.blockchainService.addToUpdateList(this.onUpdate);
  }

  ngAfterViewInit() {
    this.onUpdate('balances', this.blockchainService.balances);
  }

  ngOnDestroy(): void {
    this.blockchainService.removeFromUpdateList(this.onUpdate);
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
    return this.blockchainService.balances
      ? this.blockchainService.formatEther(
          this.blockchainService.balances.unpaidLottery.gas
        )
      : '0';
  }

  get radiusCatalystJackpot() {
    return this.blockchainService.balances
      ? this.blockchainService.formatEther(
          this.blockchainService.balances.unpaidLottery.catalyst
        )
      : '0';
  }

  get buttonDisabled() {
    return this.checkLottoAmount === 0 ? 'disabled' : '';
  }
}
