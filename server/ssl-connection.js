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

function sendBootStatus(status){
  if (!process.send) return
  process.send({ boot: status })
}

const app = express()

app.use(express.static(`${__dirname}/../dist`))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))
app.use(express.json({ limit: '50mb' }))

app.get(`/getDemonstrationType`, async (req, res) => {
  try {
    const type = await getDemonstrationType()
    res.send(type)
  }catch(err){
    console.log(err)
  }
})

app.post(`/consentFormSubmit`, (req, res) => {
  const data = req.body.data
  dbConnection.query(`UPDATE Pilots SET Consent = '${data}'`, (err, result) => {
    if (!err) res.send({ message: 'ok' })
    else console.log(err)
  })
})

app.post(`/demographicSurveySubmit`, async (req, res) => {
  console.log( req.body.data )
  const data = req.body.data
  try {
    await insertDemographicData(data)
    res.send({ message: 'ok' })
  }catch(err){
    console.log(err)
  }
})

app.post(`/decodeQR`, (req, res) => {
  console.log( req.body.data )
  const fileName = `output.png`
  const imageData = req.body.data
  const imageBuffer = new Buffer(imageData, 'base64') //console = <Buffer 75 ab 5a 8a ...
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

app.post(`/userDataSubmit`, async (req, res) => {
  const userData = req.body.data
  try {
    await insertPilots(userData)
    const id = await getPilotID(userData.qr)
    // const type = await getDemonstrationType()
    await insertInitialDemographicData(id)
    res.send({ message: 'ok' })
  }catch(err){
    console.log(err)
  }
})

app.get('/version', (request, response) => {
  response.json({
    version: pkg.version
  })
})

console.log(chalk.yellow( '%s booted in %dms - %s://%s:%s' ), pkg.name, Date.now() - start, protocol, host, port)

function insertPilots(userData) {
  return new Promise((resolve, reject) => {
    dbConnection.query(`INSERT INTO Pilots (FirstName, LastName, Email, QR, State) VALUES ('${userData.firstName}', '${userData.lastName}', '${userData.email}', '${userData.qr}', 'REGISTERED')`, (err, result) => {
      if (!err) {
        resolve()
      } else {
        reject(err)
      }
    })
  })
}

function getPilotID(qr) {
  return new Promise((resolve, reject) => {
    dbConnection.query(`SELECT PilotID FROM Pilots WHERE QR = '${qr}' LIMIT 0,1`, (err, result) => {
      if (!err) {
        resolve(result[0].PilotID)
      } else {
        reject(err)
      }
    })
  })
}

function insertInitialDemographicData(id) {
  return new Promise((resolve, reject) => {
    dbConnection.query(`INSERT INTO DemographicSurvey (PilotID) VALUES (${id})`, (err, result) => {
      if (!err) {
        resolve()
      } else {
        reject(err)
      }
    })
  })
}

function getDemonstrationType() {
  return new Promise((resolve, reject) => {
    dbConnection.query(`SELECT DemoType FROM DemonstrationType LIMIT 0,1`, (err, result) => {
      if (!err) {
        resolve(result[0].DemoType)
      }else{
        reject(err)
      }
    })
  })
}

function insertDemographicData(data) {
  return new Promise((resolve, reject) => {
    dbConnection.query(`
      UPDATE DemographicSurvey SET DemoType = '${data.DemoType}', Q1 = '${data.Q1}', Q2 = '${data.Q2}', Q2_SelfResponse = '${data.Q2_SelfResponse}', Q3 = '${data.Q3}', Q3_SelfResponse = '${data.Q3_SelfResponse}', Q4 = '${data.Q4}', Q5 = '${data.Q5}', Q6 = '${data.Q6}', Q7 = '${data.Q7}', Q8 = '${data.Q8}', Q9 = '${data.Q9}', Q10 = '${data.Q10}', Q11 = '${data.Q11}', Q12 = '${data.Q12}', Q12a = '${data.Q12a}', Q13 = '${data.Q13}', Q13a = '${data.Q13a}', Q13b = '${data.Q13b}', Q13c = '${data.Q13c}', Q13d = '${data.Q13d}', Q14 = '${data.Q14}', Q14a = '${data.Q14a}', Q14b = '${data.Q14b}', Q14c = '${data.Q14c}', Q15 = '${data.Q15}', Q16 = '${data.Q16}', Q17 = '${data.Q17}' WHERE PilotID = (SELECT PilotID FROM Pilots WHERE QR = '${data.qr}' LIMIT 0,1)`, (err, result) => {
      if (!err){
        resolve()
      }else{
        reject(err)
      }
    })
  })
}


// Start a development HTTPS server.
if (protocol === 'https'){
	const { execSync } = require('child_process')
	const execOptions = { encoding: 'utf-8', windowsHide: true }
	let key = './certs/key.pem'
	let certificate = './certs/certificate.pem'

	if (!fs.existsSync(key) || !fs.existsSync(certificate)){
		try {
			execSync('openssl version', execOptions)
			execSync(
				`openssl req -x509 -newkey rsa:2048 -keyout ./certs/key.tmp.pem -out ${ certificate } -days 365 -nodes -subj "/C=US/ST=Foo/L=Bar/O=Baz/CN=${host}"`,
				execOptions
			)
			execSync(`openssl rsa -in ./certs/key.tmp.pem -out ${ key }`, execOptions)
			execSync('rm ./certs/key.tmp.pem', execOptions)
		} catch (error){
			console.error(error)
		}
	}

	const options = {
	   key: fs.readFileSync(key),
     cert: fs.readFileSync(certificate),
     passphrase : 'password'
  }

	server = require('https').createServer(options, app)

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
}else{
  server = require('http').createServer(app)
}

server.listen({ port, host }, () => {
  // Tell the parent process that Server has booted.
  sendBootStatus('ready')
})
