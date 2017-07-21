function timer() {

    //all elements
    let secondsElement = $('#seconds');
    let minutesElement = $('#minutes');
    let hoursElement = $('#hours');

    let startBtn = $('#start-timer');
    let stopBtn = $('#stop-timer');

    //we have our interval as undefined, in order to check and instantiate it if it undefined
    let interval = undefined;
    let totalSeconds = 0;

    startBtn.on('click', function () {
        //if interval is undefined, assign to it setInterval with the method step to occur every 1 second
        if (!interval) {
            interval = setInterval(step, 1000);
        }
    });

    stopBtn.on('click', function () {
        //when click on the stop button, clear the interval and set it to undefined, so that it can be started again from start button
        clearInterval(interval);
        interval = undefined;
    });

    function step() {
        //add one to total seconds in the interval
        totalSeconds++;

        //assign text for seconds element, by modulus 60 we get values between 0-59
        secondsElement.text(formatTime(totalSeconds % 60));

        //get minutes by dividing the total seconds to 60
        //by modulus 60 we get minutes between 0 - 59
        let mins = totalSeconds / 60;
        minutesElement.text(formatTime(mins % 60));

        let hours = totalSeconds / 3600;
        hoursElement.text(formatTime(hours));
    }

    //function to format the time, by getting the lower value and removing the decimals
    function formatTime(num){
        return pad(Math.floor(num));
    }

    //function to add 0 if the number is below 10
    function pad(num) {
        if (num <= 9) {
            num = `0${num}`;
        }
        return num;
    }
}
