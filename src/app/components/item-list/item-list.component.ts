import {Component, OnInit} from '@angular/core';
import {BlockchainService} from '../../services/blockchain.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss'],
})
export class ItemListComponent implements OnInit {
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

  get relicNftItems() {
    return this.hasNFTItems
      ? this.blockchainService.nftItems.filter((e) => e.gte(256) && e.lt(512))
      : [];
  }

  get powerupNftItems() {
    return this.hasNFTItems
      ? this.blockchainService.nftItems.filter(
          (e) => e.gte(4096) && e.lt(8192)
        )
      : [];
  }

  get gemNftItems() {
    return this.hasNFTItems
      ? this.blockchainService.nftItems.filter((e) => e.gte(8192))
      : [];
  }
}
