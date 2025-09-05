const cds = require('@sap/cds');
const { SELECT } = cds.ql;
const m = require('../db/tables'); // unused, unless you need it

module.exports = cds.service.impl(function (srv) {
  // Example READ handler for Books
  srv.on('READ', 'Bookstore', async req => {
    cds.User.default = cdsUser.Privileged;
    console.log(req);

    return this.tx(
      { user: new cds.User.Privileged("") },
      tx => tx.run(
        SELECT.from('Bookstore') // match entity name in service2.cds
          .where`Bookstore = ${req.data.messageToPass}`
      )
    );
  });
});
