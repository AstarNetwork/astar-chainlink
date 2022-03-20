# astar-chainlink

Chainlink Oracle on Astar/Shiden/Shibuya Network.
Utilizing Chainlink Oracle Contracts. This repository is for internal management purpose.
See https://github.com/smartcontractkit/chainlink/tree/develop/contracts

## Chainlink Architecture Explanations
- Basic Request Model https://docs.chain.link/docs/architecture-request-model/
- Decentralized Data Model https://docs.chain.link/docs/architecture-decentralized-model/
- Off-Chain Reporting https://docs.chain.link/docs/off-chain-reporting/

For Price Data Feeds, utilizing Decentralized Data Model. Thus, corresponding contracts are used.

## Contract Addresses
### Shibuya
Link Token
```
0xcE1fBD660CDabAD01c28f7dE012D80E61481Cf2F
```

Price Feeds
|  Base/Quote  |  Data Feed Contract  |
| ---- | ---- |
|  ETH / USD  |  0x6b7418B84C2D3148488eF89B015d6a74031d9E68  |

### Shiden
Link Token
```

```

Price Feeds
|  Base/Quote  |  Data Feed Contract  |
| ---- | ---- |
|    |   |

### Astar
Link Token
```

```

Price Feeds
|  Base/Quote  |  Data Feed Contract  |
| ---- | ---- |
|    |   |


## Deploy
```
npx hardhat deploy --network shibuya # optional --tags linkToken
```
