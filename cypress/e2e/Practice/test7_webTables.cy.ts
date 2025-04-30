import { forEach } from "cypress/types/lodash"

describe('Web Tables test cases', () => {


    it("First Tc: Web Table header data", () => {

        cy.visit('https://qavbox.github.io/demo/webtable/')

        //assertion of no.of columns
        cy.get('#table01 thead tr th').should('have.length', 4)

        //one way: fetching text of the columns
        cy.get('#table01 thead tr th').each(($el) => {
            cy.wrap($el).invoke('text').then((columnText) => {
                cy.log(columnText)
            })
        })

        //another way: fetching text of the columns(by the jqueryObject itself)
        cy.get('#table01 thead tr th').each(($el) => {
            cy.log($el.text())
        })

    })

    it("Second Tc: Web Table Row data", () => {

        cy.visit('https://qavbox.github.io/demo/webtable/')

        //assertion of no.of rows in table
        cy.get('#table01 tbody tr').should('have.length', 3)

        //assertion of no.of data present in all rows in table1
        cy.get('#table01 tbody tr td').should('have.length', 15)


        //one way: fetching text of the specific row(1st row) [tr:nth-child(1)]
        cy.get('#table01 tbody tr:nth-child(1) td').each(($el) => {
            cy.log($el.text())
        })

        //second way: fetching text of the specific row(1st row)
        cy.get('#table01 tbody tr').eq(0).within(() => {  //"eq{0} 1st row"
            cy.get('td').each(($el) => {
                if ($el.text() == 'Bugzilla') {
                    cy.log("Bugzilla text found")
                }
                cy.log($el.text())
            })
        })

        //another way: fetching text of the specific row when we don't know the exact row  (Dynamic)
        cy.get('#table01 tbody tr').each(($row) => {
            cy.wrap($row).within(() => {
                cy.get('td').each(($col) => {
                    cy.log($col.text())
                })
            })
        })

        //fetching text of the each row in single text
        cy.get('#table01 tbody tr').each(($el) => {
            cy.log($el.text())
        })

        //fetching text of all the rows(by the jqueryObject itself)
        cy.get('#table01 tbody tr td').each(($el) => {
            cy.log($el.text())
        })

    })

    it("Third Tc: Web Table performing delete actions on dynamic data", () => {

        cy.visit('https://qavbox.github.io/demo/webtable/')

        //One way: performing delete actions on dynamic data by finding checkbox and delete btn
        cy.get('#table01 tbody tr').each(($row) => {
            cy.wrap($row).within(() => {
                cy.get('td').each(($col) => {
                    if ($col.text() == 'Selenium') {
                        cy.get('[type="checkbox"]').check()  //checking the box
                        cy.get('[value="Delete"]').click()   //clicking Delete btn
                        cy.get('[type="button"]').should('have.value', 'Deleted')  //validation whether it is deleted or not

                    }
                    // cy.log($col.text())
                })
            })
        })

        //Second way: performing delete actions on dynamic data based on indexes using eq (0-checkbox, 4-delete)
        cy.get('#table01 tbody tr').each(($row) => {
            cy.wrap($row).within(() => {
                cy.get('td').each(($col) => {
                    if ($col.text() == 'QC ALM') {
                        cy.get('td').eq(0).click()  //checking the box
                        cy.get('td').eq(4).click()   //clicking Delete btn
                        cy.get('[type="button"]').should('have.value', 'Deleted')  //validation whether it is deleted or not
                    }
                })
            })
        })

        //third way: performing delete actions on dynamic data directly without traversing using contains(), EASY WAY
        cy.get('#table01').contains('tr', 'Functional').within(() => {  //this returns complete row based on text provided
            cy.get('[type="checkbox"]').check()  //checking the box
            cy.get('[value="Delete"]').click()   //clicking Delete btn
            cy.get('[type="button"]').should('have.value', 'Deleted')  //validation whether it is deleted or not
        })

    })


})