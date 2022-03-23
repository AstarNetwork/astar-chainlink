// npx hardhat deploy --network shibuya --tags fluxAggregator

// For FluxAggregator
PAYMENT_AMOUNT = "100000000000000000"
TIMEOUT = "10"
VALIDATOR = "0x0000000000000000000000000000000000000000"
MIN_SSUBMISSION_VALUE = "1000000"
MAX_SSUBMISSION_VALUE = "1000000000000000"
DECIMALS = "8"

const pairDescriptions = {
  "ETH_USD": "ETH / USD",
  "BTC_USD": "BTC / USD",
  "ASTR_USD": "ASTR / USD",
  "SDN_USD": "SDN / USD",
  "USDT_USD": "USDT / USD",
  "USDC_USD": "USDC / USD",
  "DAI_USD": "DAI / USD",
}

module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  // const chainId = network.config.chainId

  const linkToken = await deployments.get("LinkToken")

  let fluxAggregatorContractName = ""
  let aggregatorProxyContractName = ""

  for (pair in pairDescriptions) {
    fluxAggregatorContractName = `FluxAggregator_${pair}`
    let fluxAggregator = await deploy(fluxAggregatorContractName, {
      contract: "FluxAggregator",
      from: deployer,
      log: true,
      skipIfAlreadyDeployed: true,
      args: [
        linkToken.address,
        PAYMENT_AMOUNT,
        TIMEOUT,
        VALIDATOR,
        MIN_SSUBMISSION_VALUE,
        MAX_SSUBMISSION_VALUE,
        DECIMALS,
        pairDescriptions[pair],
      ],
    })

    aggregatorProxyContractName = `AggregatorProxy_${pair}`
    let aggregatorProxy = await deploy(aggregatorProxyContractName, {
      contract: "AggregatorProxy",
      from: deployer,
      log: true,
      args: [
        fluxAggregator.address,
      ],
    })

    log("----------------------------------------------------")
    log("Aggregator %s Deployed!", pair)
    log("Flux Aggregator: %s", fluxAggregator.address)
    log("Aggregator Proxy: %s", aggregatorProxy.address)
    log("----------------------------------------------------")
  } 
}
module.exports.tags = ["fluxAggregator"]