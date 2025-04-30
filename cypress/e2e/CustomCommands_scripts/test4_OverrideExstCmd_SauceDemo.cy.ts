describe('Override Existing Commands', () => {

    it('First Tc: Typing text in text boxes in Sauce Demo', () => {

        cy.visit('https://www.saucedemo.com/v1/')

        cy.get('#user-name').type('standard_user') //1st type

        //again writing the same text into same input field 
        cy.get('#user-name').type('standard_user')   //it writes multiple times(appends to the previous text)

        //after overridng 'type' in "commands.ts"
        //selects all 'Previous text' and do 'backspace' then ebter the 'Text' again


        // type{selectall}{backspace}standard_user
        cy.get('#user-name').type('standard_user')  //even we pass multiple times, it enters only once, by clearing the previous texts

    })



})