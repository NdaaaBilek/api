const fs = require('fs')

global.creator = 'Ndaaa' 
global.apikey = ["Ndaa", "Ndaakey", "Key"]
global.aikey = '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'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
