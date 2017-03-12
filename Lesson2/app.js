var fs = require ('fs');
const readline = require('readline');
var number = Math.round(Math.random(0,1)); //Generate a random int number
var colors = require('colors');
var argv = require('minimist')(process.argv.slice(2));

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
 });
console.log('Введи 0 или 1 '.yellow + '\n' + 'или exit для завершения игры \n'.yellow);
rl.on('line', (line) => {
	if (line == 0 || line == 1)
	{
        if (line == number)
        {
            fs.appendFile(argv['file'] || 'results.txt', "+" + "\n", function(err) {
                if (err) {
                    throw err;
                    console.log("We have a problem".red);
                }
            });
            console.log('Вы победили!'.green);
            
        }
        else {
            fs.appendFile(argv['file'] || 'results.txt', "-" + "\n", function(err) {
                if (err) {
                    throw err;
                    console.log("We have a problem");
                }
            });
            console.log('Вы проиграли!'.red);
            

        }
	}

	else if (line == 'exit')
	{
        rl.close();
		exit();
	}
	else{
		console.log("Введено число отличающееся от 0 или 1".red);
		
	}
});

function exit() {
	console.log('Выход из игры.'.red);
	process.exit();
}
