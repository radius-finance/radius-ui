import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {BlockchainService} from '../../services/blockchain.service';

@Component({
  selector: 'app-stake-token',
  templateUrl: './stake-token.component.html',
  styleUrls: ['./stake-token.component.scss'],
})
export class StakeTokenComponent implements OnInit {
  @Input() type;

  public stakeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private blockchainService: BlockchainService
  ) {}

  ngOnInit(): void {
    this.stakeForm = this.formBuilder.group({
      amount: [0, Validators.required],
    });
    this.handleStakeClick = this.handleStakeClick.bind(this);
    this.handleWithdrawClick = this.handleWithdrawClick.bind(this);
    this.handleHarvestClick = this.handleHarvestClick.bind(this);
  }

  get inputAmount() {
    const stakeAmount = this.stakeForm.controls.amount.value;
    return stakeAmount;
  }

  handleStakeClick() {
    const stakeFunc =
      this.type == 'RAD'
        ? this.blockchainService.stakeRadius
        : this.blockchainService.stakeRadiusLP;
    stakeFunc(this.inputAmount).then(() => {
      this.stakeForm.patchValue({amount: 0});
      console.log('staked');
    });
  }

  handleWithdrawClick() {
    const withdrawFunc =
      this.type == 'RAD'
        ? this.blockchainService.withdrawRadius
        : this.blockchainService.withdrawRadiusLP;
    withdrawFunc(this.inputAmount).then(() => {
      this.stakeForm.patchValue({amount: 0});
      console.log('withdrawn');
    });
  }

  handleHarvestClick() {
    const harvestFunc =
      this.type == 'RAD'
        ? this.blockchainService.harvestRadiusGas
        : this.blockchainService.harvestRadiusCatalyst;
    harvestFunc().then(() => {
      this.stakeForm.patchValue({amount: 0});
      console.log('harvested');
    });
  }

  get hourlyEarnRate() {
    return 0;
  }

  get title() {
    return this.type == 'RAD'
      ? 'Stake your Radius to Earn Radius Gas'
      : 'Stake your Radius LP to Earn Radius Catalyst';
  }

  get totalStakedBalance() {
    return this.blockchainService.formatEther(
      this.type == 'RAD'
        ? this.blockchainService.totalStakedRadiusBalance
        : this.blockchainService.totalStakedRadiusLPBalance
    );
  }

  get stakedSymbol() {
    return this.type == 'RAD' ? 'RAD' : 'RAD_LP';
  }

  get earnedSymbol() {
    return this.type == 'RAD' ? 'RADG' : 'RADC';
  }

  get stakedBalance() {
    return this.blockchainService.formatEther(
      this.type == 'RAD'
        ? this.blockchainService.stakedRadiusBalance
        : this.blockchainService.stakedRadiusLPBalance
    );
  }

  get earnedBalance() {
    return this.blockchainService.formatEther(
      this.type == 'RAD'
        ? this.blockchainService.earnedRadiusGasBalance
        : this.blockchainService.earnedRadiusCatalystBalance
    );
  }
}
