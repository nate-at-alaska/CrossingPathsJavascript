const FlightPathHandler = require('../src/flightPathHandler'); 

describe('FlightPathHandler', () => {
    let flightPathHandler;

    // Initialize FlightPathHandler before each test
    beforeEach(() => {
        flightPathHandler = new FlightPathHandler();
    });

    test('GivenExample1_ShouldReturnFalse', () => {
        // Arrange
        const input = 'NES';

        // Act
        const output = flightPathHandler.isFlightPlanCrossing(input);

        // Assert
        expect(output).toBe(false);
    });

    test('GivenExample2_ShouldReturnTrue', () => {
        // Arrange
        const input = 'NESWW';

        // Act
        const output = flightPathHandler.isFlightPlanCrossing(input);

        // Assert
        expect(output).toBe(true);
    });

    test('GivenLongUShapedPath_ShouldReturnFalse', () => {
        // Arrange
        const input = 'NNNNNNWSSSS';

        // Act
        const output = flightPathHandler.isFlightPlanCrossing(input);

        // Assert
        expect(output).toBe(false);
    });

    test('GivenLoop_ShouldReturnTrue', () => {
        // Arrange
        const input = 'NNNNNNWSSSSE';

        // Act
        const output = flightPathHandler.isFlightPlanCrossing(input);

        // Assert
        expect(output).toBe(true);
    });

    test('GivenLoopStartingSouth_ShouldReturnTrue', () => {
        // Arrange
        const input = 'SWNNNNNNWSSSSE';

        // Act
        const output = flightPathHandler.isFlightPlanCrossing(input);

        // Assert
        expect(output).toBe(true);
    });
});
