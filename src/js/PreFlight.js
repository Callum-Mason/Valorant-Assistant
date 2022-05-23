var fs = require('@tauri-apps/api/fs');
// var ps = require('ps-node');
let path = require('@tauri-apps/api/path');

async function CheckLockFile() {
	//check if the lockfile exists and return true or false
	let lockFile = await path.localDataDir() + 'Riot Games\\Riot Client\\Config\\lockfile';
	await fs.readTextFile(lockFile).then(async (data) => {
		if (data) {
			return true;
		} else {
			return false;
		}
	}).catch(err => {
		console.log(err);
	});
}

//check if the riot client is running
async function CheckRiotClient() {
	//check if the Riot Client is running and return true or false




}






module.exports = {
	CheckLockFile,
	CheckRiotClient
};