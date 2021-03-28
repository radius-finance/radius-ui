/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { RareItemTokenForge } from "../RareItemTokenForge";

export class RareItemTokenForge__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<RareItemTokenForge> {
    return super.deploy(overrides || {}) as Promise<RareItemTokenForge>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): RareItemTokenForge {
    return super.attach(address) as RareItemTokenForge;
  }
  connect(signer: Signer): RareItemTokenForge__factory {
    return super.connect(signer) as RareItemTokenForge__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RareItemTokenForge {
    return new Contract(address, _abi, signerOrProvider) as RareItemTokenForge;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "tokenDiff",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "TokenForgeRecorded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint128",
        name: "_range",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "_difficulty",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_targetMint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_targetMintSpan",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_halvingRate",
        type: "uint256",
      },
    ],
    name: "__SecuredNonfungibleTimeDecayTokenForge_init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint128",
        name: "_range",
        type: "uint128",
      },
      {
        internalType: "uint256",
        name: "_difficulty",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_targetMint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_targetMintSpan",
        type: "uint256",
      },
    ],
    name: "__SecuredNonfungibleTokenForge_init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_difficulty",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_targetMint",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_targetMintSpan",
        type: "uint256",
      },
    ],
    name: "__TokenForge_init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "actualForgedAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "adjustDifficulty",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_hash",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_difficulty",
        type: "uint256",
      },
    ],
    name: "checkAgainst",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_hash",
        type: "uint256",
      },
      {
        internalType: "uint128",
        name: "catalystAdjust",
        type: "uint128",
      },
    ],
    name: "checkHash",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "hashVal",
        type: "uint256",
      },
      {
        internalType: "uint128",
        name: "catalystAdjust",
        type: "uint128",
      },
    ],
    name: "difficultyOvershootIndex",
    outputs: [
      {
        internalType: "uint80",
        name: "",
        type: "uint80",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "forgingDiffId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "forgee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "hashVal",
        type: "uint256",
      },
      {
        internalType: "uint128",
        name: "catalystAdjust",
        type: "uint128",
      },
    ],
    name: "forgeItem",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "gemType",
        type: "uint8",
      },
    ],
    name: "foundQuantity",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDifficulty",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getHash",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getLastDifficultyAdjustTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNextDifficulty",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTargetMintAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTargetMintSpan",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getThisPeriodMinted",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTimespanMintAverage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTimespanMintDeviationAverage",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalMinted",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "origin",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "___salt",
        type: "uint256",
      },
    ],
    name: "hash",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "gemType",
        type: "uint8",
      },
    ],
    name: "maxQuantity",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "recordTokenMintEvent",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "salt",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506111a6806100206000396000f3fe608060405234801561001057600080fd5b50600436106101985760003560e01c806394315334116100e3578063ca3b89f41161008c578063e1652ca411610066578063e1652ca41461043d578063e916228614610445578063fd1349271461049257610198565b8063ca3b89f4146103e2578063d13319c41461042d578063d1cb6ce71461043557610198565b8063bb004aa2116100bd578063bb004aa2146103b2578063bfa0b133146103d2578063c8bf3699146103da57610198565b80639431533414610361578063a5b96c1b14610369578063b6baffe3146103aa57610198565b806379f388ce116101455780638cf4b74c1161011f5780638cf4b74c146102ef5780638f928b3d1461032d57806393f2d00c1461033557610198565b806379f388ce1461027557806385ea2e42146102945780638977d59d1461029c57610198565b806322326ebb1161017657806322326ebb146101f557806351208fb3146102125780635aca86d91461023e57610198565b80630ca1c5c91461019d5780631cbc7deb146101b7578063209e9e15146101bf575b600080fd5b6101a561049a565b60408051918252519081900360200190f35b6101a56104a1565b6101df600480360360208110156101d557600080fd5b503560ff166104a7565b6040805160ff9092168252519081900360200190f35b6101a56004803603602081101561020b57600080fd5b50356104b7565b6101a56004803603604081101561022857600080fd5b506001600160a01b0381351690602001356104bd565b6102616004803603604081101561025457600080fd5b50803590602001356105ad565b604080519115158252519081900360200190f35b6102926004803603602081101561028b57600080fd5b50356105b3565b005b6101a5610613565b610292600480360360e08110156102b257600080fd5b506001600160a01b03813516906020810135906001600160801b036040820135169060608101359060808101359060a08101359060c00135610619565b610292600480360360a081101561030557600080fd5b506001600160a01b038135169060208101359060408101359060608101359060800135610636565b6101a56106b3565b6102616004803603604081101561034b57600080fd5b50803590602001356001600160801b0316610716565b6101a561075f565b6102616004803603608081101561037f57600080fd5b5080359060208101356001600160a01b031690604081013590606001356001600160801b0316610765565b6101a56108a6565b6101df600480360360208110156103c857600080fd5b503560ff166108ac565b6101a56108c4565b6101a5610922565b61040e600480360360408110156103f857600080fd5b50803590602001356001600160801b0316610928565b6040805169ffffffffffffffffffff9092168252519081900360200190f35b6101a56109a5565b6101a56109ab565b6101a5610a1b565b610292600480360360c081101561045b57600080fd5b506001600160a01b03813516906020810135906001600160801b036040820135169060608101359060808101359060a00135610a21565b6101a5610a5f565b600c545b90565b600b5490565b6002546001600160801b03160390565b50600190565b600060024340848460405160200180848152602001836001600160a01b031660601b815260140182815260200193505050506040516020818303038152906040526040518082805190602001908083835b6020831061052d5780518252601f19909201916020918201910161050e565b51815160209384036101000a60001901801990921691161790526040519190930194509192505080830381855afa15801561056c573d6000803e3d6000fd5b5050506040513d602081101561058157600080fd5b505160408051602081810193909352815180820384018152908201909152805191012090505b92915050565b81161490565b6105bb610af4565b6003546001600160a01b039081169116146106075760405162461bcd60e51b815260040180806020018281038252602c815260200180611121602c913960400191505060405180910390fd5b61061081610af8565b50565b60095490565b610627878787878787610a21565b601055505042600f5550505050565b600380547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b03969096169590951790945560019283556004919091556005819055600692909255633b9aca009091026008556000600d55600280546fffffffffffffffffffffffffffffffff19169091179055565b60006106bd610af4565b6003546001600160a01b039081169116146107095760405162461bcd60e51b815260040180806020018281038252602c815260200180611121602c913960400191505060405180910390fd5b610711610c01565b905090565b6004546000906001600160801b03831681019081106107355780610739565b6000195b905061074d60045482868785891614610c28565b61075784826105ad565b949350505050565b60065490565b600061076f610af4565b6003546001600160a01b039081169116146107bb5760405162461bcd60e51b815260040180806020018281038252602c815260200180611121602c913960400191505060405180910390fd5b60006107c78484610928565b905060008160000b12156107df576000915050610757565b60ff8082166000818152601160205260408082208054808616600190810190961660ff1990911617905560035481517f156e29f60000000000000000000000000000000000000000000000000000000081526001600160a01b038b81166004830152948c0160248201526044810195909552905192169263156e29f6926064808301939282900301818387803b15801561087857600080fd5b505af115801561088c573d6000803e3d6000fd5b5050505061089a60016105b3565b50600195945050505050565b60045490565b60ff9081166000908152601160205260409020541690565b60006108ce610af4565b6003546001600160a01b0390811691161461091a5760405162461bcd60e51b815260040180806020018281038252602c815260200180611121602c913960400191505060405180910390fd5b610711610cc0565b600a5490565b6004546000906001600160801b0383168101908110610947578061094b565b6000195b90506000195b61095b85836105ad565b1515600114156109745760001990910190600101610951565b61097d816104a7565b60ff16610989826108ac565b60ff161061099a5760001901610974565b60000b949350505050565b600e5490565b6000601054600014156109c1575060055461049e565b6000600f54420390506010548110156109de57505060055461049e565b6000610a01826109fb601054600554610cdb90919063ffffffff16565b90610d3b565b905060008111610a12576001610a14565b805b9250505090565b60075490565b610a2e8686858585610636565b5050600280546fffffffffffffffffffffffffffffffff19166001600160801b039390931692909217909155505050565b600080610a6a6109ab565b633b9aca000290506000610a90633b9aca00600b54600101610cdb90919063ffffffff16565b90506000610a9f826002610d3b565b9050633b9aca0083026000610ab48284610d3b565b90506000610ac6633b9aca0083610da2565b90506000610ad382610e07565b9050610ae8816509184e72a00061ffff610e1e565b97505050505050505090565b3390565b600c54610b059082610e6c565b600c5560065460075442031015610b2b57600b54610b239082610e6c565b600b55610610565b600754610b4057600b81905542600755610610565b600954600b54610b51908290610e6c565b6009819055600b5414610b7057600954610b6c906002610d3b565b6009555b600b54600090610b809083610da2565b600a54909150610b909082610ec6565b600a8190558114610bad57600a54610ba9906002610f2b565b600a555b610bb5610c01565b50600b8390554260078190556040805191825260208201859052805130927f231c3155e8d0ce8d9b94db643290298d4be929217a2465e6ece1dcaf591737b692908290030190a2505050565b600080610c0c610a5f565b9050610c1e4260015460045484610fff565b6004819055905090565b604080516001600160a01b0380871660248301528086166044830152841660648201528215156084808301919091528251808303909101815260a49091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f0e37899400000000000000000000000000000000000000000000000000000000179052610cba9061107f565b50505050565b600d54600090610cd1906001610e6c565b600d819055905090565b600082610cea575060006105a7565b82820282848281610cf757fe5b0414610d345760405162461bcd60e51b81526004018080602001828103825260218152602001806111006021913960400191505060405180910390fd5b9392505050565b6000808211610d91576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b818381610d9a57fe5b049392505050565b6000818303818312801590610db75750838113155b80610dcc5750600083128015610dcc57508381135b610d345760405162461bcd60e51b815260040180806020018281038252602481526020018061114d6024913960400191505060405180910390fd5b600080821215610e1a57816000036105a7565b5090565b600082841115610e2a57fe5b81610e3157fe5b6000610e3c836110a0565b90506000838581610e4957fe5b0490506000818781610e5757fe5b0460001990931b929092179695505050505050565b600082820183811015610d34576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b6000828201818312801590610edb5750838112155b80610ef05750600083128015610ef057508381125b610d345760405162461bcd60e51b81526004018080602001828103825260218152602001806110be6021913960400191505060405180910390fd5b600081610f7f576040805162461bcd60e51b815260206004820181905260248201527f5369676e6564536166654d6174683a206469766973696f6e206279207a65726f604482015290519081900360640190fd5b81600019148015610faf57507f800000000000000000000000000000000000000000000000000000000000000083145b15610feb5760405162461bcd60e51b81526004018080602001828103825260218152602001806110df6021913960400191505060405180910390fd5b6000828481610ff657fe5b05949350505050565b6040805160248101869052604481018590526064810184905260848082018490528251808303909101815260a49091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f5ca0ad3e00000000000000000000000000000000000000000000000000000000179052610cba905b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b60006001815b83821015610d3457600291909102906001016110a656fe5369676e6564536166654d6174683a206164646974696f6e206f766572666c6f775369676e6564536166654d6174683a206469766973696f6e206f766572666c6f77536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774f776e61626c653a2063616c6c6572206973206e6f742074686520636f6e74726f6c6c696e6720746f6b656e5369676e6564536166654d6174683a207375627472616374696f6e206f766572666c6f77a264697066735822122069c9ede6fac41db7c38f871064aec0aa9580c3dc6dcfe975ba9ede19ae142e6964736f6c63430007030033";
