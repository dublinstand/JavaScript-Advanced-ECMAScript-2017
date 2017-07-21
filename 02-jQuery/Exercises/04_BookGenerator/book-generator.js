//Your function will receive 4 parameters - a string value representing a selector (for example "#wrapper" or ".root"),
// a string value representing the title of the book, a string value representing the author of the book and a number representing
// the ISBN of the book. After the book is created it should be attached to the passed in selector.
//The number in the Id of the containing div should be incremented by one for each successive book created
// (i.e. first book should have id = "book1", second id = "book2" and so on…).
// The title, author and ISBN should be paragraphs with a class equal to their respective role - class="title" for the title paragraph,
// class="author" for the author paragraph and class="isbn" for the ISBN paragraph. A book should also contain 2 buttons –
// [Select] and [Deselect], when the [Select] button is pressed the border of the div element should be set to "2px solid blue".
// When the [Deselect] button is pressed it should be set to "none".


//in order to have an auto incremented id with book + id we need to use You can use what is known as an IIFE (Immediately Invoked Function Expression)
// to declare and instantly execute a function that will keep the id variable in its scope. This way you will receive the inner function and
// for it the variable id will be shared between all calls, essentially becoming like a static variable for the function
//the name of the variable createBook need to be the same as the name in the <script> of the function window.onload
//the id is 1 and then is assigned to the <div> with book in front and is auto incremented
//this inner function is returned
//(function first() {
//      code
//      return function (arguments) {
//      code }
//} ());
let createBook = (function createBooks(){
    let id = 1;

    return function (selector, title, author, isbn) {
        let mainParagraph = $(selector);
        isbn = Number(isbn);

        let newBook = $('<div>');
        let titleParagraph = $('<p>');
        let authorParagraph = $('<p>');
        let isbnParagraph = $('<p>');

        let selectBtn = $('<button>Select</button>');
        let deselectBtn = $('<button>Deselect</button>');

        newBook.attr('id', 'book' + id);
        id++;

        titleParagraph.addClass('title');
        titleParagraph.text(title);

        authorParagraph.addClass('author');
        authorParagraph.text(author);

        isbnParagraph.addClass('isbn');
        isbnParagraph.text(isbn);

        selectBtn.on('click', function () {
            let div = $(this).parent();
            div.css('border', '2px solid blue');
        });

        deselectBtn.on('click', function () {
            let div = $(this).parent();
            div.css('border', '');
        });

        newBook.append(titleParagraph)
            .append(authorParagraph)
            .append(isbnParagraph)
            .append(selectBtn)
            .append(deselectBtn);

        mainParagraph.append(newBook);
    }
}());

