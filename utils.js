require("dotenv").config({ path: './neardev/dev-account.env' });
const nearAPI = require("near-api-js");

const keyStore = new nearAPI.keyStores.UnencryptedFileSystemKeyStore('../../../.near-credentials');
const networkId = 'testnet';
const contractName = process.env.CONTRACT_NAME;

async function contractConnect() {
    const config = {
        networkId,
        keyStore,
        nodeUrl: `https://rpc.${networkId}.near.org`,
        walletUrl: `https://wallet.${networkId}.near.org`,
        helperUrl: `https://helper.${networkId}.near.org`,
        explorerUrl: `https://explorer.${networkId}.near.org`
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
        console.log(`Calling contract [ ${contractName} ] and setting value [ ${value} ]`)
        console.log('---------------------------------------------------------------------------')
        await contract.setValue({ key, value });
        console.log('---------------------------------------------------------------------------')
    } catch(error) {
        console.log(error);
    }
};

async function getValue(key) {
    const contract = await contractConnect();
    console.log(`Retrieving stored value for [ ${key} ]`);
    result = await contract.getValue({ key });
    console.log('Result:', [ result ])
    console.log('---------------------------------------------------------------------------')
}

module.exports = { setKeyValue, getValue };
