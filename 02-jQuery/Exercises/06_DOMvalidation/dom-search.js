function domSearch(selector, isCaseSensitive) {
    let container = $(selector);

    let addDiv = ($('<div>').addClass('add-controls'));

    addDiv.append($('<label>').text('Enter text: ').append($('<input>')))
        .append($('<a>').addClass('button').text('Add').on('click', addItem));
    container.append(addDiv);

    let searchDiv = ($('<div>').addClass('search-controls'));
    //on input of the field call search function
    searchDiv.append($('<label>').text('Search: ').append($('<input>').on('input', search)));
    container.append(searchDiv);

    //we can create the whole tag, by passing opening and closing tags and all we need inside, like class, id, text, etc..
    let results = ($('<div class="result-controls"></div>'));
    let ul = ($('<ul class="result-controls"></ul>'));
    results.append(ul);
    container.append(results);


    //adding an item
    function addItem() {
        let elementText = document.querySelector('.add-controls label input').value;

        let li = ($('<li>').addClass('list-item'));
        //on click, delete the item
        let a = ($('<a>').addClass('button').text('X')).on('click', deleteItem);

        //create a <strong> text in the <li> element
        let text = ($('<strong>').text(elementText));
        li.append(a)
            .append(text);

        ul.append(li);
    }

    //removing an item
    function deleteItem() {
        //get the parent and remove it
        let li = $(this).parent();
        li.remove();
    }

    function search() {
        //get all <li> with .list-item className
        let listItems = ($('.list-item'));

        //get the text from this element (it is the search field
        let textToMatch = ($(this).val());

        listItems.each((index, li) => matches(li, textToMatch));
    }

    function matches(li, textToMatch) {
        //show all items first
        $(li).css('display', 'block');

        if (isCaseSensitive) {
            //get the strong tag in the <li> element, get the text and use indexOf against textToMatch
            //if it returns -1, then the text is not contained in the element, otherwise it will return
            //the number of the string where it is found (starting with)
            if ($(li).find('strong').text().indexOf(textToMatch) == -1) {
                $(li).css('display', 'none');
            }
        }
        else {
            //put all values to lower case
            if ($(li).find('strong').text().toLowerCase().indexOf(textToMatch.toLowerCase()) == -1) {
                $(li).css('display', 'none');
            }
        }
    }
}
