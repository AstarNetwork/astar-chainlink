// npx hardhat deploy --network shibuya --tags linkToken

module.exports = async ({ getNamedAccounts, deployments}) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  const chainId = network.config.chainId

  const linkToken = await deploy("LinkToken", { from: deployer, log: true })
  
  log("Link Token Deployed!")
  log("----------------------------------------------------")
  log("LinkToken: %s", linkToken.address)
  log("----------------------------------------------------")
}
module.exports.tags = ["linkToken"]