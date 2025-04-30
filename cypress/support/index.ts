//Parent Custom command
declare namespace Cypress {
    interface Chainable {
        sd_login(email: string, password: string): void; //as the method doesn't return, so void
        qavbox_getLinks(): Chainable<Element>
        sd_getText(): any
        type(text: string, options?: Partial<Cypress.TypeOptions>): Cypress.Chainable<JQuery<HTMLElement>>
        getIframe_qavbox(iFrameLocator:string): any
    }
}

// //Child Custom command
// declare namespace Cypress {
//     interface Chainable<Subject = any> {
//         qavbox_getLinks(subject?: JQuery<HTMLElement>): Chainable<JQuery<HTMLAnchorElement>>;
//     }
// }



