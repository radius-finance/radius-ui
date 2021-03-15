import {Component, OnInit} from '@angular/core';
import {BlockchainService} from '../../services/blockchain.service';

@Component({
  selector: 'app-previous-dividend-claims',
  templateUrl: './previous-dividend-claims.component.html',
  styleUrls: ['./previous-dividend-claims.component.scss'],
})
export class PreviousDividendClaimsComponent implements OnInit {
  constructor(private blockchainService: BlockchainService) {}

  ngOnInit(): void {}

  get previousDividendClaimsList() {
    return this.blockchainService.lotteryWinners &&
      this.blockchainService.lotteryWinners.length
      ? this.blockchainService.lotteryWinners
      : [];
  }

  get hasPreviousDividendClaims() {
    return this.previousDividendClaimsList.length > 0;
  }
}
