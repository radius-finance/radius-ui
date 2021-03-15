import {Component, Input} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {BlockchainService} from '../../services/blockchain.service';
import {ethers} from 'ethers';
const {BigNumber, utils} = ethers;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  constructor(
    private blockchainService: BlockchainService,
    private bsModalRef: BsModalRef
  ) {}
  @Input() itemId;

  close() {
    this.bsModalRef.hide();
  }

  get itemDNA() {
    return this.blockchainService.getItemDNA(this.itemId);
  }

  get itemDNAExtended() {
    return this.blockchainService.getItemDNAExtended(this.itemId);
  }

  get itemDNAString() {
    return this.itemDNA.join(' ');
  }

  get itemTypeTitle() {
    if (this.itemType === 1) return 'Relic';
    if (this.itemType === 2) return 'Powerup';
    if (this.itemType === 3) return 'Gem';
    return 'Invalid';
  }

  get itemTypeIcon() {
    if (this.itemType === 1) return 'icon-key-25';
    if (this.itemType === 2) return 'icon-spaceship';
    if (this.itemType === 3) return 'icon-shape-star';
    return 'Invalid';
  }

  get itemTitle() {
    return this.itemId;
  }

  get itemRarity() {
    if (this.itemType !== 3) {
      return 0;
    }
    return this.blockchainService.getItemRarity(this.itemId);
  }

  get itemType() {
    const bn = BigNumber.from(this.itemId);
    if (bn.lt(3)) return 0;
    if (bn.gte(256) && bn.lt(4096)) return 1; // relic
    if (bn.gte(4096) && bn.lt(8192)) return 2; // powerup
    if (bn.gte(8192)) return 3; //gem
  }
}
