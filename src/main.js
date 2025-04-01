const FlightPathHandler = require('./flightPathHandler'); // Import the FlightPathHandler class

// Create a readline interface to handle user input
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Prompt the user for input
readline.question('Input Flight Path: ', (input) => {
    // Ensure input is a valid string
    const flightPath = input || '';

    // Use the FlightPathHandler to determine if the flight plan crosses paths
    const handler = new FlightPathHandler();
    let output;

    try {
        output = handler.isFlightPlanCrossing(flightPath);
    } catch (error) {
        output = error.message; // Handle the NotImplementedException
    }

    // Output the result
    console.log(`Crash Prediction: ${output}`);

    // Close the readline interface
    readline.close();
});