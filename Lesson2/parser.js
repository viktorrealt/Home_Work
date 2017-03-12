var fs = require ('fs');
var async = require('async');
var colors = require('colors');
var argv = require('minimist')(process.argv.slice(2));

var table = new Table({
    head: ['INPUT', 'RESULT']
  , colWidths: [100, 200]
});

var text = fs.readFile(argv['file'] || "results.txt", function(error, data) {
    if (error) {
        console.log("Ошибка при чтении файла\n".red + error);
        process.exit(1);
    }

    data = data.toString().split('\n');
    if (data.length == 0) console.log("Файл результатов пуст".red);
    data.pop();
    let wins = 0;
    let loses = 0;

    for (let i = 0; i < data.length; i++)
	{
		if (data[i] == '+') wins++;
		else if (data[i] == '-') loses++;
	}
	console.log('All games: '.yellow + data.length.toString().yellow + "\n");
	console.log('wins: '.green + wins.toString().green + '\n');
	console.log('loses: '.red + loses.toString().red);
	console.log('percent of wins: '.green + (100/data.length*wins).toFixed(2) + '%');
	});