/// <reference types="cypress" />

describe('Weather App', () => {
    beforeEach(() => {
        cy.visit('https://luisp-coder.github.io/WeatherApp/index.html');
    });

    it('Verify Search Bar', () => {
        cy.get('.fa-location-dot').should('be.visible');
        cy.get('input')
           .parent()
           .find('input[type=text]');

        cy.get('input').click().type("San Francisco");
        cy.get('.fa-magnifying-glass').click();
    });

    it('Verify Weather', () => {
        cy.get('input').click().type("San Francisco");
        cy.get('.fa-magnifying-glass').click();

        cy.get('img').should('be.visible');
        cy.get('.temperature').contains('°C');

        cy.get('.humidity').find('.fa-water').should('be.visible');
        cy.get('.humid-level').contains('Humidity');

        cy.get('.wind').find('.fa-wind').should('be.visible');
        cy.get('.wind-speed').contains('Wind Speed');
    });
});