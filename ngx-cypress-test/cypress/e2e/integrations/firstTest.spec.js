/// <reference types="cypress" />

describe('Our first sutie', () => {
    it('first test', () => {
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        // by Tag name
        cy.get('input');
        // by Id
        cy.get('#inputEmail');
        // by class
        cy.get('.input-full-width');
        // by Attribute name
        cy.get('[placeholder]');
        // by Attribute name and value
        cy.get('[placeholder="Email"]');
        // by class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]');
        // by tag name and attribute with value
        cy.get('input[placeholder="Email"]');
        // by two different attributes
        cy.get('[placeholder="Email"][type="email"]');
        // by tag name, Attribute with value, Id and Class name
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width');
        // Recommended way by Cypress
        cy.get('[data-cy="imputEmail1"]');
    });

    it('second test', () => {
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        cy.get('[data-cy="signInButton"]');
        cy.contains('Sign in');
        cy.contains('[status="warning"]','Sign in');

        cy.get('#inputEmail3')
        .parents('form')
        .find('button')
        .should('contain', 'Sign in')
        .parents('form')
        .find('nb-checkbox')
        .click();

        cy.contains('nb-card', 'Horizontal form').find('[type="email"]');
    });

    it('then and only methods', () => {
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        // cy.contains('nb-card', 'Usign the Grid').find('[for="inputEmail1"]').should('contain', 'Email');
        // cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password');
        // cy.contains('nb-card', 'Basic Form').find('[for="exampleInputEmail1"]').should('contain', 'Email address');
        // cy.contains('nb-card', 'Basic Form').find('[for="exampleInputPassword"]').should('contain', 'Password');

        cy.contains('nb-card', 'Using the Grid').then( firstForm => {
            const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text();
            const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text();
            expect(emailLabelFirst).to.equal('Email');
            expect(passwordLabelFirst).to.equal('Password');

            cy.contains('nb-card', 'Basic form').then( secondForm => {
                const passwordSecondText = secondForm.find('[for="exampleInputPassword1"]').text();
                expect(passwordLabelFirst).to.equal(passwordSecondText);

                cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain', 'Password');
            });
        });
    
    });

    it('invoke command', () => {
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();
        
        //1
        cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address');
        //2
        cy.get('[for="exampleInputEmail1"]').then( label => {
            expect(label.text()).to.equal('Email address');
        });
        //3
        cy.get('[for="exampleInputEmail1"]').invoke('text').then( text => {
            expect(text).to.equal('Email address');
        });

        cy.contains('nb-card', 'Basic form')
            .find('nb-checkbox')
            .click()
            .find('.custom-checkbox')
            .invoke('attr', 'class')
            .should('contain', 'checked')
            .then(classValue => {
                expect(classValue).to.contain('checked')
            });
    });

    it('assert Property', () => {
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Datepicker').click();

        cy.contains('nb-card', 'Common Datepicker').find('input').then( input => {
            cy.wrap(input).click();
            cy.get('nb-calendar-day-picker').contains('27').click();
            cy.wrap(input).invoke('prop', 'value').should('contain', 'Jun 27, 2023');
        });
    });

    it('radio button', () => {
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();

        cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then( radioButtons => {
            cy.wrap(radioButtons)
                .first()
                .check({force: true})
                .should('be.checked');

            cy.wrap(radioButtons)
                .eq(1)
                .check({force: true});
            
            cy.wrap(radioButtons)
                .eq(0)
                .should('not.be.checked');

            cy.wrap(radioButtons)
                .eq(2)
                .should('be.disabled');
        });
    });

    it('checkbox', () => {
        cy.visit('/');
        cy.contains('Modal & Overlays').click();
        cy.contains('Toastr').click();

        cy.get('[type="checkbox"]').eq(0).click({force: true});
        cy.get('[type="checkbox"]').eq(1).check({force: true});
    });

    it('lists and dropdown', () => {
        cy.visit('/');

        cy.get('nav nb-select').click();
        cy.get('.options-list').contains('Dark').click();
        cy.get('nav nb-select').should('contain', 'Dark');
        cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(34, 43, 69)');

        cy.get('nav nb-select').then( dropdown => {
            cy.wrap(dropdown).click();
            cy.get('.options-list  nb-option').each( (listItem, index) => {
                const itemText = listItem.text().trim();
                const colors = {
                    "Light": "rgb(255, 255, 255)",
                    "Dark": "rgb(34, 43, 69)",
                    "Cosmic": "rgb(50, 50, 89)",
                    "Coporate": "rgb(255, 255, 255)"
                }

                cy.wrap(listItem).click();
                cy.wrap(dropdown).should('contain', itemText);
                cy.get('nb-layout-header nav').should('have.css', 'background-color', colors[itemText])
                if(index < 3){
                    cy.wrap(dropdown).click();
                }
            });
        });
    });

    it('Web Tables', () => {
        cy.visit('/');
        cy.contains('Tables & Data').click();
        cy.contains('Smart Table').click();

        cy.get('tbody').contains('tr', 'Larry').then( tableRow => {
            cy.wrap(tableRow).find('.nb-edit').click();
            cy.wrap(tableRow).find('[placeholder="Age"]').type('25');
            cy.wrap(tableRow).find('.nb-checkmark').click();
            cy.wrap(tableRow).find('td').eq(6).should('contain', '25');
        });

        // 2
        cy.get('thead').find('.nb-plus').click();
        cy.get('thead').find('tr').eq(2).then( tableRow => {
            cy.wrap(tableRow).find('[placeholder="First Name"]').type('Luis');
            cy.wrap(tableRow).find('[placeholder="Last Name"]').type('Doe');
            cy.wrap(tableRow).find('.nb-checkmark').click();
        });
        cy.get('tbody tr').first().find('td').then( tableColumns => {
            cy.wrap(tableColumns).eq(2).should('contain', 'Luis');
            cy.wrap(tableColumns).eq(3).should('contain', 'Doe');
        });
    });

    it.only('extra test case', () => {
        cy.visit('/');
        cy.contains('Extra Components').click();
        cy.contains('Calendar').click();
        
        // Selects first Calendar card
        cy.contains('nb-card', 'Jul 10, 2023')
            .contains('Jul 2023').click();
        
        // Selects year
        cy.get('nb-calendar-picker').find('nb-calendar-picker-row').eq(2).then( tableRow => {
            cy.wrap(tableRow).find('.ng-star-inserted').eq(2).click();
        });
        // Selects Month
        cy.get('nb-calendar-picker').find('nb-calendar-picker-row').eq(1).then( tableRow => {
            cy.wrap(tableRow).find('.ng-star-inserted').eq(0).click();
        });
        // Selects Days
        cy.get('nb-calendar-picker').find('nb-calendar-picker-row').eq(2).then( tableRow => {
            cy.wrap(tableRow).find('.ng-star-inserted').eq(1).click();
        });
    });

    it('tooltip', () => {
        cy.visit('/');
        cy.contains('Modal & Overlays').click();
        cy.contains('Tooltip').click();

        cy.contains('nb-card', 'Colored Tooltips')
            .contains('Default').click();
        cy.get('nb-tooltip').should('contain', 'This is a tooltip');
    });

    it('dialog box', () => {
        cy.visit('/');
        cy.contains('Tables & Data').click();
        cy.contains('Smart Table').click();

        //1
        cy.get('tbody tr').first().find('.nb-trash').click();
        cy.on('window:confirm', (confirm) => {
            expect(confirm).to.equal('Are you sure you want to delete?');
        });

        //2
        const stub = cy.stub();
        cy.on('window:confirm', stub);
        cy.get('tbody tr').first().find('.nb-trash').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?');
        });
    });
});