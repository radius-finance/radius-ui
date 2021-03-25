import {Component, OnInit} from '@angular/core';
import {BlockchainService} from '../../../services/blockchain.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
})
export class StatsComponent implements OnInit {
  gasOptions;
  catalystOptions;
  gasUpdateOptions;
  catalystUpdateOptions;

  constructor(private blockchainService: BlockchainService) {}

  ngOnInit(): void {
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
        type: 'time',
        splitLine: {
          show: false,
        },
        formatter: (params) => params[0].name,
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: false,
        },
      },
      dataZoom: [
        {
          type: 'inside',
          xAxisIndex: [0, 1],
          start: 0,
          end: 100,
        },
        {
          show: true,
          xAxisIndex: [0, 1],
          type: 'slider',
          top: '85%',
          start: 0,
          end: 100,
        },
      ],
      series: [
        {
          name: 'Gas Supply',
          type: 'candlestick',
          showSymbol: false,
          hoverAnimation: false,
          data: [],
        },
      ],
    };
    this.gasUpdateOptions = {
      series: [
        {
          data: this.gasSeriesData,
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
        type: 'time',
        splitLine: {
          show: false,
        },
        formatter: (params) => params[0].name,
      },
      yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: false,
        },
      },
      dataZoom: [
        {
          type: 'inside',
          xAxisIndex: [0, 1],
          start: 0,
          end: 100,
        },
        {
          show: true,
          xAxisIndex: [0, 1],
          type: 'slider',
          top: '85%',
          start: 0,
          end: 100,
        },
      ],
      series: [
        {
          name: 'Catalyst Supply',
          type: 'line',
          showSymbol: false,
          hoverAnimation: false,
          data: [],
        },
      ],
    };
    this.catalystUpdateOptions = {
      series: [
        {
          data: this.catalystSeriesData,
        },
      ],
    };
  }

  get gasSeriesData() {
    const sd = this.blockchainService.gasTimeSeriesData;
    console.log(sd);
    return sd;
  }

  get catalystSeriesData() {
    const sd = this.blockchainService.catalystTimeSeriesData;
    console.log(sd);
    return sd;
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
