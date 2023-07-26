/// <reference types="cypress" />

describe('Automate Ultimate QA Page', () => {
    beforeEach(() => {
        cy.visit('https://ultimateqa.com/automation')
    });

    it('Subscribe to blog and receive notifications', () => {
        cy.get('#subscribe-field-blog_subscription-2')
          .type('testemail@automation.qa');

        const subInput = '.wp-block-button__link';
        cy.get(subInput)
          .contains('Subscribe').click();
    });

    it('Professional Services Page', () => {
        // Click on Professional Services Page
        cy.get('.menu-item')
            .eq(0)
            .click();

        // Get Header
        cy.get('.et_pb_module_header')
            .eq(0)
            .contains(`World's Best Test Automation Solutions`);

        // Get SubTitle
        cy.get('.et_pb_header_content_wrapper')
            .find('p')
            .should('contain', `Unparalleled test automation solutions and training for your organization and it’s employees.`)

        // Click on free consultation
        cy.get('.et_pb_button')
            .eq(0)
            .click();

        // Check if we are in the footer
        cy.get('.et_pb_section_5')
            .find('#contact')
            .should('be.visible');

        // Fill out Form
        cy.get('#et_pb_contact_name_0')
            .type('Tito');

        cy.get('#et_pb_contact_email_0')
            .type('testemail@automation.qa');

        cy.get('#et_pb_contact_companyname_0')
            .type('Dad Company');

        cy.get('#et_pb_contact_message_0')
            .type('Just messing around with this');

        cy.get('.et_pb_contact_captcha')
            .type('19')

        cy.contains('send message')
            .click();

        // Confirmation
        cy.get('.et-pb-contact-message')
            .should('contain', 'We have much appreciated the message and will contact you soon!')

        // Verifying the Middle of the Page
        cy.get('.et_pb_text_inner')
            .eq(2)
            .contains('Leading the World In Automated Testing');

      // Verify Images are shown
        cy.get('.et_pb_image_wrap')
            .eq(10)
            .find('.jetpack-lazy-image')
            .should('be.visible');
    });
});
