import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const cETH = await deploy("ConfidentialETH", { from: deployer, log: true });
  const cBTC = await deploy("ConfidentialBTC", { from: deployer, log: true });
  const cUSDC = await deploy("ConfidentialUSDC", { from: deployer, log: true });
  const cDAI = await deploy("ConfidentialDAI", { from: deployer, log: true });

  console.log(`cETH: ${cETH.address}`);
  console.log(`cBTC: ${cBTC.address}`);
  console.log(`cUSDC: ${cUSDC.address}`);
  console.log(`cDAI: ${cDAI.address}`);
};

export default func;
func.id = "deploy_tokens_only"; // id required to prevent reexecution
func.tags = ["Tokens"];
