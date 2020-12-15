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
        viewMethods: ["getValue"],
        changeMethods: [
            "setString", 
            "setNumber", 
            "setVectorValue",
            "add_persistent_map",
            "addAvlValue"
        ], 
        sender: contractName,
    };
    return new nearAPI.Contract(accountObj, contractName, methodArgs);
}

module.exports = { getContract } ;
