function validate() {

    //attach event listener when you change the status of the check box
    $('#company').on('change', showHideCompany);

    //attach event listener for clicking on the submit button
    $('#submit').on('click', function (ev) {
        //•	All buttons within a <form> automatically work as submit buttons, unless their type is manually assigned to something else,
        // in order to avoid reloading the page upon clicking the [Submit] button you can add the following code in the function that
        // handles the on click event:
        ev.preventDefault();

        //the variable that checks if the form is true
        let correctForm = true;

        //reg Ex
        let userNameRegEx = /^[A-Za-z0-9]{3,20}$/;
        let passwordRegEx = /^[A-Za-z0-9_]{5,15}$/;

        //this will check for string that has @ then have some text after and mandatory . that is escaped with \.
        let emailRegEx = /@.*\./;
        let companyNumberRegex = /^[1-9]{1}[0-9]{3}$/;


        //if the user name matches the regex remove the border color, else but border-color to be red and set correctForm to false
        if($('#username').val().match(userNameRegEx)){
            $('#username').css('border', 'none')
        }else{
            $('#username').css('border-color', 'red');
            correctForm = false;
        }

        if($('#password').val().match(passwordRegEx)){
            $('#password').css('border', 'none')
        }else{
            $('#password').css('border-color', 'red');
            correctForm = false;
        }

        if($('#email').val().match(emailRegEx)){
            $('#email').css('border', 'none')
        }else{
            $('#email').css('border-color', 'red')
            correctForm = false;
        }

        //verify the confirm password agains the passwordRegex and compare it to #password
        if($('#confirm-password').val().match(passwordRegEx) && $('#confirm-password').val().localeCompare($('#password').val()) == 0){
            $('#confirm-password').css('border', 'none');
        } else {
            $('#confirm-password').css('border-color', 'red');
            correctForm = false;
        }

        //if the checkbox is checked, verify the data for company number
        if($('#company').is(':checked')){
            if($('#companyNumber').val().match(companyNumberRegex)){
                $('#companyNumber').css('border', 'none');
            } else {
                $('#companyNumber').css('border-color', 'red');
                correctForm = false;
            }
        }

        //if all fields are correct display the #valid block, else, hide it
        if(correctForm){
            $('#valid').css('display', 'block')
        }else{
            $('#valid').css('display', 'none')
        }

    });

    //check if the checkbox is checked and display or hide #comanyInfo tag
    function showHideCompany() {
        if ($(this).is(':checked')) {
            $('#companyInfo').css('display', 'block');
        }
        else {
            $('#companyInfo').css('display', 'none');
        }
    }
}
