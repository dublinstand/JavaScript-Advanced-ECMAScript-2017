//Write a JS program that keeps a string inside it’s context and can execute different commands that modify or output the string on the console.
//append(str) – add str to the end of the internal string
//removeStart(n) – remove the first n characters from the string, n is an integer
//removeEnd(n) – remove the last n characters from the string, n is an integer
//print – output the stored string to the console

function processCommands(commands){

    //this is our IIFE function
    let commandProcessor = (function(){
        //this is our variable
        let text = '';

        return {
            //in brackets are our variables, and append is our function which is actually an object
            //this is the returned value which is our text and is stored
            append: (newText) => text += newText,
            removeStart: (count) => text = text.slice(count),
            removeEnd: (count) => text = text.slice(0, text.length - count),
            print: () => console.log(text)
        }
    })();

    //We can access the function properties for commandProcessor like an object and pass the arguments
    //commandProcessor.append('Test');
    //commandProcessor.print()

    //loop through all commands
    for(let cmd of commands){
        [cmdName, args] = cmd.split(' ');
        //with [] we pass the object name, and with args we pass the arguments like, textName, count
        commandProcessor[cmdName](args);
    }
}

processCommands(['append hello',
        'append again',
        'removeStart 3',
        'removeEnd 4',
        'print']);

processCommands(['append 123',
        'append 45',
        'removeStart 2',
        'removeEnd 1',
        'print']
);
