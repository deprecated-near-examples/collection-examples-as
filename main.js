const near = require('./utils');

near.setKeyValue('name', 'alice')
    .then(() => near.getValue('name'));
