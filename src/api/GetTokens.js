var axios = require('axios');
// var fs = require('fs');
var fs = require('@tauri-apps/api/fs');

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';




async function getTokens(config) {
	try {
		const response = await axios(config);
		return response.data;
	} catch (error) {
		console.log('Error code: '+error.code);
		// console.log(error);
	}
}

async function getLockFile(){
	//save the content of the following file - %LocalAppData%\Riot Games\Riot Client\Config\lockfile
	let lockFile = process.env['LOCALAPPDATA'] + '\\Riot Games\\Riot Client\\Config\\lockfile';

	await fs.readTextFile(lockFile).then(async (data) => {
		let lockFileContentArray = data.split(':');
		let lockFileName = lockFileContentArray[0];
		let lockFilepid = lockFileContentArray[1];
		let lockFilePort = lockFileContentArray[2];
		let lockFilePassword = lockFileContentArray[3];
		let lockFileprotocol = lockFileContentArray[4];
		console.log(lockFileName);

		return {
			lockFileName: lockFileName,
			lockFilepid: lockFilepid,
			lockFilePort: lockFilePort,
			lockFilePassword: lockFilePassword,
			lockFileprotocol: lockFileprotocol,
		}
	}).catch(err => {
		console.log(err);
	});



}

// console.log(getLockFile());


module.exports = {getTokens, getLockFile};