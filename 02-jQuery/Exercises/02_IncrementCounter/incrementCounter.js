function increment(wrapper){

    let mainElement = $(wrapper);

    let textArea = $('<textArea>');
    textArea.addClass('counter');
    textArea.attr('disabled', true);
    textArea.val(0);

    mainElement.append(textArea);

    let incrementBtn = $('<button>');
    incrementBtn.addClass('btn');
    incrementBtn.attr('id', 'incrementBtn');
    incrementBtn.text('Increment');
    incrementBtn.on('click', increment);

    mainElement.append(incrementBtn);

    let addBtn = $('<button>');
    addBtn.addClass('btn');
    addBtn.attr('id', 'addBtn');
    addBtn.text('Add');
    addBtn.on('click', createElement);

    mainElement.append(addBtn);

    let ul = $('<ul>');
    ul.addClass('results');

    mainElement.append(ul);



    function increment(){
        textArea.val(Number(textArea.val()) + 1);

    }

    function createElement(){
        let newItem = $('<li>');
        newItem.text(textArea.val());

        ul.append(newItem);
    }

}
