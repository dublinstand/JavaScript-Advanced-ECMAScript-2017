function attachEvents() {
    $('#showTownsButton').on('click', show);
    $('#items li').on('click', select);

    function select() {
        //the clicked <li> is our this
        let li = $(this);

        //we assign an attribute data-selected = true, when the element is clicked and give background
        //in our if part we verify that we have an attribute data-selected, and if yes,
        //-- remove the background with css('background', '') and remove the attribute 'data-selected'
        if (li.attr('data-selected')) {
            li.css('background', '');
            li.removeAttr('data-selected');
        }
        else {
            li.css('background', '#DDD');
            li.attr('data-selected', 'true');
        }
    }

    function show() {

        //get an element with id = items and get all of its <li> and pass an attribute for the <li data-selected='true>
        //to verify that the item is selected
        //put them to Array
        //for each element get the text with map()
        //join the array by ", "
        //this way we get the text of all <li>
        let itemsText = $('#items li[data-selected=true]')
            .toArray()
            .map(li => li.textContent)
            .join(', ');

        //enter the text from itemsText to the tag with id = selectedTowns
        $('#selectedTowns').text(itemsText);
    }
}

