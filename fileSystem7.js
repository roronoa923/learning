const fs = require("node:fs")

const readStream = fs.createReadStream("./bigfile.txt")
const writeStream = fs.createWriteStream("./copy.txt")

readStream.pipe(writeStream)