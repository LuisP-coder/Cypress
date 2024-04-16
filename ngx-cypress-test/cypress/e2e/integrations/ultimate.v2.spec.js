/// <reference types="cypress" />

describe('Automate Ultimate QA Page Version 2', () => {
    beforeEach(() => {
        cy.visit('https://ultimateqa.com/automation')
    });

    it('Go to Java SDET Academy and verify', () => {
        // click on link
        cy.get('.menu-item-type-custom')
            .eq(1)
            .click();

        // Verify Url and title
        cy.url().should('include', '/java-sdet');
        cy.title().should('include', 'Java SDET Bootcamp')

        // Verify first section
        cy.scrollTo(0, 250);
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
