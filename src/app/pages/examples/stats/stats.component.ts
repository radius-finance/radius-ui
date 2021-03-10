import {Component, OnInit} from '@angular/core';
import {BlockchainService} from '../../../services/blockchain.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
})
export class StatsComponent implements OnInit {
  constructor(private blockchainService: BlockchainService) {}

  ngOnInit(): void {}

  get gasTotalSupply() {
    return this.blockchainService.formatEther(
      this.blockchainService.balances
        ? this.blockchainService.balances.totalSupplies.gas
        : '0'
    );
  }

  get catalystTotalSupply() {
    return this.blockchainService.formatEther(
      this.blockchainService.balances
        ? this.blockchainService.balances.totalSupplies.catalyst
        : '0'
    );
  }

  get relicTotalSupply() {
    return this.blockchainService.balances
      ? this.blockchainService.balances.totalSupplies.relic
      : '0';
  }

  get powerupTotalSupply() {
    return this.blockchainService.balances
      ? this.blockchainService.balances.totalSupplies.powerup
      : '0';
  }

  get gemTotalSupply() {
    return this.blockchainService.balances
      ? this.blockchainService.balances.totalSupplies.gem
      : '0';
  }

  get globalItems() {
    const arr =
      this.blockchainService.globalItems &&
      this.blockchainService.globalItems.length
        ? this.blockchainService.globalItems
        : [];
    if (arr.length === 0) return arr;
    const out = arr.map((e) => e).reverse();
    if (arr.length < 24) return arr;
    else return arr.slice(0, 24);
  }

  get hasGlobalItems() {
    return this.globalItems.length > 0;
  }

  get lastGemMintedId() {
    return this.blockchainService.lastGemMintedId
      ? this.blockchainService.lastGemMintedId.toHexString()
      : undefined;
  }

  get lastPowerupMintedId() {
    return this.blockchainService.lastPowerupMintedId
      ? this.blockchainService.lastPowerupMintedId.toHexString()
      : undefined;
  }

  get lastRelicMintedId() {
    return this.blockchainService.lastRelicMintedId
      ? this.blockchainService.lastRelicMintedId.toHexString()
      : undefined;
  }
}
