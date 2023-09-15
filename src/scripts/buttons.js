function checkButtonListeners(){

    // Boundary settings in Engine file

    // Event Listeners for click settings
    var clickMagSlider = document.getElementById('click-mag-slider');
    var clickMagLabel = document.getElementById('click-mag-value');

    clickMagSlider.addEventListener('change', ()=>{
        clickMagLabel.innerHTML = clickMagSlider.value;
    })

    // Event listeners for gravity settings
    var gravTog = document.getElementById('gravity-toggle');
    var gravBool = false;

    gravTog.addEventListener('click', ()=>{
        if(gravBool){
            gravBool = false;
            gravTog.style.backgroundColor = 'red';
            gravTog.innerHTML = 'OFF';
        } else {
            gravBool = true;
            gravTog.style.backgroundColor = 'green';
            gravTog.innerHTML = 'ON'
        }
    })

    
}

export default checkButtonListeners;