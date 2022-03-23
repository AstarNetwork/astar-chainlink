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
0x2080b61De559b5f7d5230CA6DAE36B5aabbf534D
```
Price Feeds
|  Base/Quote  |  Data Feed Contract  |
| ---- | ---- |
|  BTC / USD  |  0xFf42a93d3E8D4aA3f445648369e3Ab01DFb35354  |
|  ETH / USD  |  0x0c8C9C3C4493a626b9Fc1eA8929268a530b26595  |
|  ASTR / USD |  0x6B213499A89aB035C29BE99a185C1B43DA9E45a2  |
|  SDN / USD  |  0xE8dB0bcF8f4F590E8EDba37C81E686311843f2dF  |
|  USDT / USD |  0xB86938A4E82A29b432C14dFb9b97095bf0b76C7C  |
|  USDC / USD |  0x87f505B3015f5E48c243bEd83c0Ffe73a450c531  |
|  DAI / USD  |  0x3dc86b520e05351a38DDcfBCd5F43ea6D59fd26a  |

### Shiden
Link Token
```
0x2e145915c41dA47614Ac9248368773348f28ae25
```
Price Feeds
|  Base/Quote  |  Data Feed Contract  |
| ---- | ---- |
|  BTC / USD  |  0xBd2694154FaC39729F0A11F930B7fb94f34742Ad  |
|  ETH / USD  |  0xD2C98bd9F9Ad006Ab4AC904B92dE7767189d450d  |
|  ASTR / USD |  0xBC2B4b6510126a293275Fc7C16bd59256d003440  |
|  SDN / USD  |  0x9790083Cf852637515aD65d6a2ac6BC6b593893F  |
|  USDT / USD |  0x63f2C1fBB6a6e91Fc1570822630eFc3b0598967A  |
|  USDC / USD |  0x85d7190EeDBb8AeE94Cc1A82AA061dB4a53252Fb  |
|  DAI / USD  |  0x248EBfDd4aDfF9FE4ca491c06139B9dDb7C41531  |

### Astar
Link Token
```
0xa6BE7DE34C30D98fd53b4EaE387bc0B72Dd764F5
```
Price Feeds
|  Base/Quote  |  Data Feed Contract  |
| ---- | ---- |
|  BTC / USD  |  0x8b16545846Af51E90Bd7c4D5f761B8D44dA68214  |
|  ETH / USD  |  0x3C8C0F3f3975eABBB659257299161Da5ecA5700e  |
|  ASTR / USD |  0xDBF406b29835F05B3f7b3Cb6e7e8751eB41C615E  |
|  SDN / USD  |  0xB3558D8ff261C239385AA4054d7788B38Da5ac7f  |
|  USDT / USD |  0x0a27c6FeFAD5a3A8360507ECe06010D097317Da8  |
|  USDC / USD |  0x597be21005e14382dba9B4bf68fc7087b81732E9  |
|  DAI / USD  |  0xbCBE160931058B0d025013efDfCC150F9Df386fA  |

## Deploy
```
npx hardhat deploy --network shibuya # optional --tags linkToken
```
