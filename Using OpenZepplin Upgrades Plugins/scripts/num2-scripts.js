const { ethers, upgrades } = require('hardhat')

const UPGRADEABLE_PROXY = '0x167F39a4EA475552Bc73bF4041ACaB2bEf964f48' //prev address

async function main() {
    const V2Contract = await ethers.getContractFactory('NUM2')
    console.log('Upgrading V1Contract...')
    let upgrade = await upgrades.upgradeProxy(UPGRADEABLE_PROXY, V2Contract);

    console.log('V1 Upgraded to V2');

    const address = upgrade.target;
    console.log('V2 Contract Deployed To:', address);
}

main().catch(error => {
    console.error(error)
    process.exitCode = 1
})