import {Component, OnInit} from '@angular/core';
import Chart from 'chart.js';
import {BlockchainService} from '../../../services/blockchain.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private blockchainService: BlockchainService) {}

  ngOnInit() {}

  fromWei(vv) {
    return this.blockchainService.formatEther(vv);
  }

  public updateOptions() {}

  get stakedRadiusBalance() {
    if (!this.blockchainService.balances) {
      return '0';
    }
    const bal = this.blockchainService.balances.gasMine.staked;
    return bal ? this.blockchainService.formatEther(bal) : '0';
  }

  get stakedRadiusLPBalance() {
    if (!this.blockchainService.balances) {
      return '0';
    }
    const bal = this.blockchainService.balances.catalystMine.staked;
    return bal ? this.blockchainService.formatEther(bal) : '0';
  }

  get totalStakedRadiusBalance() {
    if (!this.blockchainService.balances) {
      return '0';
    }
    const bal = this.blockchainService.balances.gasMine.totalStaked;
    return bal ? this.blockchainService.formatEther(bal) : '0';
  }

  get totalStakedRadiusLPBalance() {
    if (!this.blockchainService.balances) {
      return '0';
    }
    const bal = this.blockchainService.balances.catalystMine.totalStaked;
    return bal ? this.blockchainService.formatEther(bal) : '0';
  }

  get earnedRadiusGasBalance() {
    if (!this.blockchainService.balances) {
      return '0';
    }
    const bal = this.blockchainService.balances.gasMine.earned;
    return bal ? this.blockchainService.formatEther(bal) : '0';
  }

  get earnedRadiusCatalystBalance() {
    if (!this.blockchainService.balances) {
      return '0';
    }
    const bal = this.blockchainService.balances.catalystMine.earned;
    return bal ? this.blockchainService.formatEther(bal) : '0';
  }

  get hasNFTItems() {
    return this.blockchainService.nftItems
      ? this.blockchainService.nftItems.length > 0
      : false;
  }

  get nftItems() {
    return this.blockchainService.nftItems;
  }
}
