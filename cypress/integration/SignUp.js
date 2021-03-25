describe('Login', function () {

    it('Visit the URL', function () {
        cy.visit('https://testpartner.dev.uniteliving.com/dtms/accounts');
    });

    it('Click on join button', function () {
        cy.xpath('//A[@data-v-0ff58b9e=""][text()="Join"]').click();
        cy.xpath('(//DIV[@data-v-0ff58b9e=""])[15]').click();
        
    });
    it('blank name', function () {
        cy.xpath('//INPUT[@id="name"]').click();
        cy.xpath('//INPUT[@id="email"]').type('arman@test.com');
        cy.xpath('//INPUT[@id="password"]').type('1234');
        cy.xpath('//INPUT[@id="confirm_password"]').type('1234');
        cy.xpath('(//SPAN[@data-v-96e3a1ce=""])[7]').click();
        cy.xpath('//BUTTON[@data-v-96e3a1ce=""][text()="Register"]').click();
        cy.xpath('//SPAN[@data-v-96e3a1ce=""][text()=" Please enter your name "]').contains('Please enter your name');
    });
    it('invalid email', function () {
        cy.xpath('//A[@data-v-0ff58b9e=""][text()="Join"]').click();
        cy.xpath('//A[@data-v-0ff58b9e=""][text()="Join"]').click();
        cy.xpath('(//DIV[@data-v-0ff58b9e=""])[15]').click();
        cy.xpath('//INPUT[@id="name"]').type('Arman');
        cy.xpath('//INPUT[@id="email"]').type('test.com');
        cy.xpath('//INPUT[@id="password"]').type('1234');
        cy.xpath('//INPUT[@id="confirm_password"]').type('1234');
        cy.xpath('(//SPAN[@data-v-96e3a1ce=""])[7]').click();
        cy.xpath('//BUTTON[@data-v-96e3a1ce=""][text()="Register"]').click();
        cy.xpath('//SPAN[@data-v-96e3a1ce=""][text()=" Please enter a valid email "]').contains('Please enter a valid email');
    });
    it('unmatched pass', function () {
        cy.xpath('//A[@data-v-0ff58b9e=""][text()="Join"]').click();
        cy.xpath('//A[@data-v-0ff58b9e=""][text()="Join"]').click();
        cy.xpath('(//DIV[@data-v-0ff58b9e=""])[15]').click();
        cy.xpath('//INPUT[@id="name"]').type('Arman');
        cy.xpath('//INPUT[@id="email"]').type('arman@test.com');
        cy.xpath('//INPUT[@id="password"]').type('1234');
        cy.xpath('//INPUT[@id="confirm_password"]').type('12345');
        cy.xpath('(//SPAN[@data-v-96e3a1ce=""])[7]').click();
        cy.xpath('//BUTTON[@data-v-96e3a1ce=""][text()="Register"]').click();
        cy.xpath('//SPAN[@data-v-96e3a1ce=""][text()=" Your passwords do not match. Please try again. "]').contains('Your passwords do not match.');
    });
    it('Successful signUp', function () {
        cy.xpath('//A[@data-v-0ff58b9e=""][text()="Join"]').click();
        cy.xpath('//A[@data-v-0ff58b9e=""][text()="Join"]').click();
        cy.xpath('(//DIV[@data-v-0ff58b9e=""])[15]').click();
        cy.xpath('//INPUT[@id="name"]').type('Arman');
        cy.xpath('//INPUT[@id="email"]').type('dawdaxc@test.com');
        cy.xpath('//INPUT[@id="password"]').type('1234');
        cy.xpath('//INPUT[@id="confirm_password"]').type('1234');
        cy.xpath('(//SPAN[@data-v-96e3a1ce=""])[7]').click();
        cy.xpath('//BUTTON[@data-v-96e3a1ce=""][text()="Register"]').click();
        cy.xpath('//H4[@data-v-31925bf0=""][text()="Activate your account"]').contains('Activate your account');
        
    });

});