import { Component, OnInit } from '@angular/core';
import {BlockchainService} from '../../services/blockchain.service';

@Component({
  selector: 'app-contract-addresses-panel',
  templateUrl: './contract-addresses-panel.component.html',
  styleUrls: ['./contract-addresses-panel.component.scss']
})
export class ContractAddressesPanelComponent implements OnInit {

  constructor(private blockchainService: BlockchainService) { }

  ngOnInit(): void {
  }

  get radiusERC1155Address() {
    return this.blockchainService.radiusToken ? this.blockchainService.radiusToken.address : '';
  }

  get radiusERC20Address() {
    return this.blockchainService.radiusERC20 ? this.blockchainService.radiusERC20.address : '';
  }

  get radiusERC20LPAddress() {
    return this.blockchainService.radiusLP ? this.blockchainService.radiusLP : '';
  }

  get radiusGasERC20Address() {
    return this.blockchainService.radiusGasERC20 ? this.blockchainService.radiusGasERC20.address : '';
  }

  get radiusCatalystERC20Address() {
    return this.blockchainService.radiusCatalystERC20 ? this.blockchainService.radiusCatalystERC20.address : '';
  }

  get radiusLotteryERC20Address() {
    return this.blockchainService.radiusLotteryERC20 ? this.blockchainService.radiusLotteryERC20.address : '';
  }

  get radiusGasMineAddress() {
    return this.blockchainService.radiusGasMine ? this.blockchainService.radiusGasMine.address : '';
  }

  get radiusCatalystMineAddress() {
    return this.blockchainService.radiusCatalystMine ? this.blockchainService.radiusCatalystMine.address : '';
  }

}
