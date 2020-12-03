const { setKeyValue, getValue } = require('./basicKeyValues');

setKeyValue('name', 'alice')
    .then(() => setKeyValue('age', '33')) 
    .then(() => getValue('name'))
    .then(() => getValue('age'));
