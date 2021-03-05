import {Component, OnInit} from '@angular/core';
import {BlockchainService} from '../../../services/blockchain.service';

@Component({
  selector: 'app-forge',
  templateUrl: './forge.component.html',
})
export class ForgeComponent implements OnInit {
  constructor(private blockchainService: BlockchainService) {}

  ngOnInit(): void {}

  get hasNFTItems() {
    return this.blockchainService.nftItems
      ? this.blockchainService.nftItems.length > 0
      : false;
  }

  get nftItems() {
    return this.blockchainService.nftItems;
  }
}
