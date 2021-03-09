import {Component, OnInit} from '@angular/core';
import {BlockchainService} from '../../services/blockchain.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-connect-wallet-button',
  templateUrl: './connect-wallet-button.component.html',
  styleUrls: ['./connect-wallet-button.component.scss'],
})
export class ConnectWalletButtonComponent implements OnInit {
  constructor(
    private blockchainService: BlockchainService,
    public toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  connectWallet() {
    this.blockchainService.connectAccount();
  }

  get connected() {
    return this.blockchainService.account !== undefined;
  }

  get connectedAccount() {
    return this.blockchainService.account !== undefined
      ? this.blockchainService.account.substring(0, 8) +
          '...' +
          this.blockchainService.account.substring(
            this.blockchainService.account.length - 6,
            this.blockchainService.account.length
          )
      : null;
  }

  get buttonCaption() {
    return this.connected ? this.connectedAccount : 'Connect Wallet';
  }
}
