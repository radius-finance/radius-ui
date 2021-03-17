import {Component, OnInit, Input} from '@angular/core';
import {BlockchainService} from '../../services/blockchain.service';

@Component({
  selector: 'app-powerup-balance-panel',
  templateUrl: './powerup-balance-panel.component.html',
  styleUrls: ['./powerup-balance-panel.component.scss'],
})
export class PowerupBalancePanelComponent implements OnInit {
  @Input() type;

  constructor(private blockchainService: BlockchainService) {}

  ngOnInit(): void {}

  get tokenTypeTitle() {
    if (this.type === '0') return 'Powerup Stake Shares';
    if (this.type === '1') return 'Powerup Stake LP Shares';
    if (this.type === '2') return 'Powerup Forge Shares';
    if (this.type === '3') return 'Powerup Lottery Shares';
  }

  get tokenTypeIcon() {
    if (this.type === '0') return 'icon-compass-05';
    if (this.type === '1') return 'icon-atom';
    if (this.type === '2') return 'icon-molecule-40';
    if (this.type === '3') return 'icon-compass-05';
  }

  get tokenBalance() {
    let result = '0';
    if (this.type === '0') {
      result = this.blockchainService.balances
        ? this.blockchainService.balances.powerupShares.stake
        : '0';
    }
    if (this.type === '1') {
      result = this.blockchainService.balances
        ? this.blockchainService.balances.powerupShares.stakeLP
        : '0';
    }
    if (this.type === '2') {
      result = this.blockchainService.balances
        ? this.blockchainService.balances.powerupShares.forge
        : '0';
    }
    if (this.type === '3') {
      result = this.blockchainService.balances
        ? this.blockchainService.balances.powerupShares.lottery
        : '0';
      return result;
    }
    result = result ? result : '0';
    return result.toString();
  }
}
