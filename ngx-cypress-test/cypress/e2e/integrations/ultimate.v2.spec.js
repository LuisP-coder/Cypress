/// <reference types="cypress" />

describe('Automate Ultimate QA Page Version 2', () => {
    beforeEach(() => {
        // Cypress starts out with a blank slate for each test
        // so we must tell it to visit our website with the `cy.visit()` command.
        // Since we want to visit the same URL at the start of all our tests,
        // we include it in our beforeEach function so that it runs before each test
        cy.visit('https://ultimateqa.com/automation')
    });

    it('Subscribe to blog and receive notifications', () => {
        cy.get('#subscribe-field-blog_subscription-2')
            .type('testemail@automation.qa');

        const subInput = '.wp-block-button__link';
        cy.get(subInput)
            .contains('Subscribe')
            .click();
    });

    it('Go to Java SDET Academt and verify', () => {
        // click on link
        cy.get('.menu-item-type-custom')
            .eq(1)
            .click();

        // Verify Url and title
        cy.url().should('include', '/java-sdet');
        cy.title().should('include', 'Java SDET Bootcamp')

        // Verify first section
        cy.get('.image__image')
            .should('be.visible');

        cy.get('h2')
            .children()
            .contains('Java Software Developers in Test (SDET)');

        cy.get('h5')
            .children()
            .find('span')
            .should('have.css', 'font-weight', '400');

        cy.get('h5')
            .find('span')
            .filter(':contains("SDET")');
        
        // verify second section
        cy.get('.block')
            .eq(2)
            .should('be.visible');

        cy.get('#form_submission_name')
            .eq(0)
            .type('Tito');
        
        cy.get('#form_submission_email')
            .eq(0)
            .type('testemail@automation.qa');

        cy.get('#form_submission_address_country')
            .eq(0)
            .select(1);
        
        cy.get('#form_submission_custom_2')
            .eq(0)
            .select(1);

        cy.get('#form_submission_custom_3')
            .eq(0)
            .select(3);

        cy.contains('Learn more!')
            .eq(0)
            .click();
    });
});
