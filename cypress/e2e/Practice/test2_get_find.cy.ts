describe('cy.get().find()', () => {

    it('First Tc: Enter some cy.get() options(object)', () => {
        cy.visit('https://qavbox.github.io/demo/webtable/')

        //we can use all options of get() inside find() as well except "withinSubject"

        //Disabling logs in Cypress Test runner 
        cy.get('#form1').find('#table01', { log: false })
        cy.get('#form1').find('#table01 tbody tr', { timeout: 2000 }).should('have.length', '3') 

    })

    it('Second Tc: Validating cy.get().find() includeShadowDom', () => {
        cy.visit('https://qavbox.github.io/demo/shadowDOM/')

        // Prevent failure from JS errors in the app
        Cypress.on('uncaught:exception', () => false)

        // Target input inside open shadow root
        cy.get('#form1').find('[type="text"]', { includeShadowDom: true }).type('hello')


    })

})