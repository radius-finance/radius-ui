import {Component, AfterViewInit, OnDestroy, Input} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {BlockchainService} from '../../services/blockchain.service';
import {ethers} from 'ethers';
import swal from 'sweetalert2';
const {BigNumber, utils} = ethers;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements AfterViewInit, OnDestroy {
  itemQuantity;
  state;
  engravings;
  constructor(
    private blockchainService: BlockchainService,
    private bsModalRef: BsModalRef
  ) {
    this.onUpdate = this.onUpdate.bind(this);
    this.state = 0;
    this.engravings = [];
  }
  @Input() itemId;

  close() {
    this.bsModalRef.hide();
  }

  async onUpdate(type, obj) {
    if (type === 'balances') {
      const b = await this.blockchainService.radiusToken.balanceOf(
        this.blockchainService.account,
        this.itemId
      );
      this.itemQuantity = b.toString();
    }
    if (type === 'Engraved') {
      this.state = 0;
      this.updateEngravings();
    }
  }

  async updateEngravings() {
    this.engravings = [];
    const ec = await this.blockchainService.radiusToken.getEngravingCount(
      this.itemId
    );
    for (let i = 0; i < ec.toNumber(); i++) {
      this.engravings.push({
        address: await this.blockchainService.radiusToken.getEngravingAddressAt(
          this.itemId,
          i
        ),
        engraving: await this.blockchainService.radiusToken.getEngravingAt(
          this.itemId,
          i
        ),
      });
    }
  }

  async ngAfterViewInit() {
    this.blockchainService.addToUpdateList(this.onUpdate);
    this.onUpdate('balances', null);
    if (this.itemType === 3) {
      this.updateEngravings();
    }
  }

  ngOnDestroy(): void {
    this.blockchainService.removeFromUpdateList(this.onUpdate);
  }

  handleEngraveClick() {
    swal
      .fire({
        title: 'Enter Engraving',
        html:
          '<div class="form-group">' +
          '<input id="input-field" type="text" class="form-control" />' +
          '</div>',
        showCancelButton: true,
        customClass: {
          confirmButton: 'btn btn-success mr-1',
          cancelButton: 'btn btn-danger',
        },
        buttonsStyling: false,
      })
      .then((result: any) => {
        this.state = 1;
        const v = (document.getElementById('input-field') as HTMLInputElement)
          .value;
        this.blockchainService.engraveRadiusGem(this.itemId, '').then(() => {
          swal.fire({
            title: 'Engraving Gem...',
            text:
              'Submitted a transaction to engrave gem ' +
              this.itemId +
              " with value '" +
              v +
              "'",
            buttonsStyling: false,
            customClass: {
              confirmButton: 'btn btn-info',
            },
          });
        });
      });
  }

  get buttonText() {
    return this.state === 0 ? 'Engrave' : 'Engraving...';
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
    return (
      this.itemId +
      (this.itemQuantity && this.itemQuantity !== '0'
        ? ' x ' + this.itemQuantity
        : '')
    );
  }

  get itemRarity() {
    if (this.itemType !== 3) {
      return 0;
    }
    return this.blockchainService.getItemRarity(this.itemId);
  }

  get buttonEnabled() {
    if (this.itemType !== 3) {
      return 0;
    }
    return this.itemQuantity && this.itemQuantity != 0 && this.state === 0
      ? ''
      : 'disabled';
  }

  get itemType() {
    const bn = BigNumber.from(this.itemId);
    if (bn.lt(3)) return 0;
    if (bn.gte(256) && bn.lt(4096)) return 1; // relic
    if (bn.gte(4096) && bn.lt(8192)) return 2; // powerup
    if (bn.gte(8192)) return 3; //gem
  }
}
