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
}
