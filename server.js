// const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const app = express()
const port = 80

app.use(express.static(`${__dirname}/dist`))
app.use(bodyParser.urlencoded({
  limit: '50mb',
  extended: true
}))
app.use(express.json({ limit: '50mb' }))

app.post(`/imageOutput`, (req, res) => {
  console.log( req.body.data )
  const imageBuffer = new Buffer(req.body.data, 'base64'); //console = <Buffer 75 ab 5a 8a ...
  const fileName = `test.jpg`
  fs.writeFile(fileName, imageBuffer, (err) => {
    if (!err) {
      console.log(`successfully wrote ${fileName}`)
    }
  })
})

app.listen(port, () => { console.log(`listening on ${port}`) })
