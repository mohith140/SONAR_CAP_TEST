const cds = require('@sap/cds');
const app = require("express")();
const fs = require('fs');
var http = require("http");
const url = require("url");
const axios = require('axios');
const pg = require("pg");
const crypto = require("crypto");
const jsyaml = require("js-yaml");
var cp = require("child_process");
const session = require('express-session');
app.use(session({
    secret: 'keyboard cat'
}));
app.use(require('body-parser').urlencoded({ extended: false }))
  const cookieParser = require("cookie-parser");
 const bodyParser = require("body-parser");
 const session = require("express-session");
//csrf
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: process.env['SECRET'], cookie: { maxAge: 60000 } }));

// ...
 
app.post("/changeEmail", function(req, res) {
  const userId = req.session.id;
  const email = req.body["email"];
  // ... update email associated with userId
});
//node modules exposure
app.use('/node_modules', express.static(path.resolve(__dirname, '../node_modules')));
app.get("load", function(req, res) {
  let data = jsyaml.load(req.params.data);
  // ...
});
module.exports =async function (srv) {
 const nodemailer = require("nodemailer");
 let url = 'http://example.org/auth';
let username = 'user';
let password = 'passwd';
 //1.sql injection            ---(done)
  srv.on("updateEntry",async (req)=> { 
    const category=req.params.category;
   var query1 =
    "SELECT ITEM,PRICE FROM SHOP WHERE ITEM_CATEGORY='" +
    category +
    "' ORDER BY PRICE";
    const result = await cds.run(query1);
    console.log(result+" "+password);
 })


// 2. Cross-Site Scripting (XSS) (CWE-79)      ---(partially done)
srv.on('/user/:id', async (req,res) => {
const name = req.query.name; // user-controlled input
    // ❌ Unsafe: reflected directly into response
    res.send(`Hello, ${name}! Welcome to our site.`);
        var href = document.location.href,
        deflt = href.substring(href.indexOf("default=")+8);
    
    try {
        var parsed = unknownParseFunction(deflt); 
    } catch(e) {
        document.write("Had an error: " + e + "."); //  ---(done)
    }
    //
     fs.readdir('/public', function (error, fileNames) {
        var list = '<ul>';
        fileNames.forEach(fileName => {
            // BAD: `fileName` can contain HTML elements
            list += '<li>' + fileName + '</li>';
        });
        list += '</ul>'
        res.send(list);
    });
    
});

// 6. Insecure Direct Object Reference (IDOR) (CWE-639) --(done)
srv.on("getInvoice", async (req) => {
  // does not check if user owns invoice
  return cds.run(`SELECT * FROM Invoices WHERE ID = ${req.data.invoice.id}`);
});





// 10. Security Misconfiguration (CWE-933)   ---(done)
srv.on("openAdmin", async () => {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; // disables TLS verification
  return "Admin opened insecurely";
});






// 14. Unvalidated Redirects and Forwards (CWE-601)   ---(done)
srv.on("redirectUser", async (req, res) => {
  const { url } = req.data;
  window.location = /.*redirect=([^&]*).*/.exec(document.location.href)[1];
  res.redirect(req.query["target"]);
  res.redirect(url); // unvalidated user-controlled redirect
});


// 16. Improper File Upload Handling (CWE-434)     ---(done)
srv.on("uploadFile", async (req) => {
  const { file } = req.data;
  require("fs").writeFileSync(`/tmp/${file.name}`, file.content); // no type validation
  return "Uploaded"; 
});

// 17. Hardcoded Secrets in Code (CWE-798)
srv.on("connectDB", async (req,res) => {
  const client = new pg.Client({
  user: "bob",
  host: "database.server.com",
  database: "mydb",
  password: "correct-horse-battery-staple",
  port: 3211
});
client.connect()
  const user = "admin";
  const password = "SuperSecret123"; // hardcoded secret
  console.log(user+" "+password)
  return `Connected with ${user}/${password}`;
});





// 21. Command injection / SSL (CWE-78)
srv.on("commmandInjection", async (req,res) => {
  cp.execSync(`wc -l ${file}`);
    let file = url.parse(req.url, true).query.path;

    cp.execSync(`wc -l ${file}`); // BAD
});

// 22. improper input validation / SSL (CWE-20) /82    --(done)
srv.on("inputValidation", async (req,res) => {
let url = req.param("url"),
        host = urlLib.parse(url).host;
    // BAD: the host of `url` may be controlled by an attacker
    if (host.includes("example.com")) {
        res.redirect(url);
    }
});



}; 