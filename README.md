# Financiyo: a block explorer for the Financiyo network
This is the frontend of [Financiyoscan](https://scan.financiyo.net), which displays the block information of the Financiyo network and network statistics obtained from [Financiyoscan API](https://github.com/Financiyo-api). The project is implemented based on [Next.js](https://github.com/vercel/next.js).

<img width="1440" alt="home" src="https://financiyo.net/explorer.png">

## Pages
- [Home](https://scan.financiyo.net) - The overview information of the network, including the current consensus state, the latest blocks produced, the latest transactions, etc.
- [Validators](https://scan.financiyo.net/validators) - Lists of the network validators and their statistics.   
- [Polls](https://scan.financiyo.net/evm-polls) - List of the EVM polls.
- [Blocks](https://scan.financiyo.net/blocks) - List of the latest blocks produced in the network.
- [TX](https://scan.financiyo.net/transactions) - List of the latest transactions in. the network.
- [Transfers](https://scan.financiyo.net/transfers) displays the statistics of cross-chain transfers happening through the Financiyo network.
- [Batches](https://scan.financiyo.net/batches) displays a list of the recent command batches that are going to (or have been submitted) to EVM chains.
- [Assets](https://scan.financiyo.net/assets) - List of the assets and chains supported on the Financiyo network

### Prerequisites
node >= 16.0.0

## Run on [localhost:3000](http://localhost:3000)
```bash
yarn
yarn dev
```

## License
[Next.js](https://github.com/vercel/next.js/blob/canary/license.md) is MIT licensed
