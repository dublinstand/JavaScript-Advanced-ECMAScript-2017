

function attachGradientEvents(){
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', gradientMove);
    gradient.addEventListener('mouseout', gradientOut);

    function gradientMove(event){
        //we get the offsetX coordinate from the event listener, and divide it to the target frame width - 1
        let power = event.offsetX / (event.target.clientWidth - 1);
        power = Math.trunc(power * 100);
        document.getElementById('result').textContent = power + "%";
    }

    function gradientOut(event){
        document.getElementById('result').textContent = "";
    }
}