import {Component, OnInit} from '@angular/core';
import {BlockchainService} from '../../services/blockchain.service';

@Component({
  selector: 'app-lottery-winners-list',
  templateUrl: './lottery-winners-list.component.html',
  styleUrls: ['./lottery-winners-list.component.scss'],
})
export class LotteryWinnersListComponent implements OnInit {
  constructor(private blockchainService: BlockchainService) {}

  ngOnInit(): void {}

  get lotteryWinnersList() {
    return this.blockchainService.lotteryWinners &&
      this.blockchainService.lotteryWinners.length
      ? this.blockchainService.lotteryWinners
      : [];
  }

  get hasLotteryWinners() {
    return this.lotteryWinnersList.length > 0;
  }
}
