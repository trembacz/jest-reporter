const player = require('play-sound')();
const fs = require('fs');
const path = require('path');
const win32 = (process.platform === 'win32') ? true : false;
const currentPath = path.resolve("./");
const scriptPath = path.resolve(__dirname);

class jestReporter {
	constructor(globalConfig, options) {

		this.failSound = options.failSound ? path.join(currentPath, options.failSound) : false || path.join(scriptPath, 'sounds/fail.wav');
		this.failText = options.failText ? path.join(currentPath, options.failText) : false || path.join(scriptPath, 'txt/fail.txt');
		this.skipFailSound = options.skipFailSound || false;
		this.skipFailText = options.skipFailText || false;

		this.passSound = options.passSound ? path.join(currentPath, options.passSound) : false || path.join(scriptPath, 'sounds/pass.wav');
		this.passText = options.passText ? path.join(currentPath, options.passText) : false || path.join(scriptPath, 'txt/pass.txt');
		this.skipPassSound = options.skipPassSound || false;
		this.skipPassText = options.skipPassText || false;

		this.stopOnFirstError = globalConfig.bail || false;
	}

	playSound(sound) {
		player.play(sound, function(err) {
			if (err && win32) {
				console.log('\n'+ err + '\nYou need "mplayer" installed on your system for it to work properly!.\n');
				return;
			} else if (err) {
				console.log(err);
			}
		});
	}

	showASCII(filePath) {
		fs.readFile(filePath, function(err, data) {
			if (err) { throw new err; }
			let fileText = data.toString();
			console.log(fileText)
		});
	}

	onRunComplete(contexts, results) {
		if (this.stopOnFirstError) {
			console.log('\nPlease set "bail" option to false\n');
			return;
		}
		if (!results.numTotalTests || !results.numFailedTests) {
			!this.skipPassSound && this.playSound(this.passSound);
			!this.skipPassText && this.showASCII(this.passText);
		} else {
			!this.skipFailSound && this.playSound(this.failSound);
			!this.skipFailText && this.showASCII(this.failText);
		}
	}
}

module.exports = jestReporter;
