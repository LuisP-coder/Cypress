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

       
      
    });
});
