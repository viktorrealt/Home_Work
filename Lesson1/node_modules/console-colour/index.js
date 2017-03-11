function color(string) {
	'use strict';
	var x = [
		'bold',
		'underline',
		'strikethrough',
		'italic',
		'inverse',
		'grey',
		'black',
		'yellow',
		'red',
		'green',
		'blue',
		'white',
		'cyan',
		'magenta',
		'greyBG',
		'blackBG',
		'yellowBG',
		'redBG',
		'greenBG',
		'blueBG',
		'whiteBG',
		'cyanBG',
		'magentaBG'];

	var styles = {
		'bold': ['\x1B[1m', '\x1B[22m'],
		'italic': ['\x1B[3m', '\x1B[23m'],
		'underline': ['\x1B[4m', '\x1B[24m'],
		'inverse': ['\x1B[7m', '\x1B[27m'],
		'strikethrough': ['\x1B[9m', '\x1B[29m'],
		//text colors
		//grayscale
		'white': ['\x1B[37m', '\x1B[39m'],
		'grey': ['\x1B[90m', '\x1B[39m'],
		'black': ['\x1B[30m', '\x1B[39m'],
		//colors
		'blue': ['\x1B[34m', '\x1B[39m'],
		'cyan': ['\x1B[36m', '\x1B[39m'],
		'green': ['\x1B[32m', '\x1B[39m'],
		'magenta': ['\x1B[35m', '\x1B[39m'],
		'red': ['\x1B[31m', '\x1B[39m'],
		'yellow': ['\x1B[33m', '\x1B[39m'],
		//background colors
		//grayscale
		'whiteBG': ['\x1B[47m', '\x1B[49m'],
		'greyBG': ['\x1B[49;5;8m', '\x1B[49m'],
		'blackBG': ['\x1B[40m', '\x1B[49m'],
		//colors
		'blueBG': ['\x1B[44m', '\x1B[49m'],
		'cyanBG': ['\x1B[46m', '\x1B[49m'],
		'greenBG': ['\x1B[42m', '\x1B[49m'],
		'magentaBG': ['\x1B[45m', '\x1B[49m'],
		'redBG': ['\x1B[41m', '\x1B[49m'],
		'yellowBG': ['\x1B[43m', '\x1B[49m']
	};

//	var exports = {};

	function addProperty(color, callback) {
		exports[color] = function (v) {
			return callback.apply(v);
		};
		if (string) {
			Object.defineProperty(string.prototype, color, {
				get: callback
			});
		}
	}

	function stylize(v, style) {
		return styles[style][0] + v + styles[style][1];
	}

	function sequencer(map) {
		return function () {
			if (!this) {
				return '';
			}
			var exploded = this.split("");
			exploded = exploded.map(map);
			return exploded.join("");
		};
	}

	x.forEach(function (style) {
		addProperty(style, function () {
			return stylize(this, style);
		});
	});

	addProperty('stripColors', function () {
		return ("" + this).replace(/\x1B\[\d+m/g, '');
	});

	var rainbowMap = (function () {
		var rainbowColors = ['red', 'yellow', 'green', 'blue', 'magenta']; //RoY G BiV
		return function (letter, i) {
			if (letter === " ") {
				return letter;
			} else {
				return stylize(letter, rainbowColors[i++ % rainbowColors.length]);
			}
		};
	})();

	addProperty('rainbow', sequencer(rainbowMap));
	return exports;
}

module.exports = color;
module.exports.color = color();
