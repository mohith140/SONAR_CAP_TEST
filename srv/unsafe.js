const cds = require('@sap/cds');
const m=require('../db/tables');
module.exports = cds.service.impl(srv => {
  srv.on('READ', 'Books', req => {
    console.log(req)
  });
});