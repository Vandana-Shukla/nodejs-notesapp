const fs= require('fs');
const chalk = require('chalk');

const getNotes = ()=>{
    return 'Your notes...';
}
const addNotes = (title,body)=>{
    const notes= loadNotes();
    const dupnotes = notes.filter((note)=>note.title === title);
    const isDupNote = notes.find((note)=>note.title === title);

    debugger //in chrome, add url: chrome://inspect

    if (!isDupNote){
        notes.push({
            title:title,
            body:body
        })
    
        saveNotes(notes);
        console.log(chalk.green("New note added!"));
    }else{
        console.log(chalk.red("Notes already exists!"));
    }
}

const removeNotes = (title)=>{
    const notes = loadNotes();
    const remnotes = notes.filter((note)=>note.title === title)

    const remainingnotes = notes.filter((note)=>note.title != title)

    if(remnotes.length === 0){
        console.log(chalk.red("note not found!"));
    }else{
        saveNotes(remainingnotes);
        console.log(chalk.green("note removed!"));
    }
}

const listNotes = ()=>{
    const notes = loadNotes();
    console.log(chalk.blue.inverse('Your notes:'));
    notes.forEach(element => {
        console.log(chalk.yellow(element.title));
    });
}

const readNotes = (title)=>{
    const notes = loadNotes();
    const findNote = notes.find((note)=> note.title === title);
    // console.log(findNote.title);

    if(findNote){
        console.log(chalk.inverse(findNote.title));
        console.log(findNote.body);
    }else{
        console.log(chalk.red('Note not found!'));
    }

}

const saveNotes = (notes)=>{
    const dj = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dj)
}

const loadNotes = ()=>{
    try{
        const db = fs.readFileSync('notes.json');
        const dj = db.toString();
        return JSON.parse(dj);
    }
    catch(e){
        return []
    }
}

module.exports = {
    getNotes : getNotes,
    addNotes : addNotes,
    removeNotes : removeNotes,
    listNotes:listNotes,
    readNotes:readNotes
}