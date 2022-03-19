require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("hardhat-deploy");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
      {
        version: "0.7.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
      {
        version: "0.8.7",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
      {
        version: "0.4.24",
        settings: {
          optimizer: {
            enabled: true,
            runs: 1000,
          },
        },
      },
    ]
  },
  networks: {
    shibuya: {
      url: `https://rpc.shibuya.astar.network:8545`,
      accounts: [`${process.env.PRIVATE_KEY}`],
      saveDeployments: true,
      chainId: 81,
    },
    shiden: {
      url: `https://evm.shiden.astar.network`,
      accounts: [`${process.env.PRIVATE_KEY}`],
      saveDeployments: true,
      chainId: 336,
    },
    astar: {
      url: `https://rpc.astar.network:8545`,
      accounts: [`${process.env.PRIVATE_KEY}`],
      saveDeployments: true,
      chainId: 592,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
    },
    feeCollector: {
      default: 1,
    },
  },
};

test