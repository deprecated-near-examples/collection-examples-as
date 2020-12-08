const { getContract } = require('../utils');

async function setMapValue(arg) {
  const contract = await getContract();
  console.log(`Calling contract [ ${contract.contractId} ]`)
  console.log('Setting map value...')
  console.log('--------------------------------------------');
  try {
    await contract.setMapValue({ mapName: arg });
    console.log('Complete...');
  } catch(error) { 
    console.log(error);
  };
};

async function main() {
  await setMapValue({key: 'name', value: 'John'});
};

main();
