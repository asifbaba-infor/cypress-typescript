/// <reference types="cypress" />

// -- This is a parent command -- (for 'test1_SauceDemo_CustCmds')
Cypress.Commands.add('sd_login', (email: string, password: string) => { //cy.sd_login('email','password')
    cy.get('#user-name').type(email)
    cy.get('#password').type(password)
    cy.get('#login-button').click()
})

// -- This is a child command --(works in both ways based on element provided)
Cypress.Commands.add('qavbox_getLinks', { prevSubject: 'optional' }, (subject, options) => {

    if (subject) {         //cy.get('someElement).qavbox_getLinks()
        // If subject is provided, find the links within the subject element
        cy.wrap(subject).find('a');
    }

    else {
        // If no subject is provided, find all 'a' elements in the document
        cy.get('a');   //cy.qavbox_getLinks()
    }

})


// -- This is a child command, gets Text from 'text' or 'val' to avoid remembering whether it is text or val
Cypress.Commands.add('sd_getText', { prevSubject: 'element' }, (subject, options) => {

    cy.wrap(subject).invoke('text').then((text) => {
        if (text.trim() == '') {
            cy.wrap(subject).invoke('val')
        }
        else {
            cy.wrap(subject).invoke('text')
        }
    })


})

// -- This will overwrite an existing command -- (here writing logic for The Newly entered text will replace the previous text)
Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    const clearedText = `{selectall}{backspace}${text}` //selects all 'Previous text' and do 'backspace' then ebter the 'Text' again
    options = {...options, log:false}
    return originalFn(element, clearedText, options)
})

// -- This is a parent command -- (for 'test8_Iframes')
Cypress.Commands.add('getIframe_qavbox', (iFrameLocator: string) => {
    cy.get(iFrameLocator).its('0.contentDocument.body').should('be.visible').then(cy.wrap)
})








// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }