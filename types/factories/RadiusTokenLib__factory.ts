/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { RadiusTokenLib } from "../RadiusTokenLib";

export class RadiusTokenLib__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<RadiusTokenLib> {
    return super.deploy(overrides || {}) as Promise<RadiusTokenLib>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): RadiusTokenLib {
    return super.attach(address) as RadiusTokenLib;
  }
  connect(signer: Signer): RadiusTokenLib__factory {
    return super.connect(signer) as RadiusTokenLib__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RadiusTokenLib {
    return new Contract(address, _abi, signerOrProvider) as RadiusTokenLib;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ConvertedToERC1155",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ConvertedToERC20",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "claimant",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "DividendPaid",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "engraving",
        type: "string",
      },
    ],
    name: "Engraved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "burner",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "gasBurned",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "catalystBurned",
        type: "uint256",
      },
    ],
    name: "ForgeBurn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "forgedIndex",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "salt",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "consumed",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Forged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "hashval",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "gasWon",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "catalystWon",
        type: "uint256",
      },
    ],
    name: "LotteryWinner",
    type: "event",
  },
  {
    inputs: [],
    name: "CATALYST",
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
    name: "FORGE_DIVISOR",
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
    name: "GAS",
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
    name: "LOTTERY",
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
    name: "RADIUS",
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
    name: "RADIUS_FEEPERTHOU",
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
];

const _bytecode =
  "0x6140c7610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106102b65760003560e01c80637974b68711610185578063a4f00033116100e2578063c4f8631d11610096578063e513b2dc1161007b578063e513b2dc14610b91578063e9103a6814610bd0578063ff4857f214610c12576102b6565b8063c4f8631d14610b35578063cdbe650314610b58576102b6565b8063b6a79cc8116100c7578063b6a79cc814610ae0578063b8be451314610ae8578063bb1913f314610b2d576102b6565b8063a4f0003314610a7e578063b425312d14610abd576102b6565b80638fc7d4c9116101395780639404136b1161011e5780639404136b14610a0c57806394b8982714610a3857806396eddf1814610a5b576102b6565b80638fc7d4c9146109d25780639342934d146109ef576102b6565b806386ce58bd1161016a57806386ce58bd1461093257806388defb571461097a5780638f38b977146109ac576102b6565b80637974b687146107045780637d055dd714610749576102b6565b806345984203116102335780635981a1a5116101e75780636bd13a00116101cc5780636bd13a001461068457806373abea5a146106bd57806375da7810146106c5576102b6565b80635981a1a51461057c578063650b764e1461064b576102b6565b806351208fb31161021857806351208fb31461050357806357ecad5d1461052f578063598150b214610574576102b6565b806345984203146104c2578063494ac14c146104fb576102b6565b806313db77b21161028a57806334e6e6951161026f57806334e6e6951461041757806335fc1aa2146104575780634296092f14610490576102b6565b806313db77b2146103b9578063319ddbe2146103f4576102b6565b806293e54d146102bb57806302220aec146102d557806305996b161461037357806306e939f714610396575b600080fd5b6102c3610c3b565b60408051918252519081900360200190f35b6102fe600480360360608110156102eb57600080fd5b5080359060208101359060400135610c40565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610338578181015183820152602001610320565b50505050905090810190601f1680156103655780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102c36004803603604081101561038957600080fd5b5080359060200135610d14565b6102c3600480360360408110156103ac57600080fd5b5080359060200135610d2c565b8180156103c557600080fd5b506103f2600480360360408110156103dc57600080fd5b50803590602001356001600160a01b0316610d42565b005b6102c36004803603604081101561040a57600080fd5b5080359060200135610d7a565b6104436004803603604081101561042d57600080fd5b50803590602001356001600160a01b0316610d90565b604080519115158252519081900360200190f35b61047a6004803603604081101561046d57600080fd5b5080359060200135610df0565b6040805160ff9092168252519081900360200190f35b6102c3600480360360608110156104a657600080fd5b508035906001600160a01b036020820135169060400135610e64565b8180156104ce57600080fd5b506103f2600480360360408110156104e557600080fd5b50803590602001356001600160a01b0316610e9e565b6102c3611034565b6102c36004803603604081101561051957600080fd5b506001600160a01b038135169060200135611039565b6105586004803603606081101561054557600080fd5b5080359060208101359060400135611127565b604080516001600160a01b039092168252519081900360200190f35b6102c3611165565b81801561058857600080fd5b506103f26004803603608081101561059f57600080fd5b8135916001600160a01b0360208201351691604082013591908101906080810160608201356401000000008111156105d657600080fd5b8201836020820111156105e857600080fd5b8035906020019184600183028401116401000000008311171561060a57600080fd5b91908080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525092955061116a945050505050565b81801561065757600080fd5b506103f26004803603604081101561066e57600080fd5b50803590602001356001600160a01b031661143f565b81801561069057600080fd5b506102c3600480360360408110156106a757600080fd5b50803590602001356001600160a01b0316611b45565b6102c3611b6c565b8180156106d157600080fd5b506103f2600480360360608110156106e857600080fd5b50803590602081013590604001356001600160a01b0316611b71565b81801561071057600080fd5b506103f26004803603608081101561072757600080fd5b508035906020810135906001600160a01b036040820135169060600135611be7565b81801561075557600080fd5b506103f2600480360361010081101561076d57600080fd5b8135916001600160a01b036020820135811692604083013582169260608101358316926080820135169181019060c0810160a08201356401000000008111156107b557600080fd5b8201836020820111156107c757600080fd5b803590602001918460208302840111640100000000831117156107e957600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561083957600080fd5b82018360208201111561084b57600080fd5b8035906020019184602083028401116401000000008311171561086d57600080fd5b91908080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525092959493602081019350359150506401000000008111156108bd57600080fd5b8201836020820111156108cf57600080fd5b803590602001918460018302840111640100000000831117156108f157600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611c40945050505050565b81801561093e57600080fd5b506103f26004803603608081101561095557600080fd5b508035906001600160a01b036020820135169060ff6040820135169060600135612171565b6102c36004803603606081101561099057600080fd5b508035906001600160a01b0360208201351690604001356124a0565b6102c3600480360360408110156109c257600080fd5b508035906020013560ff166126ba565b6102c3600480360360208110156109e857600080fd5b50356126d3565b6102c360048036036020811015610a0557600080fd5b50356126da565b6102c360048036036040811015610a2257600080fd5b50803590602001356001600160a01b03166126e1565b6102c360048036036040811015610a4e57600080fd5b5080359060200135612700565b61055860048036036040811015610a7157600080fd5b5080359060200135612716565b818015610a8a57600080fd5b506103f260048036036060811015610aa157600080fd5b508035906001600160a01b036020820135169060400135612735565b61055860048036036040811015610ad357600080fd5b5080359060200135612b27565b6102c3612b46565b818015610af457600080fd5b506103f260048036036080811015610b0b57600080fd5b508035906020810135906001600160a01b036040820135169060600135612b4b565b6102c3612bfc565b6102c360048036036040811015610b4b57600080fd5b5080359060200135612c01565b818015610b6457600080fd5b506103f260048036036060811015610b7b57600080fd5b508035906020810135906040013560ff16612c17565b818015610b9d57600080fd5b506103f260048036036060811015610bb457600080fd5b50803590602081013590604001356001600160a01b0316612c3c565b818015610bdc57600080fd5b506103f260048036036060811015610bf357600080fd5b5080359060208101356001600160a01b0316906040013560ff16612ca6565b61055860048036036060811015610c2857600080fd5b5080359060208101359060400135612e31565b600081565b6000828152601884016020526040902080546060919083908110610c6057fe5b90600052602060002090600202016001018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610d055780601f10610cda57610100808354040283529160200191610d05565b820191906000526020600020905b815481529060010190602001808311610ce857829003601f168201915b505050505090505b9392505050565b60008181526019830160205260409020545b92915050565b6000908152600e91909101602052604090205490565b6002919091018054600181018255600091825260209091200180546001600160a01b0319166001600160a01b03909216919091179055565b6000908152601891909101602052604090205490565b6000805b6002840154811015610de657826001600160a01b0316846002018281548110610db957fe5b6000918252602090912001546001600160a01b03161415610dde576001915050610d26565b600101610d94565b5060009392505050565b6000600382118015610e03575061020082105b80610e1c57506110008210158015610e1c575061110082105b80610e3d57506120008210158015610e3d575069ffffffffffffffffffff82105b15610e4a57506000610d26565b506000908152600191909101602052604090205460ff1690565b6001600160a01b03821660009081526004840160205260408120805483908110610e8a57fe5b906000526020600020015490509392505050565b6001600160a01b0381166000908152600b8301602052604090205480610ef55760405162461bcd60e51b81526004018080602001828103825260398152602001806140596039913960400191505060405180910390fd5b610f01838360016124a0565b151580610f185750610f15838360026124a0565b15155b610f535760405162461bcd60e51b8152600401808060200182810382526023815260200180613f336023913960400191505060405180910390fd5b6001600160a01b038216600090815260158401602052604090205442811115610f7d575050611030565b8360120154811115610f90575050611030565b600160009081526013850160205260409020548015610fcf576000610fb7868660016124a0565b90508015610fcd57610fcd868660018486612e6a565b505b60026000908152601386016020526040902054801561100e576000610ff6878760026124a0565b9050801561100c5761100c878760028486612e6a565b505b5050506001600160a01b03821660009081526015840160205260409020429055505b5050565b600381565b600060024340848460405160200180848152602001836001600160a01b031660601b815260140182815260200193505050506040516020818303038152906040526040518082805190602001908083835b602083106110a95780518252601f19909201916020918201910161108a565b51815160209384036101000a60001901801990921691161790526040519190930194509192505080830381855afa1580156110e8573d6000803e3d6000fd5b5050506040513d60208110156110fd57600080fd5b50516040805160208082019390935281518082038401815290820190915280519101209392505050565b6000828152601884016020526040812080548390811061114357fe5b60009182526020909120600290910201546001600160a01b0316949350505050565b600281565b6120008210156111ab5760405162461bcd60e51b815260040180806020018281038252602c815260200180613f56602c913960400191505060405180910390fd5b8354604080517efdd58e0000000000000000000000000000000000000000000000000000000081526001600160a01b038681166004830152602482018690529151919092169162fdd58e916044808301926020929190829003018186803b15801561121557600080fd5b505afa158015611229573d6000803e3d6000fd5b505050506040513d602081101561123f57600080fd5b505160011461127f5760405162461bcd60e51b81526004018080602001828103825260398152602001806140206039913960400191505060405180910390fd5b6000828152601885016020526040902054156113165760008281526018850160205260408120805460001981019081106112b557fe5b6000918252602090912060029091020180549091506001600160a01b03858116911614156113145760405162461bcd60e51b8152600401808060200182810382526035815260200180613feb6035913960400191505060405180910390fd5b505b61131e613dc6565b506040805180820182526001600160a01b0385811682526020808301858152600087815260188a01835294852080546001808201835591875295839020855160029097020180546001600160a01b0319169690941695909517835551805193948594611391939185019290910190613dde565b50505082846001600160a01b03167f9f2ada97793e0bb8345b4becd29a0b1985a63a9b27d7e0150e2e5bf9c0989c6e846040518080602001828103825283818151815260200191508051906020019080838360005b838110156113fe5781810151838201526020016113e6565b50505050905090810190601f16801561142b5780820380516001836020036101000a031916815260200191505b509250505060405180910390a35050505050565b815460408051632c6207e160e11b81526001600160a01b03848116600483015260036024830152670de0b6b3a76400006044830152915191909216916358c40fc291606480830192600092919082900301818387803b1580156114a157600080fd5b505af11580156114b5573d6000803e3d6000fd5b5050505060006114c58383611b45565b905060006114d38383611039565b61200060009081526008860160209081526040808320548380528184205489548351633f8d71c960e11b81526001600160a01b038b81166004830152600360248301529451979850928416969184169594931692637f1ae3929260448082019391829003018186803b15801561154857600080fd5b505afa15801561155c573d6000803e3d6000fd5b505050506040513d602081101561157257600080fd5b5051905061158281611000613013565b9050816001600160a01b03166393f2d00c85836040518363ffffffff1660e01b815260040180838152602001826fffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b1580156115e257600080fd5b505afa1580156115f6573d6000803e3d6000fd5b505050506040513d602081101561160c57600080fd5b50511561196e576004600081815260058901602090815260408083206001600160a01b03808c1680865291845282852060019055825163a5b96c1b60e01b8152808701969096526024860191909152604485018990526064850184905290519086169363a5b96c1b9360848083019493928390030190829087803b15801561169357600080fd5b505af11580156116a7573d6000803e3d6000fd5b505050506040513d60208110156116bd57600080fd5b50506001600090815260198801602052604090205480156117e557875460408051637921219560e11b81526001600160a01b0392831660048201819052928a166024820152600160448201526064810184905260a06084820152600060a48201819052915163f242432a9260e48084019391929182900301818387803b15801561174657600080fd5b505af115801561175a573d6000803e3d6000fd5b5050895460408051633188639160e11b81526001600160a01b038c8116600483015260016024830152604482018790529151919092169350636310c7229250606480830192600092919082900301818387803b1580156117b957600080fd5b505af11580156117cd573d6000803e3d6000fd5b50506001600090815260198b01602052604081205550505b60026000908152601989016020526040902054801561190b57885460408051637921219560e11b81526001600160a01b0392831660048201819052928b166024820152600260448201526064810184905260a06084820152600060a48201819052915163f242432a9260e48084019391929182900301818387803b15801561186c57600080fd5b505af1158015611880573d6000803e3d6000fd5b50508a5460408051633188639160e11b81526001600160a01b038d8116600483015260026024830152604482018790529151919092169350636310c7229250606480830192600092919082900301818387803b1580156118df57600080fd5b505af11580156118f3573d6000803e3d6000fd5b50506002600090815260198c01602052604081205550505b61191b60018960048a600161306c565b604080518781526020810184905280820183905290516001600160a01b038a16917f40cd3f56e2c7e4f4c6752354309dc4b44cb6277d335524ca9366bae2418ac787919081900360600190a25050611b3c565b826001600160a01b03166393f2d00c8561ffff6040518363ffffffff1660e01b8152600401808381526020018281526020019250505060206040518083038186803b1580156119bc57600080fd5b505afa1580156119d0573d6000803e3d6000fd5b505050506040513d60208110156119e657600080fd5b505115611b3c576000836001600160a01b031663ca3b89f48661ffff6040518363ffffffff1660e01b81526004018083815260200182815260200192505050602060405180830381600087803b158015611a3f57600080fd5b505af1158015611a53573d6000803e3d6000fd5b505050506040513d6020811015611a6957600080fd5b505169ffffffffffffffffffff16612000908101600081815260058b01602090815260408083206001600160a01b038d811680865291845282852060019055825163a5b96c1b60e01b815260048101979097526024870191909152604486018b905261ffff6064870152905193955088169363a5b96c1b9360848083019491928390030190829087803b158015611aff57600080fd5b505af1158015611b13573d6000803e3d6000fd5b505050506040513d6020811015611b2957600080fd5b50611b3a905060018883898361306c565b505b50505050505050565b6001600160a01b031660009081526007919091016020526040902080546001810190915590565b603281565b60008281526009840160205260409020546001600160a01b03828116911614611be25760008281526009840160209081526040822080546001600160a01b0385166001600160a01b031991821681179092556002870180546001810182559085529290932090910180549092161790555b505050565b600083815260058501602090815260408083206001600160a01b0386168452909152902054611c1690826130cc565b60009384526005909401602090815260408085206001600160a01b03909416855292905250902055565b60005b8351811015612166576000848281518110611c5a57fe5b602002602001015190506000848381518110611c7257fe5b6020026020010151905060006001600160a01b0316886001600160a01b03161415611d6d576000828152600e8c016020526040902054611cb290826130cc565b6000838152600e8d01602090815260408083209390935560058e0181528282206001600160a01b038b16835290522054811015611d4257600082815260058c01602090815260408083206001600160a01b038b168452909152902054611d189082613126565b600083815260058d01602090815260408083206001600160a01b038c168452909152902055611d68565b600082815260058c01602090815260408083206001600160a01b038b1684529091528120555b611e81565b6101008210158015611d80575061100082105b15611d9157611d918b898484613183565b6110008210158015611da4575061200082105b15611db557611db58b898484613261565b848381518110611dc157fe5b60200260200101518a6001600160a01b031662fdd58e8a898781518110611de457fe5b60200260200101516040518363ffffffff1660e01b815260040180836001600160a01b031681526020018281526020019250505060206040518083038186803b158015611e3057600080fd5b505afa158015611e44573d6000803e3d6000fd5b505050506040513d6020811015611e5a57600080fd5b505103611e8157611e7f8b878581518110611e7157fe5b60200260200101518a6132df565b505b6001600160a01b038716611f2d576000828152600e8c016020526040902054811015611ed4576000828152600e8c016020526040902054611ec29082613126565b6000838152600e8d0160205260409020555b600082815260058c01602090815260408083206001600160a01b038c168452909152902054611f0390826130cc565b600083815260058d01602090815260408083206001600160a01b038d16845290915290205561202a565b896001600160a01b031662fdd58e88888681518110611f4857fe5b60200260200101516040518363ffffffff1660e01b815260040180836001600160a01b031681526020018281526020019250505060206040518083038186803b158015611f9457600080fd5b505afa158015611fa8573d6000803e3d6000fd5b505050506040513d6020811015611fbe57600080fd5b5051611fe257611fe28b878581518110611fd457fe5b602002602001015189613545565b6101008210158015611ff5575061100082105b15612006576120068b8884846135a5565b6110008210158015612019575061200082105b1561202a5761202a8b88848461362e565b6001600160a01b03881661215c57610100821015801561204b575061100082105b1561208d57600061206060fe19840183613013565b600a8d015490915061207290826130cc565b600a8d0155600f8c015461208690836130cc565b600f8d0155505b61100082101580156120a0575061200082105b1561213e5760006120b6610ffe19840183613013565b600381166000818152600c8f016020526040902054919250906120d990836130cc565b8d600c0160008360ff1660ff16815260200190815260200160002081905550612126838e60100160008460ff1660ff168152602001908152602001600020546130cc90919063ffffffff16565b60ff909116600090815260108e016020526040902055505b612000821061215c5760118b015461215690826130cc565b60118c01555b5050600101611c43565b505050505050505050565b600061217e856001612b27565b9050600061218d866002612b27565b90506000826001600160a01b03166370a08231876040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b1580156121de57600080fd5b505afa1580156121f2573d6000803e3d6000fd5b505050506040513d602081101561220857600080fd5b5051604080517f70a082310000000000000000000000000000000000000000000000000000000081526001600160a01b0389811660048301529151929350600092918516916370a0823191602480820192602092909190829003018186803b15801561227357600080fd5b505afa158015612287573d6000803e3d6000fd5b505050506040513d602081101561229d57600080fd5b5051905067ffffffffffffffff670de0b6b3a764000060ff881602168210156122f75760405162461bcd60e51b8152600401808060200182810382526043815260200180613ef06043913960600191505060405180910390fd5b8560ff16850281101561233b5760405162461bcd60e51b8152600401808060200182810382526048815260200180613fa36048913960600191505060405180910390fd5b670de0b6b3a76400008511156123825760405162461bcd60e51b8152600401808060200182810382526037815260200180613eb96037913960400191505060405180910390fd5b836001600160a01b03166367c6e39c888860ff16670de0b6b3a7640000026040518363ffffffff1660e01b815260040180836001600160a01b031681526020018267ffffffffffffffff16815260200192505050600060405180830381600087803b1580156123f057600080fd5b505af1158015612404573d6000803e3d6000fd5b50505050826001600160a01b03166367c6e39c888860ff1688026040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b15801561246457600080fd5b505af1158015612478573d6000803e3d6000fd5b5050505060005b8660ff168160ff16101561216657612498898988612735565b60010161247f565b6001600160a01b0382166000908152600b8401602052604081205480612508576124fe6040518060400160405280600f81526020017f6e6f2072656c6963207368617265730000000000000000000000000000000000815250613676565b6000915050610d0d565b6001600160a01b0384166000908152601586016020526040902054428111801561253157508015155b15612581576125766040518060400160405280601581526020017f74696d657374616d7020616674657220626c6f636b00000000000000000000008152508242613738565b600092505050610d0d565b85601201548111801561259357508015155b156125dc576125766040518060400160405280601d81526020017f74696d657374616d70206166746572206c617374207570646174653a20000000815250828860120154613738565b60008481526013870160205260409020548061263c576126306040518060400160405280600c81526020017f6e6f206469766964656e64730000000000000000000000000000000000000000815250613676565b60009350505050610d0d565b6001600160a01b038616600090815260148801602090815260408083208884529091528120549061266d8383613126565b905061269a82826126958c600a015461268f8a8761301390919063ffffffff16565b90613807565b61386e565b600a8901546126ad9061268f8388613013565b9998505050505050505050565b60ff166000908152601091909101602052604090205490565b600f015490565b6011015490565b6001600160a01b03166000908152600491909101602052604090205490565b6000908152600391909101602052604090205490565b600090815260089190910160205260409020546001600160a01b031690565b6127408383836138d6565b600061274c8484611b45565b9050600061275a8483611039565b90506000805b6006870154811015612afd5786600601818154811061277b57fe5b90600052602060002001546000141561279357612af5565b60008760080160008960060184815481106127aa57fe5b60009182526020808320919091015483528281019390935260409182018120548b548351633f8d71c960e11b81526001600160a01b038d811660048301526002602483015294519285169650670de0b6b3a7640000620100008d020495939490911692637f1ae39292604480840193829003018186803b15801561282d57600080fd5b505afa158015612841573d6000803e3d6000fd5b505050506040513d602081101561285757600080fd5b5051905061287161286a82611000613013565b83906130cc565b9150826001600160a01b03166393f2d00c87846040518363ffffffff1660e01b815260040180838152602001826fffffffffffffffffffffffffffffffff1681526020019250505060206040518083038186803b1580156128d157600080fd5b505afa1580156128e5573d6000803e3d6000fd5b505050506040513d60208110156128fb57600080fd5b505161290957505050612af5565b60008a600601858154811061291a57fe5b9060005260206000200154846001600160a01b031663ca3b89f489866040518363ffffffff1660e01b815260040180838152602001826fffffffffffffffffffffffffffffffff16815260200192505050602060405180830381600087803b15801561298557600080fd5b505af1158015612999573d6000803e3d6000fd5b505050506040513d60208110156129af57600080fd5b810190808051906020019092919050505069ffffffffffffffffffff1601905060018b600501600083815260200190815260200160002060008c6001600160a01b03166001600160a01b03168152602001908152602001600020819055506000846001600160a01b031663a5b96c1b8d6006018881548110612a2d57fe5b90600052602060002001548d8b886040518563ffffffff1660e01b815260040180858152602001846001600160a01b03168152602001838152602001826fffffffffffffffffffffffffffffffff168152602001945050505050602060405180830381600087803b158015612aa157600080fd5b505af1158015612ab5573d6000803e3d6000fd5b505050506040513d6020811015612acb57600080fd5b505190508680612ad85750805b9650612aef818c848c670de0b6b3a764000061306c565b50505050505b600101612760565b508015612b0c57505050611be2565b612b1f8686670de0b6b3a7640000613c74565b505050505050565b600090815260099190910160205260409020546001600160a01b031690565b600a81565b600083815260058501602090815260408083206001600160a01b0386168452909152902054811015612bd057600083815260058501602090815260408083206001600160a01b0386168452909152902054612ba69082613126565b600084815260058601602090815260408083206001600160a01b0387168452909152902055612bf6565b600083815260058501602090815260408083206001600160a01b03861684529091528120555b50505050565b600181565b6000908152601391909101602052604090205490565b600091825260019290920160205260409020805460ff191660ff909216919091179055565b60008281526008840160205260409020546001600160a01b03828116911614611be25760008281526008840160209081526040822080546001600160a01b0385166001600160a01b0319909116179055600685018054600181018255908352912001829055505050565b6000612cb3846003612b27565b90506000816001600160a01b03166370a08231856040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015612d0457600080fd5b505afa158015612d18573d6000803e3d6000fd5b505050506040513d6020811015612d2e57600080fd5b5051905067ffffffffffffffff670de0b6b3a764000060ff85160216811015612d885760405162461bcd60e51b8152600401808060200182810382526047815260200180613e726047913960600191505060405180910390fd5b816001600160a01b03166367c6e39c858560ff16670de0b6b3a7640000026040518363ffffffff1660e01b815260040180836001600160a01b031681526020018267ffffffffffffffff16815260200192505050600060405180830381600087803b158015612df657600080fd5b505af1158015612e0a573d6000803e3d6000fd5b5050505060005b8360ff168160ff161015612b1f57612e29868661143f565b600101612e11565b60008281526003840160205260408120805483908110612e4d57fe5b6000918252602090912001546001600160a01b0316949350505050565b845460408051637921219560e11b81526001600160a01b03928316600482018190529287166024820152604481018690526064810185905260a06084820152600060a48201819052915163f242432a9260e48084019391929182900301818387803b158015612ed857600080fd5b505af1158015612eec573d6000803e3d6000fd5b5050865460408051633188639160e11b81526001600160a01b03898116600483015260248201899052604482018890529151919092169350636310c7229250606480830192600092919082900301818387803b158015612f4b57600080fd5b505af1158015612f5f573d6000803e3d6000fd5b5050506001600160a01b03851660008181526014880160209081526040808320888452825280832086905592825260168901815282822087835290522054612fa89150836130cc565b6001600160a01b03851660008181526016880160209081526040808320888452825291829020939093558051868152928301859052805191927f206f1eb9ef4c0160b410eb801b061a0e2f2d88675457ecce8470fe913470cc24929081900390910190a25050505050565b60008261302257506000610d26565b8282028284828161302f57fe5b0414610d0d5760405162461bcd60e51b8152600401808060200182810382526021815260200180613f826021913960400191505060405180910390fd5b600185151514156130c5576040805183815260208101839052808201839052905184916001600160a01b038716917f379099d6f5e0c7f6d41f2b93487343942ed4bc66e511c7cee4acf5760b0cffb99181900360600190a35b5050505050565b600082820183811015610d0d576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b60008282111561317d576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b600061319360fe19840183613013565b6001600160a01b0385166000908152600b87016020526040902054909150158015906131d857506001600160a01b038416600090815260158601602052604090205442115b156131e7576131e78585610e9e565b6001600160a01b0384166000908152600b8601602052604090205461320c9082613126565b6001600160a01b039094166000818152600b8701602090815260408083209790975560158801815286822042905585825260138801815286822054928252601490970187528581209481529390955250502055565b6000613272610ffe19840183613013565b600384166000818152600d8801602090815260408083206001600160a01b038a168452909152902054919250906132a99083613126565b60ff9091166000908152600d909601602090815260408088206001600160a01b0390971688529590529390942092909255505050565b600082815260038401602052604081205481805b8281101561340e576000868152600388016020526040902080546001600160a01b03871691908390811061332357fe5b6000918252602090912001546001600160a01b0316141561340657600086815260038801602052604090208054600019850190811061335e57fe5b600091825260208083209091015488835260038a01909152604090912080546001600160a01b03909216918390811061339357fe5b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555086600301600087815260200190815260200160002060018403815481106133e457fe5b600091825260209091200180546001600160a01b03191690556001915061340e565b6001016132f3565b508061341f57600092505050610d0d565b6001600160a01b0384166000908152600487016020526040812054905b81811015613537576001600160a01b0386166000908152600489016020526040902080548891908390811061346d57fe5b9060005260206000200154141561352f576001600160a01b03861660009081526004890160205260409020805460001984019081106134a857fe5b9060005260206000200154886004016000886001600160a01b03166001600160a01b0316815260200190815260200160002082815481106134e557fe5b60009182526020808320909101929092556001600160a01b038816815260048a01909152604090208054600019840190811061351d57fe5b506000525060019350610d0d92505050565b60010161343c565b506000979650505050505050565b600082815260038401602090815260408083208054600181810183559185528385200180546001600160a01b039096166001600160a01b031990961686179055938352600490950181529381208054928301815581529290922090910155565b60006135b560fe19840183613013565b6001600160a01b0385166000908152600b87016020526040902054909150158015906135fa57506001600160a01b038416600090815260158601602052604090205442115b15613609576136098585610e9e565b6001600160a01b0384166000908152600b8601602052604090205461320c90826130cc565b600061363f610ffe19840183613013565b600384166000818152600d8801602090815260408083206001600160a01b038a168452909152902054919250906132a990836130cc565b613735816040516024018080602001828103825283818151815260200191508051906020019080838360005b838110156136ba5781810151838201526020016136a2565b50505050905090810190601f1680156136e75780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03167f41304fac000000000000000000000000000000000000000000000000000000001790529250613da5915050565b50565b611be28383836040516024018080602001848152602001838152602001828103825285818151815260200191508051906020019080838360005b8381101561378a578181015183820152602001613772565b50505050905090810190601f1680156137b75780820380516001836020036101000a031916815260200191505b5060408051601f198184030181529190526020810180516001600160e01b03167f969cdd03000000000000000000000000000000000000000000000000000000001790529450613da59350505050565b600080821161385d576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b81838161386657fe5b049392505050565b60408051602481018590526044810184905260648082018490528251808303909101815260849091019091526020810180516001600160e01b03167fe7820a7400000000000000000000000000000000000000000000000000000000179052611be290613da5565b670de0b6b3a764000060006138f860326138f2846103e8613807565b90613013565b905060006139068383613126565b865460408051632c6207e160e11b81526001600160a01b0389811660048301526001602483015260448201859052915193945060009391909216916358c40fc2916064808301928692919082900301818387803b15801561396657600080fd5b505af115801561397a573d6000803e3d6000fd5b5050885460408051637921219560e11b81526001600160a01b038b8116600483015290921660248301819052600160448401526064830188905260a06084840152600060a48401819052915190945063f242432a935060e48084019382900301818387803b1580156139eb57600080fd5b505af11580156139ff573d6000803e3d6000fd5b50505050613a33613a1a60028561380790919063ffffffff16565b6001600090815260138a016020526040902054906130cc565b60016000908152601389016020526040902055613a6d613a54846002613807565b6001600090815260198a016020526040902054906130cc565b600160009081526019890160205260409020558415613c22576000613a9960326138f2886103e8613807565b9050613aa58682613126565b885460408051632c6207e160e11b81526001600160a01b038b81166004830152600260248301526044820185905291519395509116916358c40fc29160648082019260009290919082900301818387803b158015613b0257600080fd5b505af1158015613b16573d6000803e3d6000fd5b5050895460408051637921219560e11b81526001600160a01b038c8116600483015290921660248301819052600260448401526064830186905260a06084840152600060a48401819052915190945063f242432a935060e48084019382900301818387803b158015613b8757600080fd5b505af1158015613b9b573d6000803e3d6000fd5b50505050613bcf613bb660028361380790919063ffffffff16565b6002600090815260138b016020526040902054906130cc565b6002600081815260138b016020526040902091909155613c0d90613bf4908390613807565b6002600090815260198b016020526040902054906130cc565b6002600090815260198a016020526040902055505b426012880155604080518381526020810183905281516001600160a01b038916927f443b7cddba3d0e8337423f75763db351425700fb1bdd6ef0c2579e4f3d1c5e2f928290030190a250505050505050565b6003600081815260058501602090815260408083206001600160a01b0380881680865291909352818420869055875482517f156e29f600000000000000000000000000000000000000000000000000000000815260048101929092526024820195909552604481018690529051939091169263156e29f69260648084019391929182900301818387803b158015613d0a57600080fd5b505af1158015613d1e573d6000803e3d6000fd5b5050845460408051633188639160e11b81526001600160a01b03878116600483015260036024830152604482018790529151919092169350636310c7229250606480830192600092919082900301818387803b158015613d7d57600080fd5b505af1158015613d91573d6000803e3d6000fd5b50505050611be2600183600360008561306c565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b60408051808201909152600081526060602082015290565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10613e1f57805160ff1916838001178555613e4c565b82800160010185558215613e4c579182015b82811115613e4c578251825591602001919060010190613e31565b50613e58929150613e5c565b5090565b5b80821115613e585760008155600101613e5d56fe4e6f7420656e6f75676820726164697573206c6f74746572792062616c616e636520746f20636865636b20746865206e756d626572206f6620646573697265642074696d65732e63616e6e6f742073706563696679206d6f7265207468616e203120636174616c7973742070657220666f726765206f7065726174696f6e4e6f7420656e6f75676820726164697573206761732062616c616e636520746f20666f72676520746865206e756d626572206f662064657369726564206974656d732e4e6f20636c61696d61626c65206469766964656e6420617420746865206d6f6d656e74476976656e206964206973206e6f7420612067656d20616e642063616e6e6f7420626520656e677261766564536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774e6f7420656e6f7567682072616469757320636174616c7973742062616c616e636520746f20666f72676520746865206e756d626572206f662064657369726564206974656d732e412067656d206d6179206f6e6c7920626520656e677261766564206f6e6365206279207468652063757272656e7420686f6c646572476976656e206163636f756e7420646f6573206e6f74206f776e20746869732067656d20616e642063616e6e6f7420656e67726176652069745573657220686173206e6f2052656c69632073686172657320616e642063616e6e6f74206d616b652061206469766964656e6420636c61696da264697066735822122084db4cbf4ff762049b7ce4b46b6438c3b6eb3f57a3cdf7a3a20ff9d815b54ddd64736f6c63430007030033";