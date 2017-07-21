function domSearch(selector, isCaseSensitive) {
    let container = $(selector);

    let addDiv = ($('<div>').addClass('add-controls'));

    addDiv.append($('<label>').text('Enter text: ').append($('<input>')))
        .append($('<a>').addClass('button').css('dipslay', 'inline-block').text('Add'));

    container.append(addDiv);
}
