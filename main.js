const near = require('./utils');

near.setKeyValue('name', 'alice')
    .then(() => near.setKeyValue('age', '33')) 
    .then(() => near.getValue('name'))
    .then(() => near.getValue('age'));
