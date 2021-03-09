import {Component, OnInit} from '@angular/core';
import {BlockchainService} from '../../../services/blockchain.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
})
export class ExploreComponent implements OnInit {
  constructor(private blockchainService: BlockchainService) {}

  ngOnInit(): void {}

  get globalItems() {
    return this.blockchainService.globalItems &&
      this.blockchainService.globalItems.length
      ? this.blockchainService.globalItems
      : [];
  }

  get hasGlobalItems() {
    return this.globalItems.length > 0;
  }
}
