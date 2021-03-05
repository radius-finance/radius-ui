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
    return this.fromWei(this.blockchainService.stakedRadiusBalance);
  }

  get stakedRadiusLPBalance() {
    return this.fromWei(this.blockchainService.stakedRadiusLPBalance);
  }

  get totalStakedRadiusBalance() {
    return this.fromWei(this.blockchainService.totalStakedRadiusBalance);
  }

  get totalStakedRadiusLPBalance() {
    return this.fromWei(this.blockchainService.totalStakedRadiusLPBalance);
  }

  get earnedRadiusGasBalance() {
    return this.fromWei(this.blockchainService.earnedRadiusGasBalance);
  }

  get earnedRadiusCatalystBalance() {
    return this.fromWei(this.blockchainService.earnedRadiusCatalystBalance);
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
