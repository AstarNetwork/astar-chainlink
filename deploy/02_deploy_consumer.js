// npx hardhat deploy --network shibuya --tags priceConsumer

module.exports = async ({ getNamedAccounts, deployments}) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  const chainId = network.config.chainId

  const proxy = await deployments.get("AggregatorProxy_ETH_USD")

  const priceConsumer = await deploy("PriceConsumer_ETH_USD", {
    contract: "PriceConsumer",
    from: deployer,
    log: true,
    args: [
	proxy.address,
    ]
  })
  
  log("Price Consumer Deployed!")
  log("----------------------------------------------------")
  log("Price Consumer: %s", priceConsumer.address)
  log("----------------------------------------------------")
}
module.exports.tags = ["priceConsumer"]