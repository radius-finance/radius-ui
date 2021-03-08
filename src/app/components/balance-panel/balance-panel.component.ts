import {Component, OnInit, Input} from '@angular/core';
import {BlockchainService} from '../../services/blockchain.service';

@Component({
  selector: 'app-balance-panel',
  templateUrl: './balance-panel.component.html',
  styleUrls: ['./balance-panel.component.scss'],
})
export class BalancePanelComponent implements OnInit {
  @Input() type;

  constructor(private blockchainService: BlockchainService) {}

  ngOnInit(): void {}

  get tokenTypeTitle() {
    if (this.type === '0') return 'Radius';
    if (this.type === '1') return 'Radius Gas';
    if (this.type === '2') return 'Radius Catalyst';
    if (this.type === '3') return 'Radius Lottery';
    if (this.type === '4') return 'Radius Uni-V2 LP';
  }

  get tokenTotalBalance() {
    let result = '0';
    if (this.type === '0')
      result = this.blockchainService.balances
        ? this.blockchainService.balances.radius.total
        : '0';
    if (this.type === '1')
      result = this.blockchainService.balances
        ? this.blockchainService.balances.gas.total
        : '0';
    if (this.type === '2')
      result = this.blockchainService.balances
        ? this.blockchainService.balances.catalyst.total
        : '0';
    if (this.type === '3') {
      result = this.blockchainService.balances
        ? this.blockchainService.balances.lottery.total
        : '0';
      return result ? result.toString() : '0';
    }
    if (this.type === '4')
      result = this.blockchainService.balances
        ? this.blockchainService.balances.lp
        : '0';
    result = result ? result : '0';
    return this.blockchainService.formatEther(result);
  }

  get tokenNativeBalance() {
    let result = '0';
    if (this.type === '0')
      result = this.blockchainService.balances
        ? this.blockchainService.balances.radius.native
        : '0';
    if (this.type === '1')
      result = this.blockchainService.balances
        ? this.blockchainService.balances.gas.native
        : '0';
    if (this.type === '2')
      result = this.blockchainService.balances
        ? this.blockchainService.balances.catalyst.native
        : '0';
    if (this.type === '3')
      result = this.blockchainService.balances
        ? this.blockchainService.balances.lottery.native
        : '0';
    result = result ? result : '0';
    return this.blockchainService.formatEther(result);
  }

  get tokenErc20Balance() {
    let result = '0';
    if (this.type === '0')
      result = this.blockchainService.balances
        ? this.blockchainService.balances.radius.erc20
        : '0';
    if (this.type === '1')
      result = this.blockchainService.balances
        ? this.blockchainService.balances.gas.erc20
        : '0';
    if (this.type === '2')
      result = this.blockchainService.balances
        ? this.blockchainService.balances.catalyst.erc20
        : '0';
    if (this.type === '3')
      result = this.blockchainService.balances
        ? this.blockchainService.balances.lottery.erc20
        : '0';        
    result = result ? result : '0';
    return this.blockchainService.formatEther(result);
  }
}
