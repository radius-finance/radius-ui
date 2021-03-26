import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import swal from 'sweetalert2';

import {BlockchainService} from '../../services/blockchain.service';

@Component({
  selector: 'app-stake-token',
  templateUrl: './stake-token.component.html',
  styleUrls: ['./stake-token.component.scss'],
})
export class StakeTokenComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() type;

  allowed: any;
  timerRef: any;
  state: any;

  public stakeForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private blockchainService: BlockchainService,
    private toastr: ToastrService
  ) {
    this.state = 0;
  }

  async updateApproved(type, obj) {
    if (type === 'Approval' || type === 'ApprovalForAll') {
      const allowFunc =
        this.type == 'RAD'
          ? this.blockchainService.getGasMineRadiusAllowance
          : this.blockchainService.getCatalystMineRadiusAllowance;
      allowFunc().then((bn) => (this.allowed = !bn.eq(0)));
      this.state = 0;
    } else if (
      type === 'Deposited' ||
      type === 'Withdrawn' ||
      type === 'WithdrawnMined'
    ) {
      this.state = 0;
    }
  }

  ngOnInit(): void {
    this.stakeForm = this.formBuilder.group({
      amount: [null, Validators.required],
    });
    this.handleActionClick = this.handleActionClick.bind(this);
    this.handleWithdrawClick = this.handleWithdrawClick.bind(this);
    this.handleHarvestClick = this.handleHarvestClick.bind(this);
    this.allowed = false;

    this.blockchainService.addToUpdateList((type, obj) =>
      this.updateApproved(type, obj)
    );
  }

  ngAfterViewInit() {
    this.updateApproved('Approval', null);
    this.timerRef = setInterval(() => {
      this.blockchainService.updateBalances();
    }, 3000);
    this.blockchainService.updateBalances();
  }

  ngOnDestroy() {
    if (this.timerRef) {
      clearInterval(this.timerRef);
      this.timerRef = null;
    }
  }

  get inputAmount() {
    const stakeAmount = this.stakeForm.controls.amount.value;
    return stakeAmount;
  }

  get hasStakedTokens() {
    return parseFloat(this.stakedBalance) !== 0;
  }

  handleActionClick(evt: any) {
    const typeLabel = this.type == 'RAD' ? 'Radius' : 'Radius UNI-V2 LP';
    this.state = 1;
    if (this.hasStakedTokens) {
      const withdrawFunc =
        this.type == 'RAD'
          ? this.blockchainService.withdrawRadius
          : this.blockchainService.withdrawRadiusLP;
      return withdrawFunc(parseFloat(this.stakedBalance)).then(() => {
        swal.fire({
          title: `Withdrawing ${typeLabel}`,
          text: `Submitted a transaction to withdraw ${this.stakedBalance} ${typeLabel}`,
          buttonsStyling: false,
          customClass: {
            confirmButton: 'btn btn-info',
          },
        });
      });
    }
    const stakeFunc =
      this.type == 'RAD'
        ? this.blockchainService.stakeRadius
        : this.blockchainService.stakeRadiusLP;
    return stakeFunc(this.inputAmount).then(() => {
      if (!this.allowed) {
        swal.fire({
          title: `Allowing ${typeLabel}`,
          text: `Submitted a transaction to allow ${this.inputAmount} ${typeLabel}`,
          buttonsStyling: false,
          customClass: {
            confirmButton: 'btn btn-info',
          },
        });
      } else {
        swal.fire({
          title: `Staking ${typeLabel}`,
          text: `Submitted a transaction to stake ${this.inputAmount} ${typeLabel}`,
          buttonsStyling: false,
          customClass: {
            confirmButton: 'btn btn-info',
          },
        });
        this.stakeForm.patchValue({amount: null});
      }
    });
  }

  handleWithdrawClick(evt: any) {}

  handleHarvestClick(evt: any) {
    const harvestFunc =
      this.type == 'RAD'
        ? this.blockchainService.harvestRadiusGas
        : this.blockchainService.harvestRadiusCatalyst;
    harvestFunc().then(() => {
      swal.fire({
        title: `Harvesting ${this.stakedLabel}`,
        text: `Submitted a transaction to harvest earned Radius Gas`,
        buttonsStyling: false,
        customClass: {
          confirmButton: 'btn btn-info',
        },
      });
    });
  }

  inputAmountChange(evt: any) {
    const nValue = this.inputAmount;
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
    if (!this.blockchainService.balances) {
      return '0';
    }
    const bal =
      this.type == 'RAD'
        ? this.blockchainService.balances.gasMine.totalStaked
        : this.blockchainService.balances.catalystMine.totalStaked;
    return bal ? this.blockchainService.formatEther(bal) : '0';
  }

  get stakedBalance() {
    if (!this.blockchainService.balances) {
      return '0';
    }
    const bal =
      this.type == 'RAD'
        ? this.blockchainService.balances.gasMine.staked
        : this.blockchainService.balances.catalystMine.staked;
    return bal ? this.blockchainService.formatEther(bal) : '0';
  }

  get earnedBalance() {
    if (!this.blockchainService.balances) {
      return '0';
    }
    const bal =
      this.type == 'RAD'
        ? this.blockchainService.balances.gasMine.earned
        : this.blockchainService.balances.catalystMine.earned;
    return bal ? this.blockchainService.formatEther(bal) : '0';
  }

  get stakedLabel() {
    return this.type == 'RAD' ? 'Radius Gas' : 'Radius Catalyst';
  }

  get stakedSymbol() {
    return this.type == 'RAD' ? 'RAD' : 'RAD UNI-V2 LP';
  }

  get earnedSymbol() {
    return this.type == 'RAD' ? 'RADG' : 'RADC';
  }

  get actionButtonLabel() {
    const hasStaked =
      parseFloat(this.stakedBalance) !== 0 &&
      !isNaN(parseFloat(this.stakedBalance));
    const readyMsg = hasStaked ? 'Unstake' : this.allowed ? 'Stake' : 'Allow';
    const busyMsg = hasStaked
      ? 'Unstaking...'
      : this.allowed
      ? 'Staking...'
      : 'Allowing...';
    return this.state === 0 ? readyMsg : busyMsg;
  }

  get actionButtonEnabled() {
    const hasStaked = parseFloat(this.stakedBalance) !== 0;
    return (!this.inputAmount && !hasStaked) || this.state === 1
      ? 'disabled'
      : '';
  }

  get harvestButtonEnabled() {
    return parseFloat(this.earnedBalance) === 0 ? 'disabled' : '';
  }
}
