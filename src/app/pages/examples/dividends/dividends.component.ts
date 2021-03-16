import {Component, OnInit, AfterViewInit, OnDestroy} from '@angular/core';
import {BlockchainService} from '../../../services/blockchain.service';

@Component({
  selector: 'app-dividends',
  templateUrl: './dividends.component.html',
})
export class DividendsComponent implements OnInit, AfterViewInit, OnDestroy {
  timerRef;

  constructor(private blockchainService: BlockchainService) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
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
}
