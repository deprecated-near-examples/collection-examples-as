const { setVector, setVectorValue, getVectorValues } = require('./collections/persistentVector');

const array = [ 'Alice', 'Bob', 'Charles']

setVector(array)
    .then(() => setVectorValue('Doug'))
    .then(() => getVectorValues('name'))
    .then((result) => console.log("Vector data on chain: ", result));
