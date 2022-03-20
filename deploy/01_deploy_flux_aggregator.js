// npx hardhat deploy --network shibuya --tags fluxAggregator

// For FluxAggregator
PAYMENT_AMOUNT = "10000000000000000"
TIMEOUT = "10"
VALIDATOR = "0x0000000000000000000000000000000000000000"
MIN_SSUBMISSION_VALUE = "100000000"
MAX_SSUBMISSION_VALUE = "1000000000000"
DECIMALS = "8"

module.exports = async ({ getNamedAccounts, deployments, getChainId }) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  // const chainId = network.config.chainId

  const linkToken = await deployments.get("LinkToken")

  const fluxAggregator = await deploy("FluxAggregator_ETH_USD", {
    contract: "FluxAggregator",
    from: deployer,
    log: true,
    args: [
      linkToken.address,
      PAYMENT_AMOUNT,
      TIMEOUT,
      VALIDATOR,
      MIN_SSUBMISSION_VALUE,
      MAX_SSUBMISSION_VALUE,
      DECIMALS,
      "ETH / USD",
    ],
  })

  const aggregatorProxy = await deploy("AggregatorProxy_ETH_USD", {
    contract: "AggregatorProxy",
    from: deployer,
    log: true,
    args: [
      fluxAggregator.address,
    ],
  })
  
  log("Aggregator Deployed!")
  log("----------------------------------------------------")
  log("Flux Aggregator: %s", fluxAggregator.address)
  log("Aggregator Proxy: %s", aggregatorProxy.address)
  log("----------------------------------------------------")
}
module.exports.tags = ["fluxAggregator"]