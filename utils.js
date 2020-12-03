require("dotenv").config({ path: './neardev/dev-account.env' });
const userHome = require('user-home');
const nearAPI = require("near-api-js");

const keyStore = new nearAPI.keyStores.UnencryptedFileSystemKeyStore(`${userHome}/.near-credentials/`);
const contractName = process.env.CONTRACT_NAME;

async function contractConnect() {
    const config = {
        keyStore,
        networkId: 'default',
        nodeUrl: 'https://rpc.testnet.near.org',
        walletUrl: 'https://wallet.testnet.near.org',
        helperUrl: 'https://helper.testnet.near.org',
        explorerUrl: 'https://explorer.testnet.near.org'
    }
    
    const connection = await nearAPI.connect(config);
    const account = await connection.account(contractName);
    
    const contract = new nearAPI.Contract(account, contractName, {
        viewMethods: ["getValue"],
        changeMethods: ["setValue"], 
        sender: contractName,  
    });
    return contract;
}

async function setKeyValue(key, value) {
    const contract = await contractConnect();
    try {
        console.log(`Calling contract [ ${contractName} ]`)
        console.log(`Storing { ${key}: ${value} } ...`)
        console.log('---------------------------------------------------------------------------')
        await contract.setValue({ key, value });
        console.log('---------------------------------------------------------------------------')
    } catch(error) {
        console.log(error);
    }
};

async function getValue(key) {
    const contract = await contractConnect();
    console.log(`Retrieving stored value for "${key}":`);
    result = await contract.getValue({ key });
    console.log('Result:', [ result ])
    console.log('---------------------------------------------------------------------------')
}

module.exports = { setKeyValue, getValue };
