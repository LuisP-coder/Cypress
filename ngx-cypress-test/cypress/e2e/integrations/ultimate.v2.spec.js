/// <reference types="cypress" />

describe('Automate Ultimate QA Page Version 2', () => {
    beforeEach(() => {
        cy.visit('https://ultimateqa.com/')
    });

    it('Go to Java SDET Academy and verify', () => {
        // Verify Main Heading
        cy.get('.et_pb_module_heading').eq(0).contains('Push Higher Quality Software To Market Faster');

        // Verify picture
        cy.get('.et_pb_image_wrap img').eq(0).should('be.visible');

        // Verify second section
        cy.get('.et_pb_image_wrap img').eq(1).should('be.visible');

       
        // // verify second section
        // cy.get('.block')
        //     .eq(2)
        //     .should('be.visible');

        // cy.get('#form_submission_name')
        //     .eq(0)
        //     .type('Tito');
        
        // cy.get('#form_submission_email')
        //     .eq(0)
        //     .type('testemail@automation.qa');

        // cy.get('#form_submission_address_country')
        //     .eq(0)
        //     .select(1);
        
        // cy.get('#form_submission_custom_2')
        //     .eq(0)
        //     .select(1);

        // cy.get('#form_submission_custom_3')
        //     .eq(0)
        //     .select(3);

        // cy.contains('Learn more!')
        //     .eq(0)
        //     .click();
    });
});
