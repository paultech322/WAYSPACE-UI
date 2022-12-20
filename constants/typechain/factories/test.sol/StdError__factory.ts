/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { StdError, StdErrorInterface } from "../../test.sol/StdError";

const _abi = [
  {
    inputs: [],
    name: "arithmeticError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "assertionError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "divisionError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "encodeStorageError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "enumConversionError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "indexOOBError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lowLevelError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "memOverflowError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "popError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "zeroVarError",
    outputs: [
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x61030161003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100c85760003560e01c8063ac3d92c611610080578063b67689da11610065578063b67689da14610129578063d160e4de14610131578063fa784a441461013957600080fd5b8063ac3d92c61461010b578063b22dc54d1461012157600080fd5b80631de45560116100b15780631de45560146100f35780638995290f146100fb578063986c5f681461010357600080fd5b806305ee8612146100cd57806310332977146100eb575b600080fd5b6100d5610141565b6040516100e29190610258565b60405180910390f35b6100d56101c8565b6100d56101da565b6100d56101ec565b6100d56101fe565b6100d56040518060200160405280600081525081565b6100d5610210565b6100d5610222565b6100d5610234565b6100d5610246565b604051603260248201526044015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f4e487b710000000000000000000000000000000000000000000000000000000017905281565b6040516001602482015260440161014f565b6040516021602482015260440161014f565b6040516011602482015260440161014f565b6040516041602482015260440161014f565b6040516031602482015260440161014f565b6040516051602482015260440161014f565b6040516022602482015260440161014f565b6040516012602482015260440161014f565b600060208083528351808285015260005b8181101561028557858101830151858201604001528201610269565b81811115610297576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01692909201604001939250505056fea2646970667358221220375eb25f35f10ca35383ee47c5191cdf14dbe2ea3b0a87e05405d82a6a8287b564736f6c634300080a0033";

type StdErrorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StdErrorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StdError__factory extends ContractFactory {
  constructor(...args: StdErrorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StdError> {
    return super.deploy(overrides || {}) as Promise<StdError>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): StdError {
    return super.attach(address) as StdError;
  }
  override connect(signer: Signer): StdError__factory {
    return super.connect(signer) as StdError__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StdErrorInterface {
    return new utils.Interface(_abi) as StdErrorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StdError {
    return new Contract(address, _abi, signerOrProvider) as StdError;
  }
}