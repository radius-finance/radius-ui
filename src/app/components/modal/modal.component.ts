import {Component, Input} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  constructor(private bsModalRef: BsModalRef) {}
  @Input() itemId;

  close() {
    this.bsModalRef.hide();
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

  get itemType() {
    if (this.itemId < 3) return 0;
    if (this.itemId >= 256 && this.itemId < 4096) return 1; // relic
    if (this.itemId >= 4096 && this.itemId < 8192) return 2; // powerup
    if (this.itemId >= 8192) return 3; //gem
  }
}
