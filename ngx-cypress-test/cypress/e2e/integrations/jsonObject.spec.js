/// <reference types="cypress" />

describe('JSON Objects', () => {
    it('JSON objects', () => {
        cy.openHomePage();

        const simpleObject = { "key": "value", "key2": "value2" };
        
        const simpleArrayOfValues = [ "one", "two", "three" ];

        const arrayOfObjects = [{"key": "value"}, {"key2": "value2"}, {"key3": "value3"}];

        const typesOfData = { "string": "this is a string", "number": 10};

        const mix = {
            "FirstName": "Luis",
            "LastName": "Doe",
            "Age": 23,
            "Students": [
                {
                    "firstName": "Sara",
                    "lastName": "Connor"
                },
                {
                    "firstName": "John",
                    "lastName": "Deere"
                }
            ]
        };

        console.log(simpleObject.key2);
    });
});