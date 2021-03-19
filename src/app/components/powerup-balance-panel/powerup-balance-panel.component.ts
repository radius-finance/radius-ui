import {Component, OnInit, Input} from '@angular/core';
import {BigNumber} from '@ethersproject/bignumber';
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
    if (this.type === '0') return 'Powerup Stake';
    if (this.type === '1') return 'Powerup Stake LP';
    if (this.type === '2') return 'Powerup Forge';
    if (this.type === '3') return 'Powerup Lottery';
  }

  get tokenTypeIcon() {
    if (this.type === '0') return 'icon-compass-05';
    if (this.type === '1') return 'icon-atom';
    if (this.type === '2') return 'icon-molecule-40';
    if (this.type === '3') return 'icon-compass-05';
  }

  get tokenBonusString() {
    if (this.type === '0') return `+${this.tokenBalance}% stake bonus`;
    if (this.type === '1') return `+${this.tokenBalance}% LP stake bonus`;
    if (this.type === '2')
      return `+${parseInt(this.tokenBalance) * 4096} forge bonus`;
    if (this.type === '3')
      return `+${
        parseInt(this.tokenBalance) * 4096
      } lottery jackpot / gem bonus`;
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
    }
    result = result ? result : '0';
    return result.toString();
  }

  get hasNFTItems(): boolean {
    return this.powerupNftItems ? this.powerupNftItems.length > 0 : false;
  }

  get powerupNftItems() {
    return this.blockchainService.nftItems
      ? this.blockchainService.nftItems.filter(
          (e) => e.gte(4096) && e.lt(8192) && e.mod(4).eq(this.type)
        )
      : [];
  }
}
