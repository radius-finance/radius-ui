import {Component, OnInit, Input} from '@angular/core';
import {BsModalService, BsModalRef, ModalOptions} from 'ngx-bootstrap/modal';
import {ModalComponent} from '../modal/modal.component';

@Component({
  selector: 'app-item-panel',
  templateUrl: './item-panel.component.html',
  styleUrls: ['./item-panel.component.scss'],
})
export class ItemPanelComponent implements OnInit {
  bsModalRef: BsModalRef;

  @Input() itemId;

  constructor(private modalService: BsModalService) {
    this.openModal = this.openModal.bind(this);
  }

  ngOnInit(): void {}

  makeCompact(s) {
    const sLen = s.length;
    if (sLen <= 18) {
      return s;
    }
    return s.substring(0, 6) + '...' + s.substring(sLen - 6, sLen);
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
