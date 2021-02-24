
// migrate master location
require('./Location')();
// migrate mastar ekspedisi
require('./Ekspedisi')();
// create tbl wh ekspedisi
require('./Warehouse_ekspedisi')();
// create tbl master warehouse
require('./Warehouse')();
// create tbl master member
require('./Member')();
// create tbl master jne
require('./jne')();
// create tbl master jnt
require('./jnt')();
// create tbl master rpx
require('./rpx')();
// create tbl master sap
require('./sap')();
// create tbl master ninja
require('./ninja')();
// create tbl master klink express
require('./klink')();
// create tbl master stockist express
require('./stockist')();

module.exports = 'Migrate data'