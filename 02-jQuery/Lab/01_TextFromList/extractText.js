//A HTML page holding a list of items and an [Extract Text] button is given.
//Implement the extractText function which will be called when the button's onClick event is fired.


function extractText(){
    //$("ul#items li").css('background','yellow');

    //we get all items found by selector tag = ul, id = items and get all its <li>
    //then put all elements into array (they are still tags)
    //then for each <li> get the text and join them by ", "
    let items = $("ul#items li")
        .toArray()
        .map(li => li.textContent)
        .join(", ");
    $("#result").text(items);
}
