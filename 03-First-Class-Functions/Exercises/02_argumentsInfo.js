//Write a function that displays information about the arguments which are passed to it – type and value –
// and a summary about the number of each type.
//Input
//You will receive a series of arguments passed to your function.
//Output
//Log to the console the type and value of each argument passed in the following format:
//{argument type}: {argument value}
//Place each argument description on a new line. At the end print a tally with counts for each type
// in descending order, each on a new line in format {type} = {count} If two types have the same count,
// use order of appearance. Don’t print anything for types that do not appear in the list of arguments.

function argumentsInfo(){

    let summary = [];

    //javascript holds all arguments passed in their ARGUMENTS variable that we can loop through
    for(let arg of arguments){
        let type = typeof arg;
        console.log(type + ": " + arg);

        //if there is no record in the summary object with the type passed as key, create one with key = type, val = 1
        if(!summary[type]){
            summary[type] = 1;
        }
        //increase it by one
        else{
            summary[type]++;
        }
    }

    //Since object properties cannot be sorted, and even if they could, different JavaScript implementations iterate
    //the order differently, we need to transfer the information to an array of key-value pairs.
    //We could use a Map instead of an object, but this cannot be sorted either, so we’ll end up with an array in the end anyway

    let sortedSummary = [];

    //we push the values as an array - the type, and the value in the summary for that type

    for (let type in summary){
        sortedSummary.push([type, summary[type]]);
    }

    //Note we are pushing an array with two values to the array which needs to be sorted.
    //Later when we implement a sorting function, we’ll use the second value of the key-value pair – the number of occurrences.
    //All we need to do after the array is sorted is to output the information in the correct format.


    //compare the count property (which is the second element in the array) and compare it to the next
    //if b[1] - a[1] is less than zero, b goes before a and we order them in descending order - 3 , 2 , 1
    //then for each element we print each property of the array
    sortedSummary.sort((a, b) => b[1] - a[1]).forEach(x => console.log(x[0] + ' = ' + x[1]));
}

argumentsInfo( 'cat','day', 33,  42,'boy',function () { console.log('Hello world!'); });