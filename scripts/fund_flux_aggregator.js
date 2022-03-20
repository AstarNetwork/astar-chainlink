const hre = require("hardhat");
const { toWei, toEther } = require('./utils')
const deployments = hre.deployments;
const getNamedAccounts = hre.getNamedAccounts;

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');
  const { execute } = deployments
  const { deployer } = await getNamedAccounts()

  // change contract name depends on which flux aggregator you want to add funds
  const aggregatorContract = "FluxAggregator_ETH_USD"
  const fluxAggregator = await deployments.get(aggregatorContract)
  const payment = toWei('0.1')

  const res = await execute(
    'LinkToken',
    {from: deployer, log: true},
    'transferAndCall',
    fluxAggregator.address,
    payment,
    []
  );

  console.log("---------------------------")
  console.log("Transfered %s LINK to %s", toEther(payment), fluxAggregator.address)
  console.log("Hash: %s", res.transactionHash)
  console.log("---------------------------")
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });