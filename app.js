// const ut=require('./utils.js');
// const validator = require('validator');
// const chalk = require('chalk');
const yarg = require('yargs');
const notes = require ('./notes.js');
// const name = 'vandana';

// sum = ut(3,4)
// a = assign();
// console.log(sum);
// var s = chalk.bold.green('success!')
// console.log(assign());
// console.log(chalk.bold.green('success!'));
// console.log(chalk.inverse(s));

yarg.command({
    command:'add',
    describe:'adding a note',
    builder: {
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        // console.log( argv.title+'  '+argv.body);
        notes.addNotes(argv.title,argv.body)
    }
}).command({
    command:'remove',
    describe:'removing a note',
    handler(argv){
        // console.log("removing a note");

        notes.removeNotes(argv.title)
    }
}).command({
    command:'list',
    describe:'listing all notes',
    handler: ()=>{
        // console.log("listing all notes");
        notes.listNotes()
    }
}).command({
    command:'read',
    describe:'reading a note',
    handler: (argv)=>{
        // console.log("reading a note");
        notes.readNotes(argv.title)
    }
}).argv;