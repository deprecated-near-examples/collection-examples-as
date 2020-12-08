const { setVector, setVectorValue, getVectorValues } = require('./contract-helpers/persistentVector');

const nameArr = [ 'Alice', 'Bob', 'Charles']

async function main() {
    await setVector(nameArr);
    await setVectorValue('Doug');
    const result = await getVectorValues('name');
    return result;
}

main();
