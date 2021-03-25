import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  AfterViewInit,
} from '@angular/core';
import {BsModalService, BsModalRef, ModalOptions} from 'ngx-bootstrap/modal';
import {ModalComponent} from '../modal/modal.component';
import {BlockchainService} from '../../services/blockchain.service';

@Component({
  selector: 'app-item-panel',
  templateUrl: './item-panel.component.html',
  styleUrls: ['./item-panel.component.scss'],
})
export class ItemPanelComponent implements OnInit {
  bsModalRef: BsModalRef;

  @Input() itemId;

  itemQuantity;

  constructor(
    private modalService: BsModalService,
    private blockchainService: BlockchainService
  ) {
    this.openModal = this.openModal.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }

  ngOnInit(): void {}

  async onUpdate(type, obj) {
    if (type === 'balances') {
      await this.blockchainService.radiusToken
        .balanceOf(this.blockchainService.account, this.itemId)
        .then((b) => {
          this.itemQuantity = b.toString();
        });
    }
  }

  ngAfterViewInit(): void {
    this.blockchainService.addToUpdateList(this.onUpdate);
    this.onUpdate('balances', null);
  }

  ngOnDestroy(): void {
    this.blockchainService.removeFromUpdateList(this.onUpdate);
  }

  makeCompact(s): string {
    return this.blockchainService.makeCompact(s);
  }

  get itemTypeTitle() {
    let qty = '';
    if (this.itemQuantity) qty = ' X ' + this.itemQuantity;
    if (this.itemType === 1) return 'Relic' + qty;
    if (this.itemType === 2) return 'Powerup' + qty;
    if (this.itemType === 3) return 'Gem' + qty;
    return 'Invalid';
  }

  get itemTypeIcon() {
    if (this.itemType === 1) return 'icon-key-25';
    if (this.itemType === 2) return 'icon-spaceship';
    if (this.itemType === 3) return 'icon-shape-star';
    return 'Invalid';
  }

  get itemTitle() {
    return this.makeCompact(this.itemId);
  }

  get itemType() {
    if (this.itemId < 3) return 0;
    if (this.itemId >= 256 && this.itemId < 4096) return 1; // relic
    if (this.itemId >= 4096 && this.itemId < 8192) return 2; // powerup
    if (this.itemId >= 8192) return 3; //gem
  }

  openModal() {
    const config: ModalOptions = {
      class: 'modal-xl',
      initialState: {
        itemId: this.itemId,
      },
    };
    this.bsModalRef = this.modalService.show(ModalComponent, config);
  }
}
