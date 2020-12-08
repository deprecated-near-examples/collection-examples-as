const { setString, setNumber, getValue } = require('./contract-helpers/basicKeyValues');

async function setKeyValue () {
    await setString('name', 'alice');
    await setNumber('age', 55);
    await getValue('name');
    await getValue('age');
}

setKeyValue();
