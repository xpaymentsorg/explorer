import {MenuItem} from '../models/menu_item.model';
import {ErcName, FunctionName, ThemeColor} from './enums';

export const THEME_SETTINGS = {
  color: ThemeColor.LIGHT,
};

export const LOGO_NAMES = {
  [ThemeColor.LIGHT]: 'logo_fullcolor.png',
  [ThemeColor.DARK]: 'logo_allwhite.png',
};

export const ROUTES = {
  HOME: 'home',
  BLOCK: 'block',
  ADDRESS_FULL: 'address',
  ADDRESS: 'addr',
  TOKEN: 'token',
  RICHLIST: 'richlist',
  TRANSACTION: 'tx',
  SETTINGS: 'settings',
  VERIFY: 'verify',
  WALLET: 'wallet',
  CREATE_WALLET: 'create-account',
  SEND_TX: 'send-tx',
  SIGNERS: 'signers',
  CONTRACTS: 'contracts',
};

export const MENU_ITEMS: MenuItem[] = [
  {
    title: 'Main',
    link: ROUTES.HOME,
  },
  // {
  //   title: 'Wallet',
  //   link: ROUTES.WALLET,
  // },
  {
    title: 'Signers',
    link: ROUTES.SIGNERS,
  },
];

export const DEFAULT_GAS_LIMIT = 21000;

export const TOKEN_TYPES = {
  Xps20: 'XPS20',
  Xps20Burnable: 'XPS20 Burnable',
  Xps20Capped: 'XPS20 Capped',
  Xps20Detailed: 'XPS20 Detailed',
  Xps20Mintable: 'XPS20 Mintable',
  Xps20Pausable: 'XPS20 Pausable',
  Xps165: 'XPS165',
  Xps721: 'XPS721',
  Xps721Burnable: 'XPS721 Burnable',
  Xps721Receiver: 'XPS721 Receiver',
  Xps721Metadata: 'XPS721 Metadata',
  Xps721Enumerable: 'XPS721 Enumerable',
  Xps721Pausable: 'XPS721 Pausable',
  Xps721Mintable: 'XPS721 Mintable',
  Xps721MetadataMintable: 'XPS721 Metadata Mintable',
  Xps721Full: 'XPS721 Full',
  Xps820: 'XPS820',
  Xps1155: 'XPS1155',
  Xps1155Receiver: 'XPS1155 Receiver',
  Xps1155Metadata: 'XPS1155 Metadata',
  Xps223: 'XPS223',
  Xps223Receiver: 'XPS223 Receiver',
  Xps621: 'XPS621',
  Xps777: 'XPS777',
  Xps777Receiver: 'XPS777 Receiver',
  Xps777Sender: 'XPS777 Sender',
  Xps827: 'XPS827',
  Xps884: 'XPS884',
  Upgradeable: 'Upgradeable',
  Ownable: 'Ownable',
  PauserRole: 'Pauser Role',
  XpsFS: 'XpsFS',
};

export const ERC_INTERFACE_IDENTIFIERS = {
  [ErcName.AllFunctions]: Object.keys(FunctionName),
  [ErcName.Xps20]: [FunctionName.Allowance, FunctionName.Approve, FunctionName.BalanceOf, FunctionName.TotalSupply,
    FunctionName.Transfer, FunctionName.TransferFrom, FunctionName.Decimals, FunctionName.Name, FunctionName.Symbol],
  [ErcName.Xps721]: [FunctionName.Approve, FunctionName.BalanceOf, FunctionName.GetApproved, FunctionName.IsApprovedForAll,
    FunctionName.OwnerOf, FunctionName.SafeTransferFrom, FunctionName.SafeTransferFromData, FunctionName.SetApprovalForAll, FunctionName.TransferFrom],
  [ErcName.Xps165]: [FunctionName.SupportsInterface],
  [ErcName.Upgradeable]: [FunctionName.Target, FunctionName.Upgrade, FunctionName.Pause, FunctionName.Paused, FunctionName.Resume, FunctionName.Owner],
};

export const TOKEN_ABI_NAMES: string[] = ['totalSupply', 'balanceOf'];

export const META_TITLES = {
  DEFAULT: {
    title: 'xPayments Explorer',
  },
  HOME: {
    title: 'Home',
  },
  BLOCK: {
    title: 'Block',
  },
  ADDRESS: {
    title: 'Address',
  },
  CONTRACT: {
    title: 'Contract',
  },
  TOKEN: {
    title: 'Token',
  },
  RICHLISLT: {
    title: 'Richlist',
  },
  CONTRACTS: {
    title: 'Contracts List',
  },
  TRANSACTION: {
    title: 'Transaction',
  },
  VERIFY: {
    title: 'Verify contract',
  },
  SEND_TX: {
    title: 'Send transaction',
  },
  SIGNERS: {
    title: 'Signers',
  },
  WALLET: {
    title: 'Wallet',
  },
  CREATE_WALLET: {
    title: 'Create account',
  },
  SEND_WALLET: {
    title: 'Send XPS',
  },
  DEPLOY_CONTRACT: {
    title: 'Deploy contract',
  },
  USE_CONTRACT: {
    title: 'Interact with a Smart Contract',
  },
  OPEN_WALLET: {
    title: 'Open wallet',
  },
  NOT_FOUND: {
    title: 'Not found',
  },
};
