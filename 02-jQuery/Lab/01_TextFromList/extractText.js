//A HTML page holding a list of items and an [Extract Text] button is given.
//Implement the extractText function which will be called when the button's onClick event is fired.


function extractText(){
    //$("ul#items li").css('background','yellow');

    let items = $("ul#items li")
        .toArray()
        .map(li => li.textContent)
        .join(", ");
    $("#result").text(items);
}
