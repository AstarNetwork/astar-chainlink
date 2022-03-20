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
  const removedOracles = []
  const addedOracles = ["0x98B9a135BF26c2F04E479B0219001cF28f24b28A"]
  const addedAdmins = ["0x78f24E4303c0a368bc677B1D3F062e5D5462B7C8"]
  const minSubmissions = '1'
  const maxSubmissions = '1'
  const restartDelay = '0'


  const res = await execute(
    aggregatorContract,
    {from: deployer, log: true},
    'changeOracles',
    removedOracles,
    addedOracles,
    addedAdmins,
    minSubmissions,
    maxSubmissions,
    restartDelay
  );

  console.log("---------------------------")
  console.log("changed oracles")
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