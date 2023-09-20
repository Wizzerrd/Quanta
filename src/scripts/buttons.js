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

    const modal = document.getElementById('modal');

    // Show the modal
    function showModal() {
        modal.style.display = 'block';
    }
    
    // Hide the modal
    function hideModal() {
        modal.style.display = 'none';
    }

    // Add an event listener to the show button
    document.getElementById('help-me').addEventListener('click', showModal);
    
    // // Add an event listener to the close button
    document.getElementById('overlay').addEventListener('click', hideModal);
    document.getElementById('close-button').addEventListener('click', hideModal);
    
}

export default checkButtonListeners;