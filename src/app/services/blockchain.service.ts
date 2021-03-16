import {ToastrService} from 'ngx-toastr';

import {Injectable} from '@angular/core';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import {ethers} from 'ethers';
const {BigNumber, utils} = ethers;

import {RadiusGasMine} from '../shared/types/RadiusGasMine';
import {RadiusCatalystMine} from '../shared/types/RadiusCatalystMine';
import {RadiusToken} from '../shared/types/RadiusToken';
import {RadiusTokenLib} from '../shared/types/RadiusTokenLib';
import {RadiusERC20} from '../shared/types/RadiusERC20';
import {RadiusGasERC20} from '../shared/types/RadiusGasERC20';
import {RadiusCatalystERC20} from '../shared/types/RadiusCatalystERC20';
import {RadiusLotteryERC20} from '../shared/types/RadiusLotteryERC20';

import {RelicTokenForge} from '../shared/types/RelicTokenForge';
import {PowerupTokenForge} from '../shared/types/PowerupTokenForge';
import {GemTokenForge} from '../shared/types/GemTokenForge';
import {LotteryTokenForge} from '../shared/types/LotteryTokenForge';

import {
  ChainId,
  Token,
  FACTORY_ADDRESS,
  INIT_CODE_HASH,
  WETH,
} from '@uniswap/sdk';

import {pack, keccak256} from '@ethersproject/solidity';
import {getCreate2Address} from '@ethersproject/address';

import contractData from '../shared/abis/radius.json';

declare let confetti: any;

@Injectable({
  providedIn: 'root',
})
export class BlockchainService {
  ethers: any;
  provider: any;
  accounts: any;
  account: any;
  signer: any;
  network: any;
  networkId: any;
  public balances: any;
  public nftItems: any;
  RAD: any;
  radiusLP: any;
  radiusLPRef: any;
  updateList: any;
  confettiOn: any;
  updatingNFTList: any;
  updatingBalances: any;

  public globalItems: any;
  public lotteryWinners: any;

  public radiusToken: RadiusToken;
  public radiusTokenLib: RadiusTokenLib;
  public radiusERC20: RadiusERC20;
  public radiusGasERC20: RadiusGasERC20;
  public radiusCatalystERC20: RadiusCatalystERC20;
  public radiusLotteryERC20: RadiusLotteryERC20;

  public relicTokenForge: RelicTokenForge;
  public powerupTokenForge: PowerupTokenForge;
  public gemTokenForge: GemTokenForge;
  public lotteryTokenForge: LotteryTokenForge;

  public lastGemMintedId: any;
  public lastPowerupMintedId: any;
  public lastRelicMintedId: any;
  public rarestGemFound: any;

  public radiusGasMine: RadiusGasMine;
  public radiusCatalystMine: RadiusCatalystMine;

  public tokenForgeData: any;
  public forgingApprovedForAll: any;

  historicalEvents;

  web3Modal;

  maxUINT256;

  constructor(public toastr: ToastrService) {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          infuraId: 'b91f3a967d5044b292140b5c8927d584',
          //qrcode: false
        },
      },
    };

    this.web3Modal = new Web3Modal({
      cacheProvider: true, // optional
      providerOptions, // required
      theme: {
        background: 'rgb(39, 49, 56)',
        main: 'rgb(199, 199, 199)',
        secondary: 'rgb(136, 136, 136)',
        border: 'rgba(195, 195, 195, 0.14)',
        hover: 'rgb(16, 26, 32)',
      },
    });

    this.stakeRadius = this.stakeRadius.bind(this);
    this.stakeRadiusLP = this.stakeRadiusLP.bind(this);
    this.withdrawRadius = this.withdrawRadius.bind(this);
    this.withdrawRadiusLP = this.withdrawRadiusLP.bind(this);
    this.harvestRadiusGas = this.harvestRadiusGas.bind(this);
    this.harvestRadiusCatalyst = this.harvestRadiusCatalyst.bind(this);
    this.forgeRadiusItems = this.forgeRadiusItems.bind(this);
    this.getGasMineRadiusAllowance = this.getGasMineRadiusAllowance.bind(this);
    this.getCatalystMineRadiusAllowance = this.getCatalystMineRadiusAllowance.bind(
      this
    );

    this.updateList = [];
    this.confettiOn = false;
    this.globalItems = [];
    this.lotteryWinners = [];
    this.tokenForgeData = {};
    this.lastGemMintedId = undefined;
    this.lastPowerupMintedId = undefined;
    this.lastRelicMintedId = undefined;
    this.rarestGemFound = undefined;
    this.forgingApprovedForAll = false;

    this.maxUINT256 =
      '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';
  }

  parseEther(n: any) {
    const pe = utils.parseEther(n ? n.toString() : '0');
    return pe ? pe.toString() : '0';
  }

  formatEther(n: any) {
    const pe = utils.formatEther(n);
    return pe ? pe.toString() : '0';
  }

  async connectAccount() {
    this.web3Modal.clearCachedProvider();
    this.provider = await this.web3Modal.connect(); // set provider
    await this.loadEthers();
  }

  async reloadAccount() {
    if (window.ethereum) {
      this.provider = new ethers.providers.Web3Provider(window.ethereum);
      await this.setupAccount();
    }
  }

  async loadEthers() {
    if (window.ethereum) {
      this.provider = new ethers.providers.Web3Provider(window.ethereum);
      await window.ethereum.enable();
      await this.setupAccount();
    } else {
      window.alert(
        'Non-Ethereum browser detected. You should consider trying MetaMask!'
      );
    }
  }

  async setupAccount() {
    this.ethers = new ethers.providers.Web3Provider(this.provider); // create ethers instance
    this.signer = this.provider.getSigner();
    this.account = await this.signer.getAddress();
    this.network = await this.provider.getNetwork();
    this.networkId = this.network.chainId;
    this.nftItems = [];
    this.balances = {
      radius: {
        erc20: 0,
        native: 0,
        total: 0,
      },
      lp: 0,
      gas: {
        erc20: 0,
        native: 0,
        total: 0,
      },
      lottery: {
        erc20: 0,
        native: 0,
        total: 0,
      },
      catalyst: {
        erc20: 0,
        native: 0,
        total: 0,
      },
      gasMine: {
        staked: 0,
        earned: 0,
        total: 0,
      },
      catalystMine: {
        staked: 0,
        earned: 0,
        total: 0,
      },
      unpaidDividends: {
        gas: 0,
        catalyst: 0,
      },
      claimableDividends: {
        gas: 0,
        catalyst: 0,
      },
      unpaidLottery: {
        gas: 0,
        catalyst: 0,
      },
      totalSupplies: {
        gas: 0,
        catalyst: 0,
        gem: 0,
        powerup: 0,
        relic: 0,
      },
    };

    this.radiusGasMine = (await this.getContractRef(
      'RadiusGasMine'
    )) as RadiusGasMine;
    this.radiusCatalystMine = (await this.getContractRef(
      'RadiusCatalystMine'
    )) as RadiusCatalystMine;
    this.radiusTokenLib = (await this.getContractRef(
      'RadiusTokenLib'
    )) as RadiusTokenLib;
    this.radiusToken = (await this.getContractRef(
      'RadiusToken'
    )) as RadiusToken;
    this.radiusERC20 = (await this.getContractRef(
      'RadiusERC20'
    )) as RadiusERC20;
    this.radiusGasERC20 = (await this.getContractRef(
      'RadiusGasERC20'
    )) as RadiusGasERC20;
    this.radiusCatalystERC20 = (await this.getContractRef(
      'RadiusCatalystERC20'
    )) as RadiusCatalystERC20;
    this.radiusLotteryERC20 = (await this.getContractRef(
      'RadiusLotteryERC20'
    )) as RadiusLotteryERC20;

    this.relicTokenForge = (await this.getContractRef(
      'RelicTokenForge'
    )) as RelicTokenForge;
    this.powerupTokenForge = (await this.getContractRef(
      'PowerupTokenForge'
    )) as PowerupTokenForge;
    this.gemTokenForge = (await this.getContractRef(
      'GemTokenForge'
    )) as GemTokenForge;
    this.lotteryTokenForge = (await this.getContractRef(
      'LotteryTokenForge'
    )) as LotteryTokenForge;

    if (this.networkId === ChainId.KOVAN) {
      this.RAD = new Token(
        this.networkId,
        this.radiusERC20.address,
        18,
        'RAD',
        'Radius'
      );

      // get the Radius LP address using create2 - this way we do not
      // need to create the uniswap LP ahead of time
      this.radiusLP = getCreate2Address(
        FACTORY_ADDRESS,
        keccak256(
          ['bytes'],
          [
            pack(
              ['address', 'address'],
              [this.radiusERC20.address, WETH[this.RAD.chainId].address]
            ),
          ]
        ),
        INIT_CODE_HASH
      );
      console.log('Create2 address of LP: ' + this.radiusLP);
    } else {
      console.log('Debug mode - using Radius as');
      this.radiusLP = this.radiusERC20.address;
    }

    this.radiusLPRef = await this.getTinyERCRef(this.radiusLP);
    this.forgingApprovedForAll = await this.isForgingApprovedForAll();

    await this.setupEvents();

    this.historicalEvents = await this.loadForgeEvents();
    this.historicalEvents.forEach((log) => {
      console.log(log.address);
    });
    await this.updateBalances();
    await this.updateNFTList();
    await this.updateTokenForgeData();
  }

  loadInterfaces() {
    const ifaces = {};
    ifaces[
      contractData.contracts['RadiusToken'].address
    ] = new ethers.utils.Interface(contractData.contracts['RadiusToken'].abi);
    ifaces[
      contractData.contracts['RadiusERC20'].address
    ] = new ethers.utils.Interface(contractData.contracts['RadiusERC20'].abi);
    ifaces[
      contractData.contracts['RadiusGasERC20'].address
    ] = new ethers.utils.Interface(
      contractData.contracts['RadiusGasERC20'].abi
    );
    ifaces[
      contractData.contracts['RadiusCatalystERC20'].address
    ] = new ethers.utils.Interface(
      contractData.contracts['RadiusCatalystERC20'].abi
    );
    ifaces[
      contractData.contracts['RadiusLotteryERC20'].address
    ] = new ethers.utils.Interface(
      contractData.contracts['RadiusLotteryERC20'].abi
    );
    ifaces[
      contractData.contracts['RadiusGasMine'].address
    ] = new ethers.utils.Interface(contractData.contracts['RadiusGasMine'].abi);
    ifaces[
      contractData.contracts['RadiusCatalystMine'].address
    ] = new ethers.utils.Interface(
      contractData.contracts['RadiusCatalystMine'].abi
    );
    ifaces[
      contractData.contracts['RadiusTokenLib'].address
    ] = new ethers.utils.Interface(
      contractData.contracts['RadiusTokenLib'].abi
    );
    return ifaces;
  }

  async loadForgeEvents() {
    const ifaces = this.loadInterfaces();

    const logs = await this.provider.getLogs(
      this.radiusTokenLib.filters.Forged(null, null, null, null, null)
    );
    //   const decodedEvents = logs.map((log) => {
    //     return ifaces[log.address].decodeEventLog('Forged', log.data);
    //   });

    //   const eventValues = decodedEvents.map((event) => event['values']);
    //   return eventValues;
    return logs;
  }

  async updateTokenForgeData() {
    const adjustedDifficulty = (n) => {
      const nn = n.add(65535);
      if (nn.gte(BigNumber.from(this.maxUINT256))) {
        return this.maxUINT256;
      } else return nn.toHexString();
    };
    this.tokenForgeData['Gem'] = {
      type: 'Gem',
      totalMinted: await this.gemTokenForge.getTotalMinted(),
      target: await this.gemTokenForge.getTargetMintAmount(),
      span: await this.gemTokenForge.getTargetMintSpan(),
      thisPeriodMinted: await this.gemTokenForge.getThisPeriodMinted(),
      difficulty: (await this.gemTokenForge.getDifficulty()).toHexString(),
      adjustedDifficulty: adjustedDifficulty(
        await this.gemTokenForge.getDifficulty()
      ),
      nextDifficulty: (
        await this.gemTokenForge.getNextDifficulty()
      ).toHexString(),
      lastDifficultyAdjustTime: await this.gemTokenForge.getLastDifficultyAdjustTime(),
    };
    this.tokenForgeData['Relic'] = {
      type: 'Relic',
      totalMinted: await this.relicTokenForge.getTotalMinted(),
      target: await this.relicTokenForge.getTargetMintAmount(),
      span: await this.relicTokenForge.getTargetMintSpan(),
      thisPeriodMinted: await this.relicTokenForge.getThisPeriodMinted(),
      difficulty: (await this.relicTokenForge.getDifficulty()).toHexString(),
      adjustedDifficulty: adjustedDifficulty(
        await this.relicTokenForge.getDifficulty()
      ),
      nextDifficulty: (
        await this.relicTokenForge.getNextDifficulty()
      ).toHexString(),
      lastDifficultyAdjustTime: await this.relicTokenForge.getLastDifficultyAdjustTime(),
    };
    this.tokenForgeData['Powerup'] = {
      type: 'Powerup',
      totalMinted: await this.powerupTokenForge.getTotalMinted(),
      target: await this.powerupTokenForge.getTargetMintAmount(),
      span: await this.powerupTokenForge.getTargetMintSpan(),
      thisPeriodMinted: await this.powerupTokenForge.getThisPeriodMinted(),
      difficulty: (await this.powerupTokenForge.getDifficulty()).toHexString(),
      adjustedDifficulty: adjustedDifficulty(
        await this.powerupTokenForge.getDifficulty()
      ),
      nextDifficulty: (
        await this.powerupTokenForge.getNextDifficulty()
      ).toHexString(),
      lastDifficultyAdjustTime: await this.powerupTokenForge.getLastDifficultyAdjustTime(),
    };
    this.tokenForgeData['Lottery'] = {
      type: 'Lottery',
      totalMinted: await this.lotteryTokenForge.getTotalMinted(),
      target: await this.lotteryTokenForge.getTargetMintAmount(),
      span: await this.lotteryTokenForge.getTargetMintSpan(),
      thisPeriodMinted: await this.lotteryTokenForge.getThisPeriodMinted(),
      difficulty: (await this.lotteryTokenForge.getDifficulty()).toHexString(),
      adjustedDifficulty: '-',
      nextDifficulty: (
        await this.lotteryTokenForge.getNextDifficulty()
      ).toHexString(),
      lastDifficultyAdjustTime: await this.lotteryTokenForge.getLastDifficultyAdjustTime(),
    };
    await this.invokeUpdateList('forgeData', this.tokenForgeData);
  }

  async getTinyERCRef(address) {
    return new ethers.Contract(
      address,
      [
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: 'owner',
              type: 'address',
            },
            {
              indexed: true,
              name: 'spender',
              type: 'address',
            },
            {
              indexed: false,
              name: 'value',
              type: 'uint256',
            },
          ],
          name: 'Approval',
          type: 'event',
        },
        {
          inputs: [
            {
              name: 'spender',
              type: 'address',
            },
            {
              name: 'amount',
              type: 'uint256',
            },
          ],
          name: 'approve',
          outputs: [
            {
              name: '',
              type: 'bool',
            },
          ],
          stateMutability: 'nonpayable',
          type: 'function',
        },
        {
          inputs: [
            {
              name: 'account',
              type: 'address',
            },
          ],
          name: 'balanceOf',
          outputs: [
            {
              name: '',
              type: 'uint256',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [],
          name: 'decimals',
          outputs: [
            {
              name: '',
              type: 'uint8',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
        {
          inputs: [
            {
              name: 'owner',
              type: 'address',
            },
            {
              name: 'spender',
              type: 'address',
            },
          ],
          name: 'allowance',
          outputs: [
            {
              name: '',
              type: 'uint256',
            },
          ],
          stateMutability: 'view',
          type: 'function',
        },
      ],
      this.signer
    );
  }

  async getContractRef(contract) {
    const tokenData = contractData.contracts[contract];
    if (tokenData) {
      return new ethers.Contract(tokenData.address, tokenData.abi, this.signer);
    }
  }

  async getDualBalances(radiusIndex, erc20Object) {
    const balances = {
      native: await this.radiusToken.balanceOf(this.account, radiusIndex),
      erc20: await erc20Object.balanceOf(this.account),
      total: undefined,
    };
    balances.total = balances.native.add(balances.erc20);
    return balances;
  }

  async updateBalances() {
    if (this.updatingBalances) {
      return;
    }
    if (!this.balances) return;
    this.updatingBalances = true;

    // this is the users total usd token balance
    this.balances.radius = await this.getDualBalances(0, this.radiusERC20);
    this.balances.gas = await this.getDualBalances(1, this.radiusGasERC20);
    this.balances.catalyst = await this.getDualBalances(
      2,
      this.radiusCatalystERC20
    );
    this.balances.lp = await this.radiusLPRef.balanceOf(this.account);
    this.balances.lottery = await this.getDualBalances(
      3,
      this.radiusLotteryERC20
    );

    this.balances.gasMine.staked = await this.radiusGasMine.balanceOf(
      this.radiusERC20.address,
      this.account
    );
    this.balances.gasMine.totalStaked = await this.radiusGasMine.totalBalanceOf(
      this.radiusERC20.address
    );
    this.balances.gasMine.earned = await this.radiusGasMine.currentPayoutOf(
      this.radiusERC20.address,
      this.account
    );
    this.balances.catalystMine.staked = await this.radiusCatalystMine.balanceOf(
      this.radiusLP,
      this.account
    );
    this.balances.catalystMine.totalStaked = await this.radiusCatalystMine.totalBalanceOf(
      this.radiusLP
    );
    this.balances.catalystMine.earned = await this.radiusCatalystMine.currentPayoutOf(
      this.radiusLP,
      this.account
    );
    this.balances.unpaidDividends.gas = await this.radiusToken.getUnpaidDividends(
      1
    );
    this.balances.unpaidDividends.catalyst = await this.radiusToken.getUnpaidDividends(
      2
    );
    this.balances.unpaidLottery.gas = await this.radiusToken.getUnpaidLottery(
      1
    );
    this.balances.unpaidLottery.catalyst = await this.radiusToken.getUnpaidLottery(
      2
    );

    this.balances.totalSupplies.gas = await this.radiusGasERC20.totalSupply();
    this.balances.totalSupplies.catalyst = await this.radiusCatalystERC20.totalSupply();
    this.balances.totalSupplies.gem = await this.radiusToken.gemTotalSupply();
    this.balances.totalSupplies.powerup = await this.radiusToken.powerupTotalSupply();
    this.balances.totalSupplies.relic = await this.radiusToken.relicTotalSupply();

    await this.invokeUpdateList('balances', this.balances);
    this.updatingBalances = false;
  }

  async updateNFTList() {
    const tokensHeldCount = await this.radiusToken.getTokenHeldCount(
      this.account
    );
    this.nftItems = [];
    for (let ndx = 0; ndx < tokensHeldCount.toNumber(); ndx++) {
      const tokenIndex = await this.radiusToken.getTokenHeldByAt(
        this.account,
        ndx
      );
      // only record indexes greater than 3 as indexes to NFT tokens
      if (
        tokenIndex.gt(3) &&
        !this.nftItems.find((el) => el && el.eq(tokenIndex))
      ) {
        this.nftItems.unshift(tokenIndex);
      }
    }
    await this.invokeUpdateList('nftlist', this.nftItems);
  }

  async invokeUpdateList(tag: any, vals) {
    this.updateList.forEach(async (el) => await el(tag, vals));
  }

  addToUpdateList(el: any) {
    if (this.updateList.push) {
      this.updateList.push(el);
    }
  }

  removeFromUpdateList(el: any) {
    if (this.updateList.remove) {
      this.updateList.remove(el);
    }
  }

  async showToast(title, body) {
    console.log(title, body);
    this.showSidebarMessage(body);
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

  async setupEvents() {
    // Gas token is mined
    this.radiusGasMine.on('Mined', async (toAddress, amount) => {
      await this.updateBalances();
      if (toAddress == this.account) {
        this.showToast(
          'Gas Tokens Mined',
          `Mined ${this.formatEther(
            amount
          ).toString()} Radius Gas to ${toAddress}`
        );
        await this.invokeUpdateList('Mined', {amount});
      }
    });
    // Radius token is deposited
    this.radiusGasMine.on(
      'Deposited',
      async (erc20token, toAddress, amount) => {
        await this.updateBalances();
        if (toAddress == this.account) {
          this.showToast(
            'Tokens Deposited',
            `Deposited ${this.formatEther(
              amount
            ).toString()} Radius tokens to ${toAddress}`
          );
          await this.invokeUpdateList('Deposited', {erc20token, amount});
        }
      }
    );
    // Radius token is withdrawn
    this.radiusGasMine.on(
      'Withdrawn',
      async (erc20token, toAddress, amount) => {
        await this.updateBalances();
        if (toAddress == this.account) {
          this.showToast(
            'Tokens Withdrawn',
            `Withdrew ${this.formatEther(
              amount
            ).toString()} Radius from ${toAddress}`
          );
          await this.invokeUpdateList('Withdrawn', {erc20token, amount});
        }
      }
    );
    // Gas token mined is withdrawn
    this.radiusGasMine.on('WithdrawnMined', async (toAddress, amount) => {
      await this.updateBalances();
      if (toAddress == this.account) {
        this.showToast(
          'Gas Tokens Withdrawn',
          `Withdrew ${this.formatEther(
            amount
          ).toString()} Radius Gas to ${toAddress}`
        );
        await this.invokeUpdateList('WithdrawnMined', {amount});
      }
    });
    // Catalyst token is mined
    this.radiusCatalystMine.on('Mined', async (toAddress, amount) => {
      await this.updateBalances();
      if (toAddress == this.account) {
        this.showToast(
          'Catalyst Tokens Mined',
          `Mined ${this.formatEther(
            amount
          ).toString()} Radius Catalyst tokens to ${toAddress}`
        );
        await this.invokeUpdateList('Mined', {amount});
      }
    });
    // LP Tokens are deposited
    this.radiusCatalystMine.on(
      'Deposited',
      async (erc20token, toAddress, amount) => {
        await this.updateBalances();
        if (toAddress == this.account) {
          this.showToast(
            'LP Tokens Deposited',
            `Deposited ${this.formatEther(
              amount
            ).toString()} Radius UNI-v2 LP tokens to ${toAddress}`
          );
          await this.invokeUpdateList('Deposited', {erc20token, amount});
        }
      }
    );
    // LP Tokens are withdrawn
    this.radiusCatalystMine.on(
      'Withdrawn',
      async (erc20token, toAddress, amount) => {
        if (toAddress == this.account) {
          await this.updateBalances();
          this.showToast(
            'LP Tokens Withdrawn',
            `Withdrew ${this.formatEther(
              amount
            ).toString()} Radius UNI-V2 LP tokens to ${toAddress}`
          );
          await this.invokeUpdateList('Withdrawn', {erc20token, amount});
        }
      }
    );
    // Catalyst tokens are withdrawn
    this.radiusCatalystMine.on('WithdrawnMined', async (toAddress, amount) => {
      if (toAddress == this.account) {
        await this.updateBalances();
        this.showToast(
          'Catalyst Tokens Withdrawn',
          `Withdrew ${this.formatEther(
            amount
          ).toString()} Radius Catalyst tokens to ${toAddress}`
        );
        await this.invokeUpdateList('WithdrawnMined', {amount});
      }
    });
    // Gas token is mined
    this.radiusToken.on(
      'Forged',
      async (recipient, forgedIndex, nonce, consumed, amount) => {
        if (!forgedIndex.eq(3)) {
          this.globalItems.push({
            recipient,
            forgedIndex,
            nonce,
            consumed,
            amount,
          });
          if (forgedIndex.gte(256) && forgedIndex.lt(4096)) {
            this.lastRelicMintedId = forgedIndex;
          } else if (forgedIndex.gte(4096) && forgedIndex.lt(8192)) {
            this.lastPowerupMintedId = forgedIndex;
          } else if (forgedIndex.gte(8192)) {
            this.lastGemMintedId = forgedIndex;
            if (!this.rarestGemFound) {
              this.rarestGemFound = this.lastGemMintedId;
            } else {
              const rarestGemRarity = this.getItemRarity(this.rarestGemFound);
              const thisGemRarity = this.getItemRarity(this.lastGemMintedId);
              if (thisGemRarity > rarestGemRarity) {
                this.rarestGemFound = thisGemRarity;
              }
            }
          }
        }
        if (recipient == this.account) {
          let forgedText = '';
          if (forgedIndex.gte(256) && forgedIndex.lt(4096)) {
            forgedText = 'Relic';
          } else if (forgedIndex.gte(4096) && forgedIndex.lt(8192)) {
            forgedText = 'Powerup';
          } else if (forgedIndex.gte(8192)) {
            forgedText = 'Gem';
          } else if (forgedIndex.eq(4)) {
            forgedText = 'Lottery Jackpot Winner Medallion';
          }

          await this.updateBalances();

          if (!forgedIndex.eq(3)) {
            this.showToast('Items Forged', `Forged a ${forgedText}`);
            if (!this.nftItems.find((el) => el && el.eq(forgedIndex))) {
              this.nftItems.unshift(forgedIndex);
              this.confetti(2000);
            }
            await this.invokeUpdateList('Forged', {
              forgedIndex,
              nonce,
              consumed,
              amount,
            });
          }
        }
      }
    );
    // User won the lottery!!
    this.radiusToken.on(
      'LotteryWinner',
      async (recipient, nonce, gasWon, catalystWon) => {
        this.lotteryWinners.push({
          recipient,
          nonce,
          gasWon,
          catalystWon,
        });
        if (recipient == this.account) {
          await this.updateBalances();
          // todo - add & viz the lottery NFT
          this.showToast(
            'Lottery Winner',
            `You just won the Radius Lottery and ${this.formatEther(
              gasWon
            )} Radius Gas / ${this.formatEther(catalystWon)} Radius Catalyst`
          );
          this.confetti(5000);
          await this.invokeUpdateList('LotteryWinner', {gasWon, catalystWon});
        }
      }
    );

    // Approval to stake
    this.radiusERC20.on('Approval', async (owner, spender, value) => {
      if (owner === this.account) {
        await this.invokeUpdateList('Approval', {owner, spender, value});
      }
    });

    // Approval to stake
    this.radiusLPRef.on('Approval', async (owner, spender, value) => {
      if (owner === this.account) {
        await this.invokeUpdateList('Approval', {owner, spender, value});
      }
    });
  }

  async getGasMineRadiusAllowance() {
    return await this.radiusERC20.allowance(
      this.account,
      this.radiusGasMine.address
    );
  }

  async stakeRadius(amount: any) {
    const amountInWei = this.parseEther(amount);
    const allowance = await this.getGasMineRadiusAllowance();
    if (allowance.lt(amountInWei)) {
      return await this.radiusERC20.approve(
        this.radiusGasMine.address,
        amountInWei
      );
    }
    return await this.radiusGasMine.depositFrom(
      this.radiusERC20.address,
      this.account,
      amountInWei
    );
  }

  async withdrawRadius(amount: any) {
    const amountInWei = this.parseEther(amount);
    const tokenBalance = await this.radiusGasMine.balanceOf(
      this.radiusERC20.address,
      this.account
    );
    if (tokenBalance.gte(amountInWei)) {
      await this.radiusGasMine.withdrawTo(
        this.radiusERC20.address,
        this.account,
        amountInWei
      );
    }
  }

  async harvestRadiusGas() {
    const gasBalance = await this.radiusGasMine.minedBalanceOf(this.account);
    await this.radiusGasMine.withdrawMinedTo(this.account, gasBalance);
  }

  async getCatalystMineRadiusAllowance() {
    return await this.radiusLPRef.allowance(
      this.account,
      this.radiusCatalystMine.address
    );
  }

  async stakeRadiusLP(amount: any) {
    const amountInWei = this.parseEther(amount);
    const allowance = await this.getCatalystMineRadiusAllowance();
    if (allowance.lt(this.parseEther(amountInWei))) {
      await this.radiusLPRef.approve(
        this.radiusCatalystMine.address,
        amountInWei
      );
    } else {
      return await this.radiusCatalystMine.depositFrom(
        this.radiusLPRef.address,
        this.account,
        amountInWei
      );
    }
  }

  async withdrawRadiusLP(amount: any) {
    const amountInWei = this.parseEther(amount);
    const tokenBalance = await this.radiusCatalystMine.balanceOf(
      this.radiusLP,
      this.account
    );
    if (tokenBalance.gte(amountInWei)) {
      await this.harvestRadiusCatalyst();
      await this.radiusCatalystMine.withdrawTo(
        this.radiusLP,
        this.account,
        amountInWei
      );
    }
  }

  async harvestRadiusCatalyst() {
    const catalystBalance = await this.radiusCatalystMine.minedBalanceOf(
      this.account
    );
    await this.radiusCatalystMine.withdrawMinedTo(
      this.account,
      catalystBalance
    );
  }

  async isForgingApprovedForAll() {
    return await this.radiusToken.isApprovedForAll(
      this.account,
      this.radiusToken.address
    );
  }

  async forgeRadiusItems(forgeAmount, catalystAmount) {
    if (!this.forgingApprovedForAll) {
      return await this.radiusToken.setApprovalForAll(
        this.radiusToken.address,
        true
      );
    }
    const gaserc20Balance = await this.radiusGasERC20.balanceOf(this.account);
    const caterc20Balance = await this.radiusCatalystERC20.balanceOf(
      this.account
    );

    // exit if there's not enough gas to forge something
    if (gaserc20Balance.lt(this.parseEther('' + forgeAmount))) {
      return;
    }

    const catAmount = parseFloat(catalystAmount);
    // we wanna use catalyst so check that we have enough catalyst balance to forge with
    if (catAmount > 0) {
      if (caterc20Balance.lt(this.parseEther(catAmount * forgeAmount + ''))) {
        return;
      }
    }

    return await this.radiusToken.forgeManyErc20(
      this.account,
      forgeAmount,
      this.parseEther(catalystAmount)
    );
  }

  confetti(time) {
    if (this.confettiOn) {
      return;
    }
    this.confettiOn = true;
    confetti.start();
    setTimeout(() => {
      confetti.stop();
      this.confettiOn = false;
    }, time);
  }

  async checkRadiusLottery(numTickets) {
    const lotteryErc20Balance = await this.radiusLotteryERC20.balanceOf(
      this.account
    );
    // exit if there's not enough gas to forge something
    if (lotteryErc20Balance.lt(this.parseEther('' + numTickets))) {
      return false;
    }
    return await this.radiusToken.checkLotteryManyErc20(
      this.account,
      numTickets
    );
  }

  // valid to: values:
  // 0 - radius native
  // 1 - radius gas native
  // 2 - radius catalyst native
  // 3 - radius erc20
  // 4 - radius gas erc20
  // 5 - radius catalyst erc20
  async convertRadiusToken(amount, to) {
    amount = this.parseEther(amount);
    if (to === 0) {
      await this.radiusERC20.convert(this.account, amount);
    }
    if (to === 1) {
      await this.radiusGasERC20.convert(this.account, amount);
    }
    if (to === 2) {
      await this.radiusCatalystERC20.convert(this.account, amount);
    }
    if (to === 3) {
      await this.radiusToken.convert(this.account, 0, amount);
    }
    if (to === 4) {
      await this.radiusToken.convert(this.account, 1, amount);
    }
    if (to === 5) {
      await this.radiusToken.convert(this.account, 2, amount);
    }
  }

  get stakedRadiusBalance() {
    return this.balances ? this.balances.gasMine.staked : 0;
  }

  get stakedRadiusLPBalance() {
    return this.balances ? this.balances.catalystMine.staked : 0;
  }

  get totalStakedRadiusBalance() {
    return this.balances ? this.balances.gasMine.total : 0;
  }

  get totalStakedRadiusLPBalance() {
    return this.balances ? this.balances.catalystMine.total : 0;
  }

  get earnedRadiusGasBalance() {
    return this.balances ? this.balances.gasMine.earned : 0;
  }

  get earnedRadiusCatalystBalance() {
    return this.balances ? this.balances.catalystMine.earned : 0;
  }

  getItemDNAExtended(itemId) {
    const dnaArray = [];
    const recurseRead = (iter) => {
      dnaArray.push(
        itemId.substring(itemId.length - 1 - iter, itemId.length - iter)
      );

      dnaArray.push(
        itemId.substring(itemId.length - 2 - iter, itemId.length - 1 - iter)
      );

      dnaArray.push(
        itemId.substring(itemId.length - 3 - iter, itemId.length - 2 - iter)
      );

      dnaArray.push(
        itemId.substring(itemId.length - 4 - iter, itemId.length - 3 - iter)
      );

      dnaArray.push(
        itemId.substring(itemId.length - 5 - iter, itemId.length - 4 - iter)
      );

      dnaArray.push(
        itemId.substring(itemId.length - 7 - iter, itemId.length - 5 - iter)
      );

      dnaArray.push(
        itemId.substring(itemId.length - 9 - iter, itemId.length - 7 - iter)
      );

      if (iter < 5) {
        recurseRead(iter + 1);
      }
    };
    recurseRead(1);
    return dnaArray;
  }

  getItemDNA(itemId) {
    const dnaArray = [];
    const recurseRead = (iter) => {
      const dnaElement = [];
      dnaElement.push(
        itemId.substring(itemId.length - 1 - iter, itemId.length - iter)
      );

      dnaElement.push(
        itemId.substring(itemId.length - 2 - iter, itemId.length - 1 - iter)
      );

      dnaElement.push(
        itemId.substring(itemId.length - 3 - iter, itemId.length - 2 - iter)
      );

      dnaElement.push(
        itemId.substring(itemId.length - 4 - iter, itemId.length - 3 - iter)
      );

      dnaElement.push(
        itemId.substring(itemId.length - 5 - iter, itemId.length - 4 - iter)
      );

      dnaElement.push(
        itemId.substring(itemId.length - 7 - iter, itemId.length - 5 - iter)
      );

      dnaElement.push(
        itemId.substring(itemId.length - 9 - iter, itemId.length - 7 - iter)
      );

      dnaArray.push(dnaElement.join(''));

      if (iter < 5) {
        recurseRead(iter + 1);
      }
    };
    recurseRead(1);
    return dnaArray;
  }

  getItemRarity(itemId) {
    const itemDNA = this.getItemDNAExtended(itemId);
    if (itemDNA.length === 0) {
      return 0;
    }
    const itemDNANumerical = itemDNA.map((el) => parseInt('0x' + el));
    const dnaMean =
      itemDNANumerical.reduce((ac, el) => ac + el) / itemDNA.length;
    const dnaPow =
      itemDNANumerical.reduce((ac, el) => ac + Math.pow(el - dnaMean, 2)) /
      itemDNA.length;

    return 1 / Math.sqrt(dnaPow);
  }
}
