/// <reference types="cypress"/>

describe('Automating ACME Fake Bank', () => {
    it('Log in Page', () => {
        cy.visit('https://demo.applitools.com/');
        cy.get('.auth-header');
        cy.contains('Login Form');

        // Username and password
        cy.get('#username').click().type('Broke_N00b');
        cy.get('[placeholder="Enter your password"]').click().type('NoobMa4ter');

        // Lower Buttons
        cy.get('.form-check-label').click();
        cy.get('.buttons-w')
            .contains('a', 'Sign in')
            .click();
    });

    it('Account Overview page', () => {
        // Customer Info
        cy.visit('https://demo.applitools.com/app.html');
        cy.get('.logged-user-i')
            .eq(1)
            .find('.logged-user-info-w')
            .should('contain', 'Jack Gomez');

        cy.get('.logged-user-i')
            .find('.logged-user-info-w')
            .should('contain', 'Customer');
    });

    it('Card Types and Lending', () => {
        //Card Types
        cy.visit('https://demo.applitools.com/app.html');
        cy.get('.main-menu')
            .find('.sub-header')
            .should('contain', 'Card types');
        cy.get('.has-sub-menu').eq(0).should('be.visible');
        cy.get('.has-sub-menu').eq(1).should('be.visible');

        //Card Lending
        cy.get('.main-menu')
            .find('.sub-header').eq(1)
            .should('contain', 'Lending');

        cy.get('.has-sub-menu')
            .should('be.visible')
            .and('contain', 'Loans')
            .eq(1);

        cy.get('.has-sub-menu')
            .should('be.visible')
            .and('contain', 'Mortgages')
            .eq(1);
    });

    it('Upper body', () => {
        cy.visit('https://demo.applitools.com/app.html');

        cy.get('.compact');
        cy.get('.btn-primary')
            .should('contain', 'Add Account')
            .click();
        cy.get('.btn-success')
            .should('contain', 'Make Payment')
            .click();
        cy.get('#time').should('contain', 'Your nearest branch closes in: 30m 5s');
    });

    it('Lower Body', () => {
        cy.visit('https://demo.applitools.com/app.html');

        cy.get('.element-wrapper').eq(1);
        // Checks some elements
        cy.get('tbody tr').find('td').then( tableColumns => {
            cy.wrap(tableColumns).eq(0).should('contain', 'Complete');
            cy.wrap(tableColumns).eq(2).should('be.visible');
            cy.wrap(tableColumns).eq(3).should('contain', 'Restaurant / Cafe').and('be.visible');
            cy.wrap(tableColumns).eq(4).should('contain', '+ 1,250 USD').and('be.visible');
        });
    });
});