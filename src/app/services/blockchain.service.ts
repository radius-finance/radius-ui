import {Injectable} from '@angular/core';
import Web3Modal from 'web3modal';
import WalletConnectProvider from '@walletconnect/web3-provider';
import {ethers} from 'ethers';
const {BigNumber, utils} = ethers;

import {RadiusGasMine} from '../shared/types/RadiusGasMine';
import {RadiusCatalystMine} from '../shared/types/RadiusCatalystMine';
import {RadiusToken} from '../shared/types/RadiusToken';
import {RadiusERC20} from '../shared/types/RadiusERC20';
import {RadiusGasERC20} from '../shared/types/RadiusGasERC20';
import {RadiusCatalystERC20} from '../shared/types/RadiusCatalystERC20';

import {Token, FACTORY_ADDRESS, INIT_CODE_HASH, WETH} from '@uniswap/sdk';

import {pack, keccak256} from '@ethersproject/solidity';
import {getCreate2Address} from '@ethersproject/address';

import contractData from '../shared/abis/radius.json';

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
  balances: any;
  nftItems: any;
  RAD: any;
  radiusLP: any;
  radiusLPRef: any;

  public radiusToken: RadiusToken;
  public radiusERC20: RadiusERC20;
  public radiusGasERC20: RadiusGasERC20;
  public radiusCatalystERC20: RadiusCatalystERC20;

  public radiusGasMine: RadiusGasMine;
  public radiusCatalystMine: RadiusCatalystMine;

  allAddressesFilter;

  web3Modal;

  constructor() {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider, // required
        options: {
          // TODO: Update
          infuraId: '1ecc817aeb624f00a3507b2c597ff6f9', // required
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
  }

  parseEther(n: any) {
    const pe = utils.parseEther(n);
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

  async loadEthers() {
    if (window.ethereum) {
      this.provider = new ethers.providers.Web3Provider(window.ethereum);
      await window.ethereum.enable();
      await this.setupAccount();
    } else if (this.provider) {
      this.provider = new ethers.providers.Web3Provider(this.provider);
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
      radius: 0,
      lp: 0,
      gas: 0,
      catalyst: 0,
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
    };

    this.radiusGasMine = (await this.getContractRef(
      'RadiusGasMine'
    )) as RadiusGasMine;
    this.radiusCatalystMine = (await this.getContractRef(
      'RadiusCatalystMine'
    )) as RadiusCatalystMine;
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

    this.radiusLPRef = await this.getTinyERCRef(this.radiusLP);

    await this.setupEvents();
    await this.updateBalances();
    await this.updateNFTList();
  }

  async getTinyERCRef(address) {
    return new ethers.Contract(
      address,
      [
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

  async updateBalances() {
    if (!this.balances) return;

    // this is the users total usd token balance
    this.balances.radius = await this.radiusERC20.balanceOf(this.account);
    this.balances.gas = await this.radiusGasERC20.balanceOf(this.account);
    this.balances.lp = await this.radiusLPRef.balanceOf(this.account);

    this.balances.catalyst = await this.radiusCatalystERC20.balanceOf(
      this.account
    );
    this.balances.gasMine.staked = await this.radiusGasMine.balanceOf(
      this.radiusERC20.address,
      this.account
    );
    this.balances.gasMine.totalStaked = await this.radiusGasMine.totalBalanceOf(
      this.radiusERC20.address
    );
    this.balances.gasMine.earned = await this.radiusGasMine.minedBalanceOf(
      this.account
    );
    this.balances.catalystMine.staked = await this.radiusCatalystMine.balanceOf(
      this.radiusLP,
      this.account
    );
    this.balances.catalystMine.totalStaked = await this.radiusCatalystMine.totalBalanceOf(
      this.radiusLP
    );
    this.balances.catalystMine.earned = await this.radiusCatalystMine.minedBalanceOf(
      this.account
    );
  }

  async updateNFTList() {
    const tokensHeldCount = await this.radiusToken.getTokenHeldCount(
      this.account
    );
    for (let ndx = 0; ndx < tokensHeldCount.toNumber(); ndx++) {
      const tokenIndex = await this.radiusToken.getTokenHeldByAt(
        this.account,
        ndx
      );
      // only record indexes greater than 3 as indexes to NFT tokens
      if (tokenIndex.gt(3)) {
        this.nftItems.push(tokenIndex);
      }
    }
  }

  async showToast(title, body) {
    console.log(title, body);
  }

  async setupEvents() {
    this.allAddressesFilter = {
      filter: {
        toAddress: 0,
      },
      fromBlock: await this.provider.getBlockNumber(),
    };

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
            ).toString()} Radius to ${toAddress}`
          );
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
            `Withdrawn ${this.formatEther(
              amount
            ).toString()} Radius to ${toAddress}`
          );
        }
      }
    );
    // Gas token mined is withdrawn
    this.radiusGasMine.on('WithdrawnMined', async (toAddress, amount) => {
      await this.updateBalances();
      if (toAddress == this.account) {
        this.showToast(
          'Gas Tokens Withdrawn',
          `Withdrawn ${this.formatEther(
            amount
          ).toString()} Radius Gas to ${toAddress}`
        );
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
          ).toString()} Radius Catalyst to ${toAddress}`
        );
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
            ).toString()} Radius LP to ${toAddress}`
          );
        }
      }
    );
    // LP Tokens are withdrawn
    this.radiusCatalystMine.on(
      'Withdrawn',
      async (erc20token, toAddress, amount) => {
        await this.updateBalances();
        if (toAddress == this.account) {
          this.showToast(
            'LP Tokens Withdrawn',
            `Withdrawn ${this.formatEther(
              amount
            ).toString()} Radius LP to ${toAddress}`
          );
        }
      }
    );
    // Catalyst tokens are withdrawn
    this.radiusCatalystMine.on('WithdrawnMined', async (toAddress, amount) => {
      await this.updateBalances();
      if (toAddress == this.account) {
        this.showToast(
          'Catalyst Tokens Withdrawn',
          `Withdrawn ${this.formatEther(
            amount
          ).toString()} Radius Catalyst to ${toAddress}`
        );
      }
    });
  }

  async stakeRadius(amount: any) {
    const allowance = await this.radiusERC20.allowance(
      this.account,
      this.radiusGasMine.address
    );
    if (allowance.lt(this.parseEther(amount))) {
      await this.radiusERC20.approve(
        this.radiusGasMine.address,
        this.parseEther(amount)
      );
    } else {
      return await this.radiusGasMine.depositFrom(
        this.radiusERC20.address,
        this.account,
        this.parseEther(amount)
      );
    }
  }

  async withdrawRadius(amount: any) {
    const tokenBalance = await this.radiusGasMine.balanceOf(
      this.radiusERC20.address,
      this.account
    );
    if (tokenBalance.gte(amount)) {
      await this.harvestRadiusGas();
      await this.radiusGasMine.withdrawTo(
        this.radiusERC20.address,
        this.account,
        tokenBalance
      );
    }
  }

  async harvestRadiusGas() {
    let gasBalance = await this.radiusGasMine.minedBalanceOf(this.account);
    await this.radiusGasMine.withdrawMinedTo(this.account, gasBalance);
    gasBalance = await this.radiusToken.balanceOf(this.account, 1);
    await this.radiusToken.convert(this.account, 1, gasBalance);
  }

  async stakeRadiusLP(amount: any) {
    const allowance = await this.radiusLPRef.allowance(
      this.account,
      this.radiusCatalystMine.address
    );
    if (allowance.lt(this.parseEther(amount))) {
      await this.radiusLPRef.approve(
        this.radiusCatalystMine.address,
        this.parseEther(amount)
      );
    } else {
      return await this.radiusCatalystMine.depositFrom(
        this.radiusLPRef.address,
        this.account,
        this.parseEther(amount)
      );
    }
  }
  async withdrawRadiusLP(amount: any) {
    const tokenBalance = await this.radiusCatalystMine.balanceOf(
      this.radiusLP,
      this.account
    );
    if (tokenBalance.gte(amount)) {
      await this.harvestRadiusCatalyst();
      await this.radiusCatalystMine.withdrawTo(
        this.radiusLP,
        this.account,
        tokenBalance
      );
    }
  }

  async harvestRadiusCatalyst() {
    let catalystBalance = await this.radiusCatalystMine.minedBalanceOf(
      this.account
    );
    await this.radiusCatalystMine.withdrawMinedTo(
      this.account,
      catalystBalance
    );
    catalystBalance = await this.radiusToken.balanceOf(this.account, 2);
    await this.radiusToken.convert(this.account, 2, catalystBalance);
  }

  get radiusBalance() {
    return this.balances ? this.balances.radius : 0;
  }

  get radiusLPBalance() {
    return this.balances ? this.balances.lp : 0;
  }

  get radiusGasBalance() {
    return this.balances ? this.balances.gas : 0;
  }

  get radiusCatalystBalance() {
    return this.balances ? this.balances.catalyst : 0;
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
}
