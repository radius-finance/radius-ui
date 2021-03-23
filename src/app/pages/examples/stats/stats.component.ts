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
      title: {
        text: 'Gas Supply',
      },
      tooltip: {
        trigger: 'axis',
        formatter: (params) => {
          params = params[0];
          return params.name + ' : ' + params.value[1];
        },
        axisPointer: {
          animation: false,
        },
      },
      xAxis: {
        type: 'time',
        splitLine: {
          show: false,
        },
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
          type: 'line',
          showSymbol: false,
          hoverAnimation: false,
          data: this.gasSeriesData,
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
      title: {
        text: 'Catalyst Supply',
      },
      tooltip: {
        trigger: 'axis',
        formatter: (params) => {
          params = params[0];
          return params.name + ' : ' + params.value[1];
        },
        axisPointer: {
          animation: false,
        },
      },
      xAxis: {
        type: 'time',
        splitLine: {
          show: false,
        },
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
          type: 'line',
          showSymbol: false,
          hoverAnimation: false,
          data: this.catalystSeriesData,
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
    return this.blockchainService.gasHistoricalSupply.map((e) => {
      return {
        name: e.blockNumber,
        value: [
          e.blockNumber,
          ~~parseFloat(this.blockchainService.formatEther(e.amount)),
        ],
      };
    });
  }

  get catalystSeriesData() {
    return this.blockchainService.catalystHistoricalSupply.map((e) => {
      return {
        name: e.blockNumber,
        value: [
          e.blockNumber,
          ~~parseFloat(this.blockchainService.formatEther(e.amount)),
        ],
      };
    });
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
    return this.blockchainService.balances
      ? this.blockchainService.balances.totalSupplies.relic
      : '0';
  }

  get powerupTotalSupply() {
    return this.blockchainService.balances
      ? this.blockchainService.balances.totalSupplies.powerup.stake
          .add(this.blockchainService.balances.totalSupplies.powerup.stakeLP)
          .add(this.blockchainService.balances.totalSupplies.powerup.forge)
          .add(this.blockchainService.balances.totalSupplies.powerup.lottery)
      : '0';
  }

  get gemTotalSupply() {
    return this.blockchainService.balances
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
