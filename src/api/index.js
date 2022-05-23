var {
	// GetTokens,
	getLockFile
} = require('./GetTokens');

// var lockFileName = "";
// var lockFilepid = "";
// var lockFilePort = "";
// var lockFilePassword = "";
// var lockFileprotocol = "";

async function setup() {

	// console.log(getLockFile());


	await getLockFile().then(async (lockfiledata) => {


		console.log(lockfiledata);


		const User = 'riot';
		const LockFilePassword = lockfiledata.lockFilePassword;
		const LockFilePort = lockfiledata.lockFilePort;
		// const LockFilepid = data.pid;
		// const LockFileprotocol = data.protocol;
		// const LockFileName = data.name;
		let accessToken = ""; //Gets Set
		let PUUID = ""; //Gets Set
		let entitlements = ""; //Gets Set
		let Region = "eu";
		let ClientVersion = "release-04.09-3-708238";
		let ClientPlatform = "";



		// var AccessTokenConfig = {
		// 	method: "get",
		// 	url: `https://127.0.0.1:${LockFilePort}/entitlements/v1/token`,
		// 	auth: {
		// 		username: User,
		// 		password: LockFilePassword,
		// 	},
		// };

		// var PUUIDConfig = {
		// 	method: "get",
		// 	url: `https://127.0.0.1:${LockFilePort}/chat/v1/session`,
		// 	auth: {
		// 		username: User,
		// 		password: LockFilePassword,
		// 	},
		// };

		// let configEntitlement = {};

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


		// GetTokens(AccessTokenConfig)
		// 	.then(function (accessTokendata) {
		// 		let accessToken = accessTokendata.accessToken;
		// 		console.log('Access Token: ' + accessToken);
		// 		var Valorant = JSON.parse(localStorage.getItem('Valorant'));
		// 		Valorant.accessToken = accessToken;
		// 		localStorage.setItem('config', JSON.stringify(Valorant));


		// 		configEntitlement = {
		// 			method: "post",
		// 			url: "https://entitlements.auth.riotgames.com/api/token/v1",
		// 			headers: {
		// 				"Content-Type": "application/json",
		// 				Authorization: `Bearer ${accessToken}`,
		// 			},
		// 		};
		// 	})
		// 	.catch(function (error) {
		// 		console.log("Error code: " + error.code);
		// 	})
		// 	.then(function () {
		// 		GetTokens(PUUIDConfig)
		// 			.then(function (puuiddata) {
		// 				PUUID = puuiddata.puuid;
		// 				// console.log('PUUID: ' + PUUID);
		// 				var Valorant = JSON.parse(localStorage.getItem('Valorant'));
		// 				Valorant.PUUID = PUUID;
		// 				localStorage.setItem('config', JSON.stringify(Valorant));


		// 			})
		// 			.catch(function (error) {
		// 				console.log("Error code: " + error.code);
		// 			});
		// 	})
		// 	.catch(function (error) {
		// 		console.log("Error code: " + error.code);
		// 	})
		// 	.then(function () {
		// 		GetTokens(configEntitlement)
		// 			.then(function (entitlementsdata) {
		// 				entitlements = entitlementsdata.entitlements_token;
		// 				console.log('Entitlements: ' + entitlements);
		// 				var Valorant = JSON.parse(localStorage.getItem('Valorant'));
		// 				Valorant.entitlements = entitlements;
		// 				localStorage.setItem('config', JSON.stringify(Valorant));
		// 			})
		// 			.catch(function (error) {
		// 				console.log("Error code: " + error.code);
		// 			});
		// 	})
		// 	.catch(function (error) {
		// 		console.log("Error code: " + error.code);
		// 	});
	}).catch(function (error) {
		// console.log("Error code: " + error.code);
		console.log(error);
	});


}

module.exports = setup;