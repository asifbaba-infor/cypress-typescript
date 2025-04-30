describe('Custom command Child', () => {

    it('First Tc: Fetching links in qavbox website', () => {

        cy.visit('https://qavbox.github.io/demo/links/')

        //fetching all links directly in whole website
        //here 'Multi Window' is not a link type so the length is "8"
        cy.get('a').should('have.length', 8)

        //fetching all links, only inside [id="regform"]
        cy.get('#regform').find('a').should('have.length', 5)

    })

    it('Second Tc: Fetching links using Child custom commands in qavbox website', () => {

        cy.visit('https://qavbox.github.io/demo/links/')

        //fetching all links directly in whole website
        //here 'Multi Window' is not a link type so the length is "8"
        cy.qavbox_getLinks().should('have.length', 8)

        //fetching all links, only inside [id="regform"]
        cy.get('#regform').qavbox_getLinks().should('have.length', 5)

    })

})