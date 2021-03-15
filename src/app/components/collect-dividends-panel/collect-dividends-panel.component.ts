import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-collect-dividends-panel',
  templateUrl: './collect-dividends-panel.component.html',
  styleUrls: ['./collect-dividends-panel.component.scss'],
})
export class CollectDividendsPanelComponent implements OnInit {
  constructor() {
    this.handleCollectDividendsClick = this.handleCollectDividendsClick.bind(
      this
    );
  }

  ngOnInit(): void {}

  handleCollectDividendsClick() {}
}
