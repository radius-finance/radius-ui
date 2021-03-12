import { Component, OnInit } from '@angular/core';
import {BlockchainService} from '../../services/blockchain.service';

@Component({
  selector: 'app-forging-difficulties-panel',
  templateUrl: './forging-difficulties-panel.component.html',
  styleUrls: ['./forging-difficulties-panel.component.scss']
})
export class ForgingDifficultiesPanelComponent implements OnInit {

  constructor(private blockchainService: BlockchainService) { }

  ngOnInit(): void {
  }

  get forgingDifficulties() {
    if(!this.blockchainService.tokenForgeData) {
      return;
    }

    return Object.values(this.blockchainService.tokenForgeData);

  }
}
