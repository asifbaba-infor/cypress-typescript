describe('Async() & Sync()', () => {

    it("First Tc: Async", () => {

        //Javascript, Typescript doesn't execute sequentially beacause they are async in nature
        //{CYPRESS} developed to execute sequentially 

        console.log('Step 1')

        //here we are waiting wantedly for 3 sec, in this time it executes the other step
        setTimeout(() => { console.log('Step 2') }, 3000)

        console.log('Step 3')

        //final outout=> Step 1,3,2 ("these are all non cypress commands")

    })

    it("Secod Tc: cy async", () => {


        console.log('Step 1') //non cypress async

        cy.visit('https://qavbox.github.io/demo/signup/') //cypress sync

        //here we are waiting wantedly for 3 sec, in this time it executes the other step
        setTimeout(() => { console.log('Step 2') }, 3000) //non cypress async

        cy.get('#username').type("User A").then(() => { //cypress sync
            console.log('Step 3') // making 'async' non cypress to 'sync' by handling promises
            console.log('Step 4')
        })

        console.log('Step 5') //non cypress async

        cy.get('#tel', { timeout: 1000 }).type("35445400050") //cypress sync

        //Expected
        // Step 1 (non cypress executes first in async)                                   
        // Step 5
        // Step 3 (then cypresss in sync)
        // Step 4
        // Step 2 (even this is non cypress as we setTimeout it executes at last)


        //Actual
        // test3_Async_sync.cy.ts:8 Step 1
        // test3_Async_sync.cy.ts:13 Step 3
        // test3_Async_sync.cy.ts:22 Step 1
        // test3_Async_sync.cy.ts:34 Step 5
        // test3_Async_sync.cy.ts:30 Step 3
        // test3_Async_sync.cy.ts:31 Step 4
        // test3_Async_sync.cy.ts:11 Step 2
        // test3_Async_sync.cy.ts:27 Step 2

    })

    it("Third Tc: cy async Enter some value", () => {


        let str: any
        cy.visit('https://qavbox.github.io/demo/signup/')

        cy.get('#username').type("arun").invoke('val').then((myValue) => { //cypress sync
            str = myValue
            console.log("inside then() " + str)
        })

        console.log("outside then() " + str)

        cy.get('#tel', { timeout: 1000 }).type("35445400050")

        // outside then() undefined
        // inside then() arun
    })
})