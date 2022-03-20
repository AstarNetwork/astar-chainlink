# astar-chainlink

Chainlink Oracle on Astar/Shiden/Shibuya Network.
Utilizing Chainlink Oracle Contracts. This repository is for internal management purpose.
See https://github.com/smartcontractkit/chainlink/tree/develop/contracts

## Chainlink Architecture Explanations
- Basic Request Model https://docs.chain.link/docs/architecture-request-model/
- Decentralized Data Model https://docs.chain.link/docs/architecture-decentralized-model/
- Off-Chain Reporting https://docs.chain.link/docs/off-chain-reporting/

For Price Data Feeds, utilizing Decentralized Data Model. Thus, corresponding contracts are used.

## Deploy
```
npx hardhat deploy --network shibuya # optional --tags linkToken
```
