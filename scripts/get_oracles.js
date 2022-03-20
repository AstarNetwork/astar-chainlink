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
  const { read } = deployments

  const aggregatorContract = "FluxAggregator_ETH_USD"

  const res = await read(
    aggregatorContract,
    'getOracles',
  );

  console.log("---------------------------")
  console.log(res)
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