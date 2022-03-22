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
- Link Token
```
0x2080b61De559b5f7d5230CA6DAE36B5aabbf534D
```
- Price Feeds
|  Base/Quote  |  Data Feed Contract  |
| ---- | ---- |
|  BTC / USD  |  0x1f4Fb4D3922F66fe2D34f57fE6532e51ac0a4C38  |
|  ETH / USD  |  0xb3B7C1cFDDC0A461659d2E052D48939384061AcE  |
|  ASTR / USD |  0x0d4D3ABF8267ae8e4B1E9657f0F9973Ad8447ed0  |
|  SDN / USD  |  0x6cC5CBE69f00E257E2ef9eEe3d72af97d16E7244  |

### Shiden
- Link Token
```
0x2e145915c41dA47614Ac9248368773348f28ae25
```
- Price Feeds
|  Base/Quote  |  Data Feed Contract  |
| ---- | ---- |
|  BTC / USD  |  0x0c8C9C3C4493a626b9Fc1eA8929268a530b26595  |
|  ETH / USD  |  0x8f981Ae7D500aaC846DE867C9C5ee519937c2375  |
|  ASTR / USD |  0x6177B85739818dCA30ab3f0e525f32a35d806F74  |
|  SDN / USD  |  0xFf42a93d3E8D4aA3f445648369e3Ab01DFb35354  |

### Astar
- Link Token
```
0xa6BE7DE34C30D98fd53b4EaE387bc0B72Dd764F5
```
- Price Feeds
|  Base/Quote  |  Data Feed Contract  |
| ---- | ---- |
|  BTC / USD  |  0xb6f603192D478D8787d2af3fEf40Fa8E262fEC69  |
|  ETH / USD  |  0x5D2bbb5D64Ce4CC3bFb3ba1746377E30054B24Bf  |
|  ASTR / USD |  0xA9772888A3d9b51DDA1D5CE2cf9a27B55940e684  |
|  SDN / USD  |  0xFF0fC36D219555148a84f91F47197d8E489b299c  |

## Deploy
```
npx hardhat deploy --network shibuya # optional --tags linkToken
```
