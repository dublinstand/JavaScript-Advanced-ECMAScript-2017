//Using a closure, create an inner object to process list commands. The commands supported should be the following:
//•	add <string> - adds the following string in an inner collection.
//•	remove <string> - removes all occurrences of the supplied <string> from the inner collection.
//•	print - prints all elements of the inner collection joined by ", ".
//Input
//The input will come as an array of strings - each string represents a command to be executed from the command execution engine.
//Output
//For every print command - you should print on the console the inner collection joined by ", "


function listProcessor(commands){
    let commandProcessor = (function(){
        let list = [];

        //here are our functions that are returned to commandProcessor
        return {
            add: (newItem) => list.push(newItem),

            //filter and return all elements that are different then the item given (remove the item)
            remove: (item) => list = list.filter(x => x != item),

            print: () => console.log(list)
        }
    })();

    for(let cmd of commands){
        let [action, data] = cmd.split(' ');
        commandProcessor[action](data);
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add gosho', 'add pesho', 'remove pesho','print']);


