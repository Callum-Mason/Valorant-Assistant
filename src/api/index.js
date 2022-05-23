var {
	getLockFile,
	// getTokens
} = require('./GetTokens');


// var lockFileName = "";
// var lockFilepid = "";
// var lockFilePort = "";
// var lockFilePassword = "";
// var lockFileprotocol = "";

async function setup() {

	// console.log(getLockFile());


	await getLockFile().then(function (lockfiledata) {


		// console.log(lockfiledata);

		const User = 'riot';
		const LockFilePassword = lockfiledata.lockFilePassword;
		const LockFilePort = lockfiledata.lockFilePort;
		// const LockFilepid = lockfiledata.pid;
		// const LockFileprotocol = lockfiledata.protocol;
		// const LockFileName = lockfiledata.name;
		let accessToken = ""; //Gets Set
		let PUUID = ""; //Gets Set
		let entitlements = ""; //Gets Set
		let Region = "eu";
		let ClientVersion = "release-04.09-3-708238";
		let ClientPlatform = "";

		localStorage.setItem(
			"Valorant",
			JSON.stringify({
				LockFilePort: LockFilePort,
				LockFileuser: User,
				LockFilePassword: LockFilePassword,
				accessToken: accessToken,
				PUUID: PUUID,
				entitlements: entitlements,
				Region: Region,
				ClientVersion: ClientVersion,
				ClientPlatform: ClientPlatform,
			})
		);



	}).catch(function (error) {
		// console.log("Error code: " + error.code);
		console.log(error);
	})


}

module.exports = setup;