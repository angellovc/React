describe('Hello World Test', () => {

    test('Strings must be equals', () => {
        // 1) Arrange: 
        //Initialization
        const message = 'Hello World';
        // Stimulus
        const message2 = 'Hello World';
        // Behavoir
        expect(message).toBe(message2);
    })

})

