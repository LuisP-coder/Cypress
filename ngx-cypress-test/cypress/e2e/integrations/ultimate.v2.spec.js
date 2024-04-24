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

      cy.get('.et_pb_text .et_pb_text_inner').eq(4).should('contain', `UltimateQA’s tests run hundreds of times faster with substantially greater accuracy by automatically identifying misconfigured lines of codes in parallel rather than sequentially.`)
        
      cy.get('.et_pb_image_wrap img').eq(2).should('be.visible');
      
    });
});
