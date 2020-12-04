const { setString, setNumber, getValue } = require('./collections/basicKeyValues');

setString('name', 'alice')
    .then(() => setNumber('age', 33)) 
    .then(() => getValue('name'))
    .then(() => getValue('age'));
