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

    Object.values(this.blockchainService.tokenForgeData)
    return [{
      type: 'Relic',
      target: 1,
      span: 32400,
      difficulty: '0xfffffffffffffffffffffffffffffffffffff000',
      adjustedDifficulty: '0xfffffffffffffffffffffffffffffffffffffffe'
    },
    {
      type: 'Powerup',
      target: 1,
      span: 32400,
      difficulty: '0xfffffffffffffffffffffffffffffffffffff000',
      adjustedDifficulty: '0xfffffffffffffffffffffffffffffffffffffffe'
    },
    {
      type: 'Gem',
      target: 1,
      span: 32400,
      difficulty: '0xfffffffffffffffffffffffffffffffffffff000',
      adjustedDifficulty: '0xfffffffffffffffffffffffffffffffffffffffe'
    },
    {
      type: 'Lottery - Jackpot',
      target: 1,
      span: 32400,
      difficulty: '0xffffffffffffffffffffffffffffffffff000000',
      adjustedDifficulty: '-'
    },
    {
      type: 'Lottery - Gem',
      target: 1,
      span: 32400,
      difficulty: '0xffffffffffffffffffffffffffffffffffff3b00',
      adjustedDifficulty: '-'
    }];
  }
}
