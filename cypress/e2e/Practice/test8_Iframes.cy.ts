import 'cypress-iframe'
describe('Iframes test cases', () => {


    it("First Tc: Iframes", () => {

        cy.visit('https://qavbox.github.io/demo/iframes/')

        //one way ( here traversing from iframe to its body to find element "0.contentDocument.body")
        cy.get('#Frame2').its('0.contentDocument.body').find('#frameinput').type('Iframe..')  //in "frame2"

        cy.get('#Frame2').its('0.contentDocument.body').find('#frameinputtext')  //in "frame2"

        // cy.get('#Frame2').its('0.contentDocument.body').contains('Category3').click()   //in "frame2"

        cy.get('#Frame1').its('0.contentDocument.body').find('#frametext')   //in "frame1"

    })

    it("Second Tc: Iframes custom commands", () => {

        cy.visit('https://qavbox.github.io/demo/iframes/')

        cy.getIframe_qavbox('#Frame2').find('#frameinput').type('Iframe..')  //in "frame2"

        cy.get('#input1').type('not in iframe')  //no need to switch back from iframe, can directly perform

    })


    it("Third Tc: Iframes with imports", () => {

        cy.visit('https://qavbox.github.io/demo/iframes/')

        cy.frameLoaded("#Frame2")
        cy.iframe("#Frame2").find('#frameinput').type('Iframe..')  //in "frame2"

        cy.frameLoaded("#Frame1")
        cy.iframe("#Frame1").contains('Category1').click()   //in "frame1"


    })

    it.only('Iframe Handling', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.frameLoaded("#courses-iframe")  //'.frameLoaded' used to load all the frames which have id='courses-iframe'

        //switching to 'iframe' then finding elements in iframe and performing the actions
        cy.iframe().find("a[href='mentorship']").eq(0).click()

        cy.frameLoaded("#courses-iframe")

        //to perform operation on iframe, again we need to use 'iframe()' 

        cy.iframe().find("ul").should('have.length', 21)


    })

})