require("dotenv").config({ path: './neardev/dev-account.env' });
const nearAPI = require("near-api-js");
const userHome = require('user-home');

const contractName = process.env.CONTRACT_NAME;
const keyStore = new nearAPI.keyStores.UnencryptedFileSystemKeyStore(`${userHome}/.near-credentials`);

async function getContract() {
    const config = {
        keyStore,
        networkId: 'default',
        nodeUrl: 'https://rpc.testnet.near.org',
        walletUrl: 'https://wallet.testnet.near.org',
        helperUrl: 'https://helper.testnet.near.org',
        explorerUrl: 'https://explorer.testnet.near.org'
    }

    const near = await nearAPI.connect(config);
    const accountObj = await near.account(contractName);

    const methodArgs = {
        viewMethods: [
            "get_map", 
            "get_unordered_map", 
            "get_tree_map"
        ],
        changeMethods: [
            "setString", 
            "setNumber", 
            "setVectorValue",
            "add_Map",
            "add_unordered_map",
            "add_tree_map"
        ], 
        sender: contractName,
    };
    return new nearAPI.Contract(accountObj, contractName, methodArgs);
}

const getDataSet = (dataSet, maxVal) => {
    const delta = Math.floor(dataSet.length / maxVal);
    let results = [];
    for (let i = 0; i < dataSet.length; i=i+delta) {
      const element = dataSet[i];
      results.push(element);
    }
    return results;
  }

 // converts yoctoNEAR (passed as a string) into standard Ⓝ as a float
const formatNEAR = (yoctoNEAR) => {
    return Number(
     nearAPI.utils.format.formatNearAmount(yoctoNEAR)
     ) 
 }
 
module.exports = { getContract, getDataSet, formatNEAR } ;
