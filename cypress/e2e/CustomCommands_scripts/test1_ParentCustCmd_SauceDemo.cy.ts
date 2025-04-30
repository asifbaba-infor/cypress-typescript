describe('Custom command Parent', () => {

    it('First Tc: Sauce Demo login', () => {

        cy.visit('https://www.saucedemo.com/v1/')

        cy.get('#user-name').type('standard_user')

        cy.get('#password').type('secret_sauce')

        cy.get('#login-button').click()

        cy.get('title').should('have.text', 'Swag Labs')

    })

    it('Second Tc: Sauce Demo Custom commands login Standard user', () => {

        cy.visit('https://www.saucedemo.com/v1/')

        cy.sd_login('standard_user', 'secret_sauce')

        cy.get('title').should('have.text', 'Swag Labs')

    })

    it('Third Tc: Sauce Demo Custom commands login locked out user', () => {

        cy.visit('https://www.saucedemo.com/v1/')

        cy.sd_login('locked_out_user', 'secret_sauce')

        cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')

    })

    it('Fourth Tc: Sauce Demo Custom commands login problem_user', () => {

        cy.visit('https://www.saucedemo.com/v1/')

        cy.sd_login('problem_user', 'secret_sauce')

        cy.get('title').should('have.text', 'Swag Labs')

    })

    it('Fifth Tc: Sauce Demo Custom commands login performance_glitch_user', () => {

        cy.visit('https://www.saucedemo.com/v1/')

        cy.sd_login('performance_glitch_user', 'secret_sauce')

        cy.get('title', { timeout: 1000 }).should('have.text', 'Swag Labs')  //increasing time because of performance

    })

})