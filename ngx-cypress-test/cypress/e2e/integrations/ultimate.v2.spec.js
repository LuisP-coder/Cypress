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

    it('Verify 3 steps away section', () => {
          // Check Title
          cy.get('.et_pb_module_heading').eq(6).contains(`You're just 3 steps away from the UltimateQA testing solution`);
  
          // Verify Boxes 
          cy.get('.et_pb_image_wrap').eq(10).should('be.visible');
          cy.get('.et_pb_blurb_description > p').eq(6).contains(`Book a Free Session to uncover tailored solutions for your QA challenges. Let’s explore together!`);
  
          cy.get('.et_pb_image_wrap').eq(11).should('be.visible');
          cy.get('.et_pb_blurb_description > p').eq(7).contains(`Your Tailored Solution, Your Price – transparent, comprehensive, and crafted just for you. No surprises, just clarity.`);
  
          cy.get('.et_pb_image_wrap').eq(12).should('be.visible');
          cy.get('.et_pb_blurb_description > p').eq(8).contains(`Implement and experience the transformation. Quality software to market faster – precision and speed redefined. Your success is our priority.`);
      
          // Verify button
          cy.get('.et_pb_button_1').click();
      });
});
