/// <reference types="cypress" />
import "cypress-real-events/support";

describe('Automating portolio', () => {
    beforeEach(() => {
        cy.visit('https://luisp-coder.github.io/PortfolioV2/');
    });

    it('Verify nav bar', () => {
        cy.get('.name').contains("Luis Perez");

        cy.get('.list-item').children().contains('a');
        cy.get('.nav-links').eq(0).contains('About');
        cy.get('.nav-links').eq(1).contains('Projects');
        cy.get('.nav-links').eq(2).contains('Contact');
    });

    it('Verify intro', () => {
        cy.get('.home').should('be.visible');
        cy.get('#fake-pic').should('be.visible');

        cy.get('#wave').contains(`Hey👋! I'm Luis`);
        cy.get('#small-intro').contains(`A Quality Assurance Engineer based in SF Bay Area.`);

        cy.get('.skills').children().eq(0).trigger('mouseover');
        cy.get('.skills').children().eq(1).trigger('mouseover');
        cy.get('.skills').children().eq(2).trigger('mouseover');
    });

    it('Verify Prijects section', () => {
        cy.get('#projects').should('be.visible');

        cy.get('#present-project').contains('Favorite Projects');
        
        cy.get('.project-inner').eq(0).should('contain', 'Weather App');
        cy.get('.figcaption').eq(0).contains('App includes current temperature in Celsius, wind speed, and humidity.');

        cy.get('.project-inner').eq(1).should('contain', 'Score Keeper');
        cy.get('.figcaption').eq(1).contains('Count the score of your game using this app. Goes up to 11 points.');

        cy.get('.project-inner').eq(2).should('contain', 'Calculator');
        cy.get('.figcaption').eq(2).contains('Simple calculator app using JS.');

        cy.get('.project-inner').eq(3).should('contain', 'Green Energy');
        cy.get('.figcaption').eq(3).contains('Green Energy Mock Website discussing the use of Solar Panels.');

        cy.get('.project-card').eq(0).trigger('mouseover');
        cy.get('.project-card').eq(1).trigger('mouseover');

        cy.get('#about-title').contains('Born and raised in SF Bay Area');
        cy.get('#background').contains('I enrolled in the YearUp program which led to an internship at Momentive.ai, and eventually landed a Full-Time roll as a Quality Assurance Engineer.');

        cy.get('#resume').trigger('mouseover');
        cy.get('.portrait').should('be.visible');

        cy.get('.side-one').children().contains(' I can be reached via email via the form on the right or directly at luiseperez16@gmail.com.');
    });
});