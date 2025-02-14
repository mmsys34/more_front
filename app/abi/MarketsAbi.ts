import { Abi } from "viem";

export const MarketsAbi: Abi = [
  {
    type: "constructor",
    inputs: [
      { name: "newOwner", type: "address", internalType: "address" },
      {
        name: "_debtTokenFactory",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "DOMAIN_SEPARATOR",
    inputs: [],
    outputs: [{ name: "", type: "bytes32", internalType: "bytes32" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "accrueInterest",
    inputs: [
      {
        name: "marketParams",
        type: "tuple",
        internalType: "struct MarketParams",
        components: [
          {
            name: "isPremiumMarket",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "loanToken",
            type: "address",
            internalType: "address",
          },
          {
            name: "collateralToken",
            type: "address",
            internalType: "address",
          },
          { name: "oracle", type: "address", internalType: "address" },
          { name: "irm", type: "address", internalType: "address" },
          { name: "lltv", type: "uint256", internalType: "uint256" },
          {
            name: "creditAttestationService",
            type: "address",
            internalType: "address",
          },
          {
            name: "irxMaxLltv",
            type: "uint96",
            internalType: "uint96",
          },
          {
            name: "categoryLltv",
            type: "uint256[]",
            internalType: "uint256[]",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "arrayOfMarkets",
    inputs: [],
    outputs: [{ name: "", type: "bytes32[]", internalType: "Id[]" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "borrow",
    inputs: [
      {
        name: "marketParams",
        type: "tuple",
        internalType: "struct MarketParams",
        components: [
          {
            name: "isPremiumMarket",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "loanToken",
            type: "address",
            internalType: "address",
          },
          {
            name: "collateralToken",
            type: "address",
            internalType: "address",
          },
          { name: "oracle", type: "address", internalType: "address" },
          { name: "irm", type: "address", internalType: "address" },
          { name: "lltv", type: "uint256", internalType: "uint256" },
          {
            name: "creditAttestationService",
            type: "address",
            internalType: "address",
          },
          {
            name: "irxMaxLltv",
            type: "uint96",
            internalType: "uint96",
          },
          {
            name: "categoryLltv",
            type: "uint256[]",
            internalType: "uint256[]",
          },
        ],
      },
      { name: "assets", type: "uint256", internalType: "uint256" },
      { name: "shares", type: "uint256", internalType: "uint256" },
      { name: "onBehalf", type: "address", internalType: "address" },
      { name: "receiver", type: "address", internalType: "address" },
    ],
    outputs: [
      { name: "", type: "uint256", internalType: "uint256" },
      { name: "", type: "uint256", internalType: "uint256" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "claimDebtTokens",
    inputs: [
      {
        name: "marketParams",
        type: "tuple",
        internalType: "struct MarketParams",
        components: [
          {
            name: "isPremiumMarket",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "loanToken",
            type: "address",
            internalType: "address",
          },
          {
            name: "collateralToken",
            type: "address",
            internalType: "address",
          },
          { name: "oracle", type: "address", internalType: "address" },
          { name: "irm", type: "address", internalType: "address" },
          { name: "lltv", type: "uint256", internalType: "uint256" },
          {
            name: "creditAttestationService",
            type: "address",
            internalType: "address",
          },
          {
            name: "irxMaxLltv",
            type: "uint96",
            internalType: "uint96",
          },
          {
            name: "categoryLltv",
            type: "uint256[]",
            internalType: "uint256[]",
          },
        ],
      },
      { name: "onBehalf", type: "address", internalType: "address" },
      { name: "receiver", type: "address", internalType: "address" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "createMarket",
    inputs: [
      {
        name: "marketParams",
        type: "tuple",
        internalType: "struct MarketParams",
        components: [
          {
            name: "isPremiumMarket",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "loanToken",
            type: "address",
            internalType: "address",
          },
          {
            name: "collateralToken",
            type: "address",
            internalType: "address",
          },
          { name: "oracle", type: "address", internalType: "address" },
          { name: "irm", type: "address", internalType: "address" },
          { name: "lltv", type: "uint256", internalType: "uint256" },
          {
            name: "creditAttestationService",
            type: "address",
            internalType: "address",
          },
          {
            name: "irxMaxLltv",
            type: "uint96",
            internalType: "uint96",
          },
          {
            name: "categoryLltv",
            type: "uint256[]",
            internalType: "uint256[]",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "debtTokenFactory",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "enableIrm",
    inputs: [{ name: "irm", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "enableLltv",
    inputs: [{ name: "lltv", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "extSloads",
    inputs: [{ name: "slots", type: "bytes32[]", internalType: "bytes32[]" }],
    outputs: [{ name: "res", type: "bytes32[]", internalType: "bytes32[]" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "feeRecipient",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "flashLoan",
    inputs: [
      { name: "token", type: "address", internalType: "address" },
      { name: "assets", type: "uint256", internalType: "uint256" },
      { name: "data", type: "bytes", internalType: "bytes" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "idToDebtToken",
    inputs: [{ name: "", type: "bytes32", internalType: "Id" }],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "idToMarketParams",
    inputs: [{ name: "id", type: "bytes32", internalType: "Id" }],
    outputs: [
      { name: "isPremiumMarket", type: "bool", internalType: "bool" },
      { name: "loanToken", type: "address", internalType: "address" },
      {
        name: "collateralToken",
        type: "address",
        internalType: "address",
      },
      { name: "oracle", type: "address", internalType: "address" },
      { name: "irm", type: "address", internalType: "address" },
      { name: "lltv", type: "uint256", internalType: "uint256" },
      {
        name: "_creditAttestationService",
        type: "address",
        internalType: "address",
      },
      { name: "irxMaxLltv", type: "uint96", internalType: "uint96" },
      {
        name: "categoryLltv",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "irxMaxAvailable",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isAuthorized",
    inputs: [
      { name: "", type: "address", internalType: "address" },
      { name: "", type: "address", internalType: "address" },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isIrmEnabled",
    inputs: [{ name: "", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "isLltvEnabled",
    inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "lastTotalDebtAssetsGenerated",
    inputs: [{ name: "", type: "bytes32", internalType: "Id" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "liquidate",
    inputs: [
      {
        name: "marketParams",
        type: "tuple",
        internalType: "struct MarketParams",
        components: [
          {
            name: "isPremiumMarket",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "loanToken",
            type: "address",
            internalType: "address",
          },
          {
            name: "collateralToken",
            type: "address",
            internalType: "address",
          },
          { name: "oracle", type: "address", internalType: "address" },
          { name: "irm", type: "address", internalType: "address" },
          { name: "lltv", type: "uint256", internalType: "uint256" },
          {
            name: "creditAttestationService",
            type: "address",
            internalType: "address",
          },
          {
            name: "irxMaxLltv",
            type: "uint96",
            internalType: "uint96",
          },
          {
            name: "categoryLltv",
            type: "uint256[]",
            internalType: "uint256[]",
          },
        ],
      },
      { name: "borrower", type: "address", internalType: "address" },
      {
        name: "seizedAssets",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "repaidShares",
        type: "uint256",
        internalType: "uint256",
      },
      { name: "data", type: "bytes", internalType: "bytes" },
    ],
    outputs: [
      { name: "", type: "uint256", internalType: "uint256" },
      { name: "", type: "uint256", internalType: "uint256" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "market",
    inputs: [{ name: "", type: "bytes32", internalType: "Id" }],
    outputs: [
      {
        name: "totalSupplyAssets",
        type: "uint128",
        internalType: "uint128",
      },
      {
        name: "totalSupplyShares",
        type: "uint128",
        internalType: "uint128",
      },
      {
        name: "totalBorrowAssets",
        type: "uint128",
        internalType: "uint128",
      },
      {
        name: "totalBorrowShares",
        type: "uint128",
        internalType: "uint128",
      },
      { name: "lastUpdate", type: "uint128", internalType: "uint128" },
      { name: "fee", type: "uint128", internalType: "uint128" },
      {
        name: "isPremiumFeeEnabled",
        type: "bool",
        internalType: "bool",
      },
      { name: "premiumFee", type: "uint128", internalType: "uint128" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "maxLltvForCategory",
    inputs: [],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "nonce",
    inputs: [{ name: "", type: "address", internalType: "address" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "position",
    inputs: [
      { name: "", type: "bytes32", internalType: "Id" },
      { name: "", type: "address", internalType: "address" },
    ],
    outputs: [
      {
        name: "supplyShares",
        type: "uint128",
        internalType: "uint128",
      },
      {
        name: "borrowShares",
        type: "uint128",
        internalType: "uint128",
      },
      { name: "collateral", type: "uint128", internalType: "uint128" },
      {
        name: "lastMultiplier",
        type: "uint64",
        internalType: "uint64",
      },
      {
        name: "debtTokenMissed",
        type: "uint128",
        internalType: "uint128",
      },
      {
        name: "debtTokenGained",
        type: "uint128",
        internalType: "uint128",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "repay",
    inputs: [
      {
        name: "marketParams",
        type: "tuple",
        internalType: "struct MarketParams",
        components: [
          {
            name: "isPremiumMarket",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "loanToken",
            type: "address",
            internalType: "address",
          },
          {
            name: "collateralToken",
            type: "address",
            internalType: "address",
          },
          { name: "oracle", type: "address", internalType: "address" },
          { name: "irm", type: "address", internalType: "address" },
          { name: "lltv", type: "uint256", internalType: "uint256" },
          {
            name: "creditAttestationService",
            type: "address",
            internalType: "address",
          },
          {
            name: "irxMaxLltv",
            type: "uint96",
            internalType: "uint96",
          },
          {
            name: "categoryLltv",
            type: "uint256[]",
            internalType: "uint256[]",
          },
        ],
      },
      { name: "assets", type: "uint256", internalType: "uint256" },
      { name: "shares", type: "uint256", internalType: "uint256" },
      { name: "onBehalf", type: "address", internalType: "address" },
      { name: "data", type: "bytes", internalType: "bytes" },
    ],
    outputs: [
      { name: "", type: "uint256", internalType: "uint256" },
      { name: "", type: "uint256", internalType: "uint256" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setAuthorization",
    inputs: [
      { name: "authorized", type: "address", internalType: "address" },
      { name: "newIsAuthorized", type: "bool", internalType: "bool" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setAuthorizationWithSig",
    inputs: [
      {
        name: "authorization",
        type: "tuple",
        internalType: "struct Authorization",
        components: [
          {
            name: "authorizer",
            type: "address",
            internalType: "address",
          },
          {
            name: "authorized",
            type: "address",
            internalType: "address",
          },
          { name: "isAuthorized", type: "bool", internalType: "bool" },
          { name: "nonce", type: "uint256", internalType: "uint256" },
          { name: "deadline", type: "uint256", internalType: "uint256" },
        ],
      },
      {
        name: "signature",
        type: "tuple",
        internalType: "struct Signature",
        components: [
          { name: "v", type: "uint8", internalType: "uint8" },
          { name: "r", type: "bytes32", internalType: "bytes32" },
          { name: "s", type: "bytes32", internalType: "bytes32" },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setFee",
    inputs: [
      {
        name: "marketParams",
        type: "tuple",
        internalType: "struct MarketParams",
        components: [
          {
            name: "isPremiumMarket",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "loanToken",
            type: "address",
            internalType: "address",
          },
          {
            name: "collateralToken",
            type: "address",
            internalType: "address",
          },
          { name: "oracle", type: "address", internalType: "address" },
          { name: "irm", type: "address", internalType: "address" },
          { name: "lltv", type: "uint256", internalType: "uint256" },
          {
            name: "creditAttestationService",
            type: "address",
            internalType: "address",
          },
          {
            name: "irxMaxLltv",
            type: "uint96",
            internalType: "uint96",
          },
          {
            name: "categoryLltv",
            type: "uint256[]",
            internalType: "uint256[]",
          },
        ],
      },
      { name: "newFee", type: "uint256", internalType: "uint256" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setFeeRecipient",
    inputs: [
      {
        name: "newFeeRecipient",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setIrxMax",
    inputs: [
      {
        name: "_irxMaxAvailable",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setMaxLltvForCategory",
    inputs: [
      {
        name: "_maxLltvForCategory",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setOwner",
    inputs: [{ name: "newOwner", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "setPremiumFee",
    inputs: [
      {
        name: "marketParams",
        type: "tuple",
        internalType: "struct MarketParams",
        components: [
          {
            name: "isPremiumMarket",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "loanToken",
            type: "address",
            internalType: "address",
          },
          {
            name: "collateralToken",
            type: "address",
            internalType: "address",
          },
          { name: "oracle", type: "address", internalType: "address" },
          { name: "irm", type: "address", internalType: "address" },
          { name: "lltv", type: "uint256", internalType: "uint256" },
          {
            name: "creditAttestationService",
            type: "address",
            internalType: "address",
          },
          {
            name: "irxMaxLltv",
            type: "uint96",
            internalType: "uint96",
          },
          {
            name: "categoryLltv",
            type: "uint256[]",
            internalType: "uint256[]",
          },
        ],
      },
      { name: "isEnabled", type: "bool", internalType: "bool" },
      {
        name: "newPremiumFee",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "supply",
    inputs: [
      {
        name: "marketParams",
        type: "tuple",
        internalType: "struct MarketParams",
        components: [
          {
            name: "isPremiumMarket",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "loanToken",
            type: "address",
            internalType: "address",
          },
          {
            name: "collateralToken",
            type: "address",
            internalType: "address",
          },
          { name: "oracle", type: "address", internalType: "address" },
          { name: "irm", type: "address", internalType: "address" },
          { name: "lltv", type: "uint256", internalType: "uint256" },
          {
            name: "creditAttestationService",
            type: "address",
            internalType: "address",
          },
          {
            name: "irxMaxLltv",
            type: "uint96",
            internalType: "uint96",
          },
          {
            name: "categoryLltv",
            type: "uint256[]",
            internalType: "uint256[]",
          },
        ],
      },
      { name: "assets", type: "uint256", internalType: "uint256" },
      { name: "shares", type: "uint256", internalType: "uint256" },
      { name: "onBehalf", type: "address", internalType: "address" },
      { name: "data", type: "bytes", internalType: "bytes" },
    ],
    outputs: [
      { name: "", type: "uint256", internalType: "uint256" },
      { name: "", type: "uint256", internalType: "uint256" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "supplyCollateral",
    inputs: [
      {
        name: "marketParams",
        type: "tuple",
        internalType: "struct MarketParams",
        components: [
          {
            name: "isPremiumMarket",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "loanToken",
            type: "address",
            internalType: "address",
          },
          {
            name: "collateralToken",
            type: "address",
            internalType: "address",
          },
          { name: "oracle", type: "address", internalType: "address" },
          { name: "irm", type: "address", internalType: "address" },
          { name: "lltv", type: "uint256", internalType: "uint256" },
          {
            name: "creditAttestationService",
            type: "address",
            internalType: "address",
          },
          {
            name: "irxMaxLltv",
            type: "uint96",
            internalType: "uint96",
          },
          {
            name: "categoryLltv",
            type: "uint256[]",
            internalType: "uint256[]",
          },
        ],
      },
      { name: "assets", type: "uint256", internalType: "uint256" },
      { name: "onBehalf", type: "address", internalType: "address" },
      { name: "data", type: "bytes", internalType: "bytes" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "totalBorrowAssetsForMultiplier",
    inputs: [
      { name: "", type: "bytes32", internalType: "Id" },
      { name: "", type: "uint64", internalType: "uint64" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalBorrowSharesForMultiplier",
    inputs: [
      { name: "", type: "bytes32", internalType: "Id" },
      { name: "", type: "uint64", internalType: "uint64" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "totalDebtAssetsGenerated",
    inputs: [{ name: "", type: "bytes32", internalType: "Id" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "tps",
    inputs: [{ name: "", type: "bytes32", internalType: "Id" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "updateBorrower",
    inputs: [
      {
        name: "marketParams",
        type: "tuple",
        internalType: "struct MarketParams",
        components: [
          {
            name: "isPremiumMarket",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "loanToken",
            type: "address",
            internalType: "address",
          },
          {
            name: "collateralToken",
            type: "address",
            internalType: "address",
          },
          { name: "oracle", type: "address", internalType: "address" },
          { name: "irm", type: "address", internalType: "address" },
          { name: "lltv", type: "uint256", internalType: "uint256" },
          {
            name: "creditAttestationService",
            type: "address",
            internalType: "address",
          },
          {
            name: "irxMaxLltv",
            type: "uint96",
            internalType: "uint96",
          },
          {
            name: "categoryLltv",
            type: "uint256[]",
            internalType: "uint256[]",
          },
        ],
      },
      { name: "borrower", type: "address", internalType: "address" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "withdraw",
    inputs: [
      {
        name: "marketParams",
        type: "tuple",
        internalType: "struct MarketParams",
        components: [
          {
            name: "isPremiumMarket",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "loanToken",
            type: "address",
            internalType: "address",
          },
          {
            name: "collateralToken",
            type: "address",
            internalType: "address",
          },
          { name: "oracle", type: "address", internalType: "address" },
          { name: "irm", type: "address", internalType: "address" },
          { name: "lltv", type: "uint256", internalType: "uint256" },
          {
            name: "creditAttestationService",
            type: "address",
            internalType: "address",
          },
          {
            name: "irxMaxLltv",
            type: "uint96",
            internalType: "uint96",
          },
          {
            name: "categoryLltv",
            type: "uint256[]",
            internalType: "uint256[]",
          },
        ],
      },
      { name: "assets", type: "uint256", internalType: "uint256" },
      { name: "shares", type: "uint256", internalType: "uint256" },
      { name: "onBehalf", type: "address", internalType: "address" },
      { name: "receiver", type: "address", internalType: "address" },
    ],
    outputs: [
      { name: "", type: "uint256", internalType: "uint256" },
      { name: "", type: "uint256", internalType: "uint256" },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "withdrawCollateral",
    inputs: [
      {
        name: "marketParams",
        type: "tuple",
        internalType: "struct MarketParams",
        components: [
          {
            name: "isPremiumMarket",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "loanToken",
            type: "address",
            internalType: "address",
          },
          {
            name: "collateralToken",
            type: "address",
            internalType: "address",
          },
          { name: "oracle", type: "address", internalType: "address" },
          { name: "irm", type: "address", internalType: "address" },
          { name: "lltv", type: "uint256", internalType: "uint256" },
          {
            name: "creditAttestationService",
            type: "address",
            internalType: "address",
          },
          {
            name: "irxMaxLltv",
            type: "uint96",
            internalType: "uint96",
          },
          {
            name: "categoryLltv",
            type: "uint256[]",
            internalType: "uint256[]",
          },
        ],
      },
      { name: "assets", type: "uint256", internalType: "uint256" },
      { name: "onBehalf", type: "address", internalType: "address" },
      { name: "receiver", type: "address", internalType: "address" },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "AccrueInterest",
    inputs: [
      {
        name: "id",
        type: "bytes32",
        indexed: true,
        internalType: "Id",
      },
      {
        name: "prevBorrowRate",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "interest",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "feeShares",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Borrow",
    inputs: [
      {
        name: "id",
        type: "bytes32",
        indexed: true,
        internalType: "Id",
      },
      {
        name: "caller",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "onBehalf",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "receiver",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "assets",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "shares",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "CreateMarket",
    inputs: [
      {
        name: "id",
        type: "bytes32",
        indexed: true,
        internalType: "Id",
      },
      {
        name: "marketParams",
        type: "tuple",
        indexed: false,
        internalType: "struct MarketParams",
        components: [
          {
            name: "isPremiumMarket",
            type: "bool",
            internalType: "bool",
          },
          {
            name: "loanToken",
            type: "address",
            internalType: "address",
          },
          {
            name: "collateralToken",
            type: "address",
            internalType: "address",
          },
          { name: "oracle", type: "address", internalType: "address" },
          { name: "irm", type: "address", internalType: "address" },
          { name: "lltv", type: "uint256", internalType: "uint256" },
          {
            name: "creditAttestationService",
            type: "address",
            internalType: "address",
          },
          {
            name: "irxMaxLltv",
            type: "uint96",
            internalType: "uint96",
          },
          {
            name: "categoryLltv",
            type: "uint256[]",
            internalType: "uint256[]",
          },
        ],
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "EnableIrm",
    inputs: [
      {
        name: "irm",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "EnableLltv",
    inputs: [
      {
        name: "lltv",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "FlashLoan",
    inputs: [
      {
        name: "caller",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "token",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "assets",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "IncrementNonce",
    inputs: [
      {
        name: "caller",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "authorizer",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "usedNonce",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Liquidate",
    inputs: [
      {
        name: "id",
        type: "bytes32",
        indexed: true,
        internalType: "Id",
      },
      {
        name: "caller",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "borrower",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "repaidAssets",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "repaidShares",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "seizedAssets",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "badDebtAssets",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "badDebtShares",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Repay",
    inputs: [
      {
        name: "id",
        type: "bytes32",
        indexed: true,
        internalType: "Id",
      },
      {
        name: "caller",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "onBehalf",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "assets",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "shares",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "SetAuthorization",
    inputs: [
      {
        name: "caller",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "authorizer",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "authorized",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newIsAuthorized",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "SetFee",
    inputs: [
      {
        name: "id",
        type: "bytes32",
        indexed: true,
        internalType: "Id",
      },
      {
        name: "newFee",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "SetFeeRecipient",
    inputs: [
      {
        name: "newFeeRecipient",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "SetIrxMaxAvailable",
    inputs: [
      {
        name: "newIrxMaxAvailable",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "SetMaxLltvForCategory",
    inputs: [
      {
        name: "newMaxLltvForCategory",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "SetOwner",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "SetPremiumFee",
    inputs: [
      {
        name: "id",
        type: "bytes32",
        indexed: true,
        internalType: "Id",
      },
      {
        name: "isEnabled",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
      {
        name: "newPremiumFee",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Supply",
    inputs: [
      {
        name: "id",
        type: "bytes32",
        indexed: true,
        internalType: "Id",
      },
      {
        name: "caller",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "onBehalf",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "assets",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "shares",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "SupplyCollateral",
    inputs: [
      {
        name: "id",
        type: "bytes32",
        indexed: true,
        internalType: "Id",
      },
      {
        name: "caller",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "onBehalf",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "assets",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "Withdraw",
    inputs: [
      {
        name: "id",
        type: "bytes32",
        indexed: true,
        internalType: "Id",
      },
      {
        name: "caller",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "onBehalf",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "receiver",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "assets",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "shares",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "WithdrawCollateral",
    inputs: [
      {
        name: "id",
        type: "bytes32",
        indexed: true,
        internalType: "Id",
      },
      {
        name: "caller",
        type: "address",
        indexed: false,
        internalType: "address",
      },
      {
        name: "onBehalf",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "receiver",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "assets",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "error",
    name: "InvalidCategoryLltvValue",
    inputs: [
      { name: "numberInArray", type: "uint8", internalType: "uint8" },
      {
        name: "maxAvailableValue",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "minAvailableValue",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "providedValue",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "InvalidIrxMaxValue",
    inputs: [
      {
        name: "maxAvailableValue",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "minAvailableValue",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "providedValue",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    type: "error",
    name: "InvalidLengthOfCategoriesLltvsArray",
    inputs: [
      {
        name: "expectedLength",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "providedLength",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  { type: "error", name: "NothingToClaim", inputs: [] },
] as const;
