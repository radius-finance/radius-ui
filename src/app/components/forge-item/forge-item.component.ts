import {Component, OnInit} from '@angular/core';
import {BlockchainService} from '../../services/blockchain.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-forge-item',
  templateUrl: './forge-item.component.html',
  styleUrls: ['./forge-item.component.scss'],
})
export class ForgeItemComponent implements OnInit {
  public forgeForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private blockchainService: BlockchainService
  ) {}

  ngOnInit(): void {
    this.forgeForm = this.formBuilder.group({
      amount: [0, Validators.required],
    });
    this.handleForgeClick = this.handleForgeClick.bind(this);
  }

  handleForgeClick() {
    const amt = this.inputAmount;
    this.blockchainService
      .forgeRadiusItem(amt)
      .then(() => console.log('staked'));
  }

  get inputAmount() {
    const forgeAmount = this.forgeForm.controls.amount.value;
    this.forgeForm.patchValue({amount: 0});
    return forgeAmount;
  }

  get catalystMagnificationRatio() {
    if (!isNaN(this.forgeForm.controls.amount.value)) {
      const floatValue = parseFloat(this.forgeForm.controls.amount.value);
      return Math.round(floatValue * 128);
    } else return 0;
  }
}
