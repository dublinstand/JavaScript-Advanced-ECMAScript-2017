//An HTML page holds a list of towns, a search box and a [Search] button.
//Implement the search function to bold the items from the list which include the text from the search box.
//Also print the amount of items the current search matches in the format "<matches> matches found."

function searchText(){

    let items = $("#towns li");
    let searchText = $("#searchText").val();
    let matches = 0;

    //for each item in our variable we do the comparison function
    items.each( function() {

        //if the current item's text has the search text in it, bold it and have the matcher +1
        //$(this) means current element we are, and we can use jQuery
        //for the search you can have also $(this).text().indexOf(searchText) != -1
        //it will return -1 if no match is found in the text compared to searchText

        if($(this).text().includes(searchText)){

            //make this tag bold
            $(this).css('font-weight', 'bold');
            matches++;
        }
        else{
            //remove the bold
            $(this).css('font-weight','');
        }
    });

    //printing the output
    let output = matches + " matches found";
    $('#result').text(output);

    //clear our search field
    $("#searchText").val("");
}