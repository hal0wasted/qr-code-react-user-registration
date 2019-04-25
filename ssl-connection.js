const fs = require( 'fs' )
const express = require('express')
const chalk = require('chalk')
const bodyParser = require('body-parser')
const decodeQR = require('./decodeQR.js')

const pkg = require( './package.json' );

const start = Date.now(),
    protocol = process.env.PROTOCOL || 'https',
    port = process.env.PORT || '3000',
    host = process.env.HOST || '192.168.1.10';

let server;

function sendBootStatus( status ) {
     // don't send anything if we're not running in a fork
    if ( ! process.send ) {
	return;
    }
    process.send( { boot: status } );
}

const app = express();

app.use(express.static(`${__dirname}/dist`))
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}))
app.use(express.json({ limit: '50mb' }))

/*app.get('/', (request, response) => {
    response.send('Hello, world!');
});*/

app.post(`/imageOutput`, (req, res) => {
  console.log( req.body.data )
  const imageBuffer = new Buffer(req.body.data, 'base64'); //console = <Buffer 75 ab 5a 8a ...
  const fileName = `output.png`
  fs.writeFile(fileName, imageBuffer, (err) => {
    if (!err) {
      console.log(`successfully wrote ${fileName}`)
      decodeQR(fileName, res)
    }
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
				`openssl req -x509 -newkey rsa:2048 -keyout ./certs/key.tmp.pem -out ${ certificate } -days 365 -nodes -subj "/C=US/ST=Foo/L=Bar/O=Baz/CN=192.168.1.10"`,
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

} else {
    server = require( 'http' ).createServer( app );
}

server.listen( { port, host }, function() {
    // Tell the parent process that Server has booted.
    sendBootStatus( 'ready' );
} );
