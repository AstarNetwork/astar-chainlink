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

  const aggregatorContract = "FluxAggregator_ETH_USD"
  
  // change here
  const paymentAmount = '1000000000000000'
  const minSubmissions = '0'
  const maxSubmissions = '0'
  const restartDelay = '0'
  const timeout = '10'

  const res = await execute(
    aggregatorContract,
    {from: deployer, log: true},
    'updateFutureRounds',
    paymentAmount,
    minSubmissions,
    maxSubmissions,
    restartDelay,
    timeout
  );

  console.log("---------------------------")
  console.log("updated future round")
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