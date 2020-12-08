const { getContract } = require('../utils');

async function addAvlValue(arg) {
  const contract = await getContract();
  console.log(`Calling contract [ ${contract.contractId} ]`);
  console.log('Setting AVLTree value...');
  console.log('--------------------------------------------');
  try {
    await contract.addAvlValue({treeName: arg});
    console.log('Complete...');
  } catch(error) {
    console.log(error);
  }
}

async function main() {
  await addAvlValue({key: 'name', value: 'John'});
}

main();