{
  "root": true,
  "env": {
    "node": true,
    "es2021": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@sap/cds/recommended"   // <- Enable CAP linting rules
  ],
  "plugins": [
    "@sap/cds"
  ],
  "overrides": [
    {
      "files": ["*.cds"],
      "processor": "@sap/cds/cds"   // <- Process .cds files
    }
  ],
  "rules": {
    // Optional: customize CAP rules
    "@sap/cds/no-passport-auth": "error",
    "@sap/cds/no-plain-password": "warn"
  }
}
