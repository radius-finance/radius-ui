import {Component, OnInit, OnDestroy} from '@angular/core';
import {BlockchainService} from '../../services/blockchain.service';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-collect-dividends-panel',
  templateUrl: './collect-dividends-panel.component.html',
  styleUrls: ['./collect-dividends-panel.component.scss'],
})
export class CollectDividendsPanelComponent implements OnInit, OnDestroy {
  state;
  constructor(
    private blockchainService: BlockchainService,
    private toastr: ToastrService
  ) {
    this.handleCollectDividendsClick = this.handleCollectDividendsClick.bind(
      this
    );
    this.onDividendPaid = this.onDividendPaid.bind(this);
  }

  onDividendPaid(type, obj) {
    if (type !== 'DividendPaid') {
      return;
    }
    this.state = 0;
  }

  ngOnInit(): void {
    this.state = 0;
    this.blockchainService.addToUpdateList(this.onDividendPaid);
  }

  ngOnDestroy(): void {
    this.blockchainService.removeFromUpdateList(this.onDividendPaid);
  }

  handleCollectDividendsClick() {
    this.state = 1;
    this.blockchainService.collectRadiusDividends().then(() => {
      this.showSidebarMessage(
        `Submitted a transaction to collect earned dividends`
      );
    });
  }

  showSidebarMessage(message) {
    this.toastr.show(
      '<span data-notify="icon" class="tim-icons icon-bell-55"></span>',
      message,
      {
        timeOut: 4000,
        closeButton: true,
        enableHtml: true,
        toastClass: 'alert alert-danger alert-with-icon',
        positionClass: 'toast-top-right',
      }
    );
  }

  get totalDividends() {
    if (this.blockchainService.balances) {
      if (
        this.blockchainService.balances.claimableDividends.gas === 0 &&
        this.blockchainService.balances.claimableDividends.catalyst === 0
      ) {
        return 0;
      }
      return parseFloat(
        this.blockchainService.formatEther(
          this.blockchainService.balances.claimableDividends.gas.add(
            this.blockchainService.balances.claimableDividends.catalyst
          )
        )
      );
    }
  }

  get buttonDisabled() {
    return this.state == 1 || this.totalDividends === 0 ? 'disabled' : '';
  }
}
