const fs = require( 'fs' )
const express = require('express')
const chalk = require('chalk')
const bodyParser = require('body-parser')
const decodeQR = require('./decodeQR.js')
const mysql = require('mysql')
const pkg = require( '../package.json' );
const config = require('../config')
const start = Date.now()
const protocol = process.env.PROTOCOL || config.protocol
const port = process.env.PORT || config.port
const host = process.env.HOST || config.host.getCurrent()

let server, dbConnection

function sendBootStatus( status ) {
     // don't send anything if we're not running in a fork
    if ( ! process.send ) {
	return;
    }
    process.send( { boot: status } );
}

const app = express();

app.use(express.static(`${__dirname}/../dist`))
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}))
app.use(express.json({ limit: '50mb' }))

app.post(`/imageOutput`, (req, res) => {
  console.log( req.body.data )
  const fileName = `output.png`
  const imageData = req.body.data
  const imageBuffer = new Buffer(imageData, 'base64'); //console = <Buffer 75 ab 5a 8a ...
  fs.writeFile(fileName, imageBuffer, (err) => {
    if (!err) {
      console.log(`successfully wrote ${fileName}`)
      setTimeout(()=>{
        if(!res.headersSent){ res.send('timeout.'); console.log('timeout.') }
      }, 1000)
      decodeQR(fileName, res)
    }
  })
})

app.post(`/userDataSubmit`, (req, res) => {
  console.log(req.body.data)
  const userData = req.body.data
  console.log(typeof userData.firstName)
  dbConnection.query(`INSERT INTO Pilots (FirstName, LastName, Email, QR) VALUES ('${userData.firstName}', '${userData.lastName}', '${userData.email}', '${userData.qr}')`, (err, result) => {
    if (!err) res.send({ message: 'ok' })
    else console.log(err)
  })
})

app.get( '/version', function( request, response ) {
     response.json( {
	  version: pkg.version
     } );
} );

console.log(
    chalk.yellow( '%s booted in %dms - %s://%s:%s' ),
    pkg.name,
    Date.now() - start,
    protocol,
    host,
    port
);

// Start a development HTTPS server.
if ( protocol === 'https' ) {
	const { execSync } = require( 'child_process' );
	const execOptions = { encoding: 'utf-8', windowsHide: true };
	let key = './certs/key.pem';
	let certificate = './certs/certificate.pem';

	if ( ! fs.existsSync( key ) || ! fs.existsSync( certificate ) ) {
		try {
			execSync( 'openssl version', execOptions );
			execSync(
				`openssl req -x509 -newkey rsa:2048 -keyout ./certs/key.tmp.pem -out ${ certificate } -days 365 -nodes -subj "/C=US/ST=Foo/L=Bar/O=Baz/CN=${host}"`,
				execOptions
			);
			execSync( `openssl rsa -in ./certs/key.tmp.pem -out ${ key }`, execOptions );
			execSync( 'rm ./certs/key.tmp.pem', execOptions );
		} catch ( error ) {
			console.error( error );
		}
	}

	const options = {
	   key: fs.readFileSync( key ),
     cert: fs.readFileSync( certificate ),
     passphrase : 'password'
  };

	server = require( 'https' ).createServer( options, app );

  // start MySQL connection
  // necessary SQL statement to execute for node connection in MySQL 8:
  // ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
  dbConnection = mysql.createConnection({
    host: host,
    user: config.mysql.user,
    socketPath: `/tmp/mysql.sock`, // <-- necessary for node it seems
    password: config.mysql.pwd,
    database: `FFC2`
  })
  dbConnection.connect((err)=>{
    if(!err) console.log(`mysql: connected as id ${dbConnection.threadId}`)
    else console.log(`error: ${err.stack}`)
  })

} else {
    server = require( 'http' ).createServer( app );
}

server.listen( { port, host }, function() {
    // Tell the parent process that Server has booted.
    sendBootStatus( 'ready' );
} );
