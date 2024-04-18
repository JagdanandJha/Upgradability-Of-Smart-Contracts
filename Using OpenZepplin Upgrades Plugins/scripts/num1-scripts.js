const { ethers, upgrades } = require('hardhat');

async function main(){
    const NUM1 = await ethers.getContractFactory("NUM1");
    console.log("Deploying Num Version 1");

    const num1 = await upgrades.deployProxy(NUM1,[10],{
        initializer:'update'
    });

    const deploy = await num1.waitForDeployment();
    console.log("Num1 deployed Address",deploy.target);
    console.log(deploy);
}

main();