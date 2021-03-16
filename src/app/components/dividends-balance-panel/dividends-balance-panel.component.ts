import {Component, OnInit, Input} from '@angular/core';
import {BlockchainService} from '../../services/blockchain.service';

@Component({
  selector: 'app-dividends-balance-panel',
  templateUrl: './dividends-balance-panel.component.html',
  styleUrls: ['./dividends-balance-panel.component.scss'],
})
export class DividendsBalancePanelComponent implements OnInit {
  @Input() type;

  constructor(private blockchainService: BlockchainService) {}

  ngOnInit(): void {}

  get tokenTypeTitle() {
    if (this.type === '0') return 'Total Radius Relic Shares';
    if (this.type === '1') return 'Total Radius Gas Dividends';
    if (this.type === '2') return 'Total Radius Catalyst Dividends';
    if (this.type === '3') return 'My Radius Relic Shares';
    if (this.type === '4') return 'Claimable Radius Gas';
    if (this.type === '5') return 'Claimable Radius Catalyst';
  }

  get tokenTypeIcon() {
    if (this.type === '0') return 'icon-compass-05';
    if (this.type === '1') return 'icon-atom';
    if (this.type === '2') return 'icon-molecule-40';
    if (this.type === '3') return 'icon-compass-05';
    if (this.type === '4') return 'icon-atom';
    if (this.type === '5') return 'icon-molecule-40';
  }

  get tokenBalance() {
    let result = '0';
    if (this.type === '0') {
      result = this.blockchainService.balances
        ? this.blockchainService.balances.totalDividends.shares.toString()
        : '0';
      return result;
    }
    if (this.type === '1') {
      result = this.blockchainService.balances
        ? this.blockchainService.balances.totalDividends.gas
        : '0';
    }
    if (this.type === '2') {
      result = this.blockchainService.balances
        ? this.blockchainService.balances.totalDividends.catalyst
        : '0';
    }
    if (this.type === '3') {
      result = this.blockchainService.balances
        ? this.blockchainService.balances.claimableDividends.shares.toString()
        : '0';
      return result;
    }
    if (this.type === '4') {
      result = this.blockchainService.balances
        ? this.blockchainService.balances.claimableDividends.gas
        : '0';
    }
    if (this.type === '5')
      result = this.blockchainService.balances
        ? this.blockchainService.balances.claimableDividends.catalyst
        : '0';
    result = result ? result : '0';
    return this.blockchainService.formatEther(result);
  }
}
