/// <reference types="cypress" />

describe('Automate dummy website', () => {
    beforeEach(() => {
        cy.visit('https://magento.softwaretestingboard.com/');
    });

    it(`Go to what's new page`, () => {
        cy.get('.level-top')
          .contains(`What's New`)
          .click();

        cy.contains(`What's New`);

        cy.get('.column.main')
          .should('be.visible');

        cy.get('.block-promo.new-performance')
          .children()
          .should('have.attr', 'src', 'https://magento.softwaretestingboard.com/pub/media/wysiwyg/new/new-performance.jpg');

        cy.get('.content')
          .eq(3)
          .children()
          .contains('Whatever day brings');

        cy.get('.block-promo.new-eco')
          .children()
          .should('have.attr', 'src', 'https://magento.softwaretestingboard.com/pub/media/wysiwyg/new/new-eco.jpg');
      
        cy.get('.content')
          .eq(4)
          .children()
          .contains('A sense of renewal');

        cy.get('.content-heading')
          .contains(`Luma's Latest`);

        cy.get('.block.widget.block-products-list.grid')
          .should('be.visible');

        cy.get('.swatch-option.text')
          .eq(1)
          .click();
    });
    // Search Bar
    it('Test search bar functionality', () => {
        cy.get('.input-text')
          .click()
          .type('Shirts for men');

        cy.get('.action.search', { timeout: 12000 })
          .should('be.visible')
          .click();

        cy.get('.base')
          .contains('Shirts for men');
    });

    it('Click on Men section', () => {
        cy.get('.ui-menu-icon.ui-icon-carat-1-e')
          .eq(3)
          .click();

        cy.get('.items')
          .eq(1)
          .children('li');

        cy.get('.item')
          .eq(3)
          .click();
    });
});
