require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/IRy-LIGkw6x0-4XKct8OqRnngkqm6_bt',
      accounts: ['2ed3132bc83246fab61b8c62ee9c41477257e77cfcd1bb74c6ab8c9829b980ee'],
    },
  },
};