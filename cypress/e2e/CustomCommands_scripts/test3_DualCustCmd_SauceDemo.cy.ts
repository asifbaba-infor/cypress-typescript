describe('Dual Custom command', () => {

    it('First Tc: Sauce Demo getting value and text by invoking "val","text" methods', () => {

        cy.visit('https://www.saucedemo.com/v1/')

        cy.get('#user-name').type('standard_user')

        cy.get('#user-name').invoke('val').then((value: any) => {
            cy.log(value) //printing 'val'
            expect(value).to.equal('standard_user')
        })

        cy.get('.login_password h4').invoke('text').then((text: any) => {
            cy.log(text)  //printing 'text'
            expect(text).to.equal('Password for all users:')
        })

    })

    it('Second Tc: Sauce Demo getting both value and text by only "sd_getText()" custom command', () => {

        cy.visit('https://www.saucedemo.com/v1/')

        cy.get('#user-name').type('standard_user')

        cy.get('#user-name').sd_getText().then((value: any) => {
            cy.log(value) //printing 'val' by using "sd_getText()"
            expect(value).to.equal('standard_user')
        })

        cy.get('.login_password h4').sd_getText().then((text: any) => {
            cy.log(text)  //printing 'text' by using same "sd_getText()"
            expect(text).to.equal('Password for all users:')
        })

    })


})