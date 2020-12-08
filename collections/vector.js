const { getContract } = require('../utils');
const { getValue } = require('./basicKeyValue');

async function setVectorValue(value) {
  const contract = await getContract();
  try {
        console.log(`Calling contract [ ${contract.contractId} ]`);
        console.log('--------------------------------------------');
        await contract.setVectorValue({ value });
        console.log('--------------------------------------------');
    } catch(error) {
        console.log(error);
  };  
};

async function setVector(vector) {
  const contract = await getContract();
  console.log('Setting vector values...')
  try {
      let i;
      for (i = 0; i < vector.length; i++) {
        value = vector[i]
        await contract.setVectorValue({ value });
      };
      console.log('Complete...');
  } catch(error) {
      console.log(error);
  }
};

async function getVectorValues(key) {
  const length = await getValue(`${key}:len`);
  const values = [];
  let i;
  for (i = 0; i < length; i++) {
      const result = await getValue(`${key}::${i}`);
      values.push(result);
 }
 return values;
}

const nameArr = [ 'Alice', 'Bob', 'Charles']

async function main() {
    await setVector(nameArr);
    await setVectorValue('Doug');
    const result = await getVectorValues('name');
    return result;
}

main();
