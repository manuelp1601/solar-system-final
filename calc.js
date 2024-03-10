function calculateWeight() {
    var weightInPounds = parseFloat(document.getElementById('user-weight').value);
    if (isNaN(weightInPounds) || weightInPounds <= 0) {
        alert('Please enter a valid weight');
        document.getElementById('result').innerHTML = ''; // Clear previous result
        return;
    }

    // Convert weight from pounds to kilograms
    var weightInKilograms = weightInPounds * 0.453592;

    var planetSelector = document.getElementById('planet-selector');
    var planetName = planetSelector.options[planetSelector.selectedIndex].text;
    console.log('Selected Planet:', planetName);


    var gravityFactor = getGravityFactor(planetName);
    var result = weightInKilograms * gravityFactor;
    console.log(`Gravity factor: ${gravityFactor}`);
    console.log(`Resulting weight: ${result}`);

    // Display the result in pounds
    var resultInPounds = result / 0.453592;
    document.getElementById('result').innerHTML = `Your weight on ${planetName} would be ${resultInPounds.toFixed(2)} pounds.`;
}



function getGravityFactor(planetName) {
    console.log('Getting gravity factor for:', planetName); 
    // planet gravitational pull
    switch(planetName) {
        case 'Mercury' : return 0.38;
        case 'Venus' : return 0.904;
        case 'Earth' : return 1;
        case 'Mars' : return 0.376;
        case 'Jupiter' : return 2.528;
        case 'Saturn' : return 1.065;
        case 'Uranus' : return 0.886;
        case 'Neptune' : return 1.14;

        default:
            console.log('No match found for planet name:', planetName); // Debug log
            return null;
    }
}