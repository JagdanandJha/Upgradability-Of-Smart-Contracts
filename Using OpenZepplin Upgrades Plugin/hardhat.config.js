require('@nomicfoundation/hardhat-toolbox')
require('@openzeppelin/hardhat-upgrades');
require('dotenv').config();

const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY;
const API_KEY = process.env.API_KEY;

module.exports = {
  solidity: "0.8.23",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: API_KEY,
  },
};