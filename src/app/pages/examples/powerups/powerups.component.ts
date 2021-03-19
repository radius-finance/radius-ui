import {Component, OnInit} from '@angular/core';
import {BlockchainService} from '../../../services/blockchain.service';
@Component({
  selector: 'app-powerups',
  templateUrl: './powerups.component.html',
})
export class PowerupsComponent implements OnInit {
  constructor(private blockchainService: BlockchainService) {}

  ngOnInit(): void {}

  get hasNFTItems() {
    return this.blockchainService.nftItems
      ? this.blockchainService.nftItems.length > 0
      : false;
  }

  get powerupNftItems() {
    return this.hasNFTItems
      ? this.blockchainService.nftItems.filter((e) => e.gte(4096) && e.lt(8192))
      : [];
  }
}
