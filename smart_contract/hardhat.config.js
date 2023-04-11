require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/Py5ieC9qbULC6EkvkJyfDbSY0oJzruLk',
      accounts: ['12a7d9e835cf5be838ba09e4a31e655e981a6f9dfb35edf9aa8f88023dcfdef4'],
    },
  },
};