import {Component, OnInit} from '@angular/core';
import {BlockchainService} from '../../services/blockchain.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-convert-panel',
  templateUrl: './convert-panel.component.html',
  styleUrls: ['./convert-panel.component.scss'],
})
export class ConvertPanelComponent implements OnInit {
  public convertForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private blockchainService: BlockchainService
  ) {}

  // valid to: values:
  // 0 - radius native
  // 1 - radius gas native
  // 2 - radius catalyst native
  // 3 - radius erc20
  // 4 - radius gas erc20
  // 5 - radius catalyst erc20
  ngOnInit(): void {
    this.convertForm = this.formBuilder.group({
      amount: [null, Validators.required],
      to: [null, [Validators.required]],
    });
    this.handleConvertClick = this.handleConvertClick.bind(this);
  }

  get inputAmount() {
    const convertAmount = this.convertForm.controls.amount.value;
    return convertAmount;
  }

  get convertTo() {
    const convertTo = this.convertForm.controls.to.value;
    return convertTo;
  }

  get availableTo() {
    const out = [];
    if (!this.blockchainService.balances) return out;

    if (
      this.blockchainService.balances.radius.erc20 &&
      !this.blockchainService.balances.radius.erc20.eq(0)
    ) {
      out.push({
        type: 0,
        label: 'Radius',
        balance: this.blockchainService.balances.radius.erc20,
      });
    }
    if (
      this.blockchainService.balances.gas.erc20 &&
      !this.blockchainService.balances.gas.erc20.eq(0)
    ) {
      out.push({
        type: 1,
        label: 'Radius Gas',
        balance: this.blockchainService.balances.gas.erc20,
      });
    }
    if (
      this.blockchainService.balances.catalyst.erc20 &&
      !this.blockchainService.balances.catalyst.erc20.eq(0)
    ) {
      out.push({
        type: 2,
        label: 'Radius Catalyst',
        balance: this.blockchainService.balances.catalyst.erc20,
      });
    }
    if (
      this.blockchainService.balances.radius.native &&
      !this.blockchainService.balances.radius.native.eq(0)
    ) {
      out.push({
        type: 3,
        label: 'Radius ERC20',
        balance: this.blockchainService.balances.radius.native,
      });
    }
    if (
      this.blockchainService.balances.gas.native &&
      !this.blockchainService.balances.gas.native.eq(0)
    ) {
      out.push({
        type: 4,
        label: 'Radius Gas ERC20',
        balance: this.blockchainService.balances.gas.native,
      });
    }
    if (
      this.blockchainService.balances.catalyst.native &&
      !this.blockchainService.balances.catalyst.native.eq(0)
    ) {
      out.push({
        type: 5,
        label: 'Radius Catalyst ERC20',
        balance: this.blockchainService.balances.catalyst.native,
      });
    }

    return out;
  }

  handleConvertClick() {
    const self = this;
    const amt = this.inputAmount;
    const to = this.convertTo;

    this.blockchainService
      .convertRadiusToken(amt, to)
      .then(() => self.convertForm.patchValue({amount: null}));
  }
}
