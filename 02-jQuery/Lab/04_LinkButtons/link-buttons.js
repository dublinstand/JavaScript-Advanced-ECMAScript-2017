function attachEvents(){
    //create the event on click, calling the function buttonClicked
    $('a.button').on('click', buttonClicked);

    function buttonClicked(){
        //remove selected class in all elements that have .selected class
        $('.selected').removeClass('selected');

        //for the element we have clicked on (this) add class 'selected'
        //all buttons have class = 'button', this way we have the class button.selected
        $(this).addClass('selected');
    }
}
