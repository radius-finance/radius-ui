import {Component, OnInit, OnDestroy, AfterViewInit} from '@angular/core';
import {BlockchainService} from '../../../services/blockchain.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
})
export class StatsComponent implements OnInit, AfterViewInit {
  gasOptions;
  catalystOptions;
  gasUpdateOptions;
  catalystUpdateOptions;
  timer;

  gasSeries;
  catalystSeries;

  constructor(private blockchainService: BlockchainService) {}

  ngOnInit(): void {
    this.gasSeries = [];
    this.catalystSeries = [];
    this.gasOptions = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
        },
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        textStyle: {
          color: '#000',
        },
        position: function (pos, params, el, elRect, size) {
          const obj = {top: 10};
          obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
          return obj;
        },
      },
      axisPointer: {
        link: {xAxisIndex: 'all'},
        label: {
          backgroundColor: '#777',
        },
      },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: false,
          },
          brush: {
            type: ['lineX', 'clear'],
          },
        },
      },
      brush: {
        xAxisIndex: 'all',
        brushLink: 'all',
        outOfBrush: {
          colorAlpha: 0.1,
        },
      },
      xAxis: {
        type: 'category',
        splitLine: {
          show: false,
        },
        formatter: (params) => params[0].value[0] + '',
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: false,
        },
      },
      series: [
        {
          name: 'Gas Supply',
          type: 'candlestick',
          showSymbol: false,
          hoverAnimation: false,
          data: this.gasSeries,
        },
      ],
    };
    this.gasUpdateOptions = {
      series: [
        {
          data: this.gasSeries,
        },
      ],
    };
    this.catalystOptions = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
        },
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        textStyle: {
          color: '#000',
        },
        position: function (pos, params, el, elRect, size) {
          const obj = {top: 10};
          obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
          return obj;
        },
      },
      axisPointer: {
        link: {xAxisIndex: 'all'},
        label: {
          backgroundColor: '#777',
        },
      },
      toolbox: {
        feature: {
          dataZoom: {
            yAxisIndex: false,
          },
          brush: {
            type: ['lineX', 'clear'],
          },
        },
      },
      brush: {
        xAxisIndex: 'all',
        brushLink: 'all',
        outOfBrush: {
          colorAlpha: 0.1,
        },
      },
      xAxis: {
        type: 'category',
        splitLine: {
          show: false,
        },
        formatter: (params) => params[0].value[0] + '',
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: false,
        },
      },
      series: [
        {
          name: 'Catalyst Supply',
          type: 'candlestick',
          showSymbol: false,
          hoverAnimation: false,
          data: this.catalystSeries,
        },
      ],
    };
    this.catalystUpdateOptions = {
      series: [
        {
          data: this.catalystSeries,
        },
      ],
    };
    this.updated = this.updated.bind(this);
  }

  updated(type, obj) {
    console.log(type, obj);
    if (type === 'gasHistoricalSupplyUpdated') {
      this.gasUpdateOptions.series.data = obj.gasTimeSeriesData;
    }
    if (type === 'catalystHistoricalSupplyUpdated') {
      this.catalystUpdateOptions.series.data = obj.catalystTimeSeriesData;
    }
  }

  ngAfterViewInit() {
    this.timer = setInterval(() => {
      this.blockchainService.updateCatalystHistoricalSupply();
      this.blockchainService.updateGasHistoricalSupply();
    }, 10000);
  }

  ngOnDestroy() {
    this.blockchainService.removeFromUpdateList(this.updated);
    clearInterval(this.timer);
  }

  get gasSeriesData() {
    return this.blockchainService.gasTimeSeriesData;
  }

  get catalystSeriesData() {
    return this.blockchainService.catalystTimeSeriesData;
  }

  get gasTotalSupply() {
    return this.blockchainService.formatEther(
      this.blockchainService.balances
        ? this.blockchainService.balances.totalSupplies.gas
        : '0'
    );
  }

  get catalystTotalSupply() {
    return this.blockchainService.formatEther(
      this.blockchainService.balances
        ? this.blockchainService.balances.totalSupplies.catalyst
        : '0'
    );
  }

  get relicTotalSupply() {
    return this.blockchainService.balances &&
      this.blockchainService.balances.totalSupplies
      ? this.blockchainService.balances.totalSupplies.relic
      : '0';
  }

  get powerupTotalSupply() {
    return this.blockchainService.balances &&
      this.blockchainService.balances.totalSupplies.powerup.stake
      ? this.blockchainService.balances.totalSupplies.powerup.stake
          .add(this.blockchainService.balances.totalSupplies.powerup.stakeLP)
          .add(this.blockchainService.balances.totalSupplies.powerup.forge)
          .add(this.blockchainService.balances.totalSupplies.powerup.lottery)
      : '0';
  }

  get gemTotalSupply() {
    return this.blockchainService.balances &&
      this.blockchainService.balances.totalSupplies
      ? this.blockchainService.balances.totalSupplies.gem
      : '0';
  }

  get globalItems() {
    const arr =
      this.blockchainService.globalItems &&
      this.blockchainService.globalItems.length
        ? this.blockchainService.globalItems
        : [];
    if (arr.length === 0) return arr;
    const out = arr.map((e) => e).reverse();
    if (out.length < 24) return out;
    else return out.slice(0, 23);
  }

  get hasGlobalItems() {
    return this.globalItems.length > 0;
  }

  get lastGemMintedId() {
    return this.blockchainService.lastGemMintedId
      ? this.blockchainService.lastGemMintedId.toHexString()
      : undefined;
  }

  get lastPowerupMintedId() {
    return this.blockchainService.lastPowerupMintedId
      ? this.blockchainService.lastPowerupMintedId.toHexString()
      : undefined;
  }

  get lastRelicMintedId() {
    return this.blockchainService.lastRelicMintedId
      ? this.blockchainService.lastRelicMintedId.toHexString()
      : undefined;
  }

  get rarestGemForgedId() {
    return this.blockchainService.rarestGemFound
      ? this.blockchainService.rarestGemFound.toHexString()
      : undefined;
  }
}
