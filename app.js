const fs = require('fs')

fs.writeFileSync('notes.txt', 'I am Yash.')

fs.appendFileSync('notes.txt', ' My hobby is playing cricket.')
