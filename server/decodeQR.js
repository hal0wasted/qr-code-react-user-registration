const jsQR = require('jsqr')
const fs = require('fs')
const PNGReader = require('./PNGReader')

function convertPNGtoByteArray(pngData) {
  const data = new Uint8ClampedArray(pngData.width * pngData.height * 4)
  for (let y = 0; y < pngData.height; y++) {
    for (let x = 0; x < pngData.width; x++) {
      const pixelData = pngData.getPixel(x, y)
      data[(y * pngData.width + x) * 4 + 0] = pixelData[0]
      data[(y * pngData.width + x) * 4 + 1] = pixelData[1]
      data[(y * pngData.width + x) * 4 + 2] = pixelData[2]
      data[(y * pngData.width + x) * 4 + 3] = pixelData[3]
    }
  }
  return data
}

function decodeQR(filename, res){
  fs.readFile(filename, (err, buffer) => {
    const pngReader = new PNGReader(buffer)
    pngReader.parse(function(err, pngData) {
      if (err) throw err;
      const pixelArray = convertPNGtoByteArray(pngData)
      const qrData = jsQR(pixelArray, pngData.width, pngData.height)
      if (qrData && qrData.data !== null){
        console.log( qrData.data )
        if(!res.headersSent) res.send( qrData.data )
      }else{
        console.log('not a valid QR code')
      }
    })
  })
}


module.exports = decodeQR
