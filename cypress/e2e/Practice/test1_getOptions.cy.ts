describe('cy.get() Options', () => {

    it('First Tc: Enter some cy.get() options(object)', () => {
        cy.visit('https://qavbox.github.io/demo/signup/')

        //logs are by default visible here in Cypress Test runner 
        cy.get('#username').type("User A")

        //Disabling logs in Cypress Test runner 
        cy.get('#email', { log: false }).type("Usera@gmail.com")

        //By default Cypress timeout=4000, set here to '1000'[it should find the element within 1 sec]
        cy.get('#tel', { timeout: 1000 }).type("35445400050")

        //Identifying Element withinSubject scope of document provided
        cy.get('#fax', { withinSubject: document.getElementById('container') }).should('be.disabled')


        cy.get('[value="Home"]').click()
    })

    it('Second Tc: Validating cy.get() options(object)', () => {
        cy.visit('https://qavbox.github.io/demo/delay/')

        //Disabling logs in Cypress Test runner 
        cy.get('[name="commit"]', { log: false }).click()
        cy.get('#two', { timeout: 5000 }).should('have.text', 'I am here!') //here the text appears only after 5sec, and we are asserting it


        cy.get('[name="commit1"]', { log: false }).click()
        cy.get('#delay', { timeout: 5000 }).should('have.text', 'I appeared after 5 sec') //here the text appears only after 5sec, and we are asserting it

    })

    it('Third Tc: Validating cy.get() multiple elements', () => {
        cy.visit('https://qavbox.github.io/demo/listitems/')

        //"#idname~tagname" (gives all the child nodes which lies in same level of #id)
        cy.get('#mygroup~p').should('have.length', 4)
        cy.get('#mygroup~p').eq(3).should('have.text', ' Paragraph 4 ') //validation of 4th text

        //"#idname+tagname" (gives the immmediate child node(only one) which lies in same level of #id)
        cy.get('#mygroup+p').should('have.length', 1)

    })

    it('Fourth Tc: Validating cy.get() includeShadowDom', () => {
        cy.visit('https://qavbox.github.io/demo/shadowDOM/')

        // Prevent failure from JS errors in the app
        Cypress.on('uncaught:exception', () => false)

        // Target input inside open shadow root
        cy.get('[type="text"]', { includeShadowDom: true }).type('hello')


    })

    it('Fourth Tc: Validating cy.get() shadow()', () => {
        cy.visit('https://qavbox.github.io/demo/shadowDOM/')

        // Prevent failure from JS errors in the app
        Cypress.on('uncaught:exception', () => false)

        // Target input inside open shadow root
        cy.get('my-open-component')
            .shadow()
            .find('input[type="text"]')
            .type('hello')

    })

})