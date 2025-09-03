const cds = require('@sap/cds');

module.exports = cds.service.impl(async function() {
  const { Users } = this.entities;

  // Expose Users without authentication
  this.on('READ', Users, async (req) => {
    return await SELECT.from(Users);
  });
});
