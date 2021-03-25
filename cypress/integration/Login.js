describe('Login', function () {

    it('Visit the URL', function () {
        cy.visit('https://testpartner.dev.uniteliving.com/');
    });

    it('Click on Login button', function () {
        cy.xpath('//A[@data-v-0ff58b9e=""][text()="Log in"]').click();
        
    });

    it('invalid email and blank pass', function () {
        cy.xpath('(//INPUT[@data-v-055ee7b6=""])[1]').type('qa@gain');
        cy.xpath('(//INPUT[@data-v-055ee7b6=""])[2]').click();
        cy.xpath('//BUTTON[@data-v-055ee7b6=""][text()="Log in"]').click();
        cy.xpath('//SPAN[@data-v-055ee7b6=""][text()=" Please enter a valid email "]').contains(' Please enter a valid email ');
        cy.xpath('//SPAN[@data-v-055ee7b6=""][text()=" Please enter your password "]').contains(' Please enter your password ');
    });


    it('wrong username right password', function () {
        cy.xpath('(//INPUT[@data-v-055ee7b6=""])[1]').clear();
        cy.xpath('(//INPUT[@data-v-055ee7b6=""])[2]').clear();
        cy.xpath('(//INPUT[@data-v-055ee7b6=""])[1]').type('qa@gain.test');
        cy.xpath('(//INPUT[@data-v-055ee7b6=""])[2]').type('QATeam');
        cy.xpath('//BUTTON[@data-v-055ee7b6=""][text()="Log in"]').click();
        cy.xpath('//DIV[@class="toast-message"]').contains("Couldn't log in.");
        
    });

    it('wrong username wrong password', function () {
        cy.xpath('(//INPUT[@data-v-055ee7b6=""])[1]').clear();
        cy.xpath('(//INPUT[@data-v-055ee7b6=""])[2]').clear();
        cy.xpath('(//INPUT[@data-v-055ee7b6=""])[1]').type('qa@gain.test');
        cy.xpath('(//INPUT[@data-v-055ee7b6=""])[2]').type('QATea');
        cy.xpath('//BUTTON[@data-v-055ee7b6=""][text()="Log in"]').click();
        cy.xpath('//DIV[@class="toast-message"]').contains("Couldn't log in.");
    });

    it('right username wrong password', function () {
        cy.xpath('(//INPUT[@data-v-055ee7b6=""])[1]').clear();
        cy.xpath('(//INPUT[@data-v-055ee7b6=""])[2]').clear();
        cy.xpath('(//INPUT[@data-v-055ee7b6=""])[1]').type('qa@gain.media');
        cy.xpath('(//INPUT[@data-v-055ee7b6=""])[2]').type('QATea');
        cy.xpath('//BUTTON[@data-v-055ee7b6=""][text()="Log in"]').click();
        cy.xpath('//DIV[@class="toast-message"]').contains("Couldn't log in.");
    });

    it('right username right password', function () {
        cy.xpath('(//INPUT[@data-v-055ee7b6=""])[1]').clear();
        cy.xpath('(//INPUT[@data-v-055ee7b6=""])[2]').clear();
        cy.xpath('(//INPUT[@data-v-055ee7b6=""])[1]').type('qa@gain.media');
        cy.xpath('(//INPUT[@data-v-055ee7b6=""])[2]').type('QATeam');
        cy.xpath('//BUTTON[@data-v-055ee7b6=""][text()="Log in"]').click();
        cy.xpath('//H2[@data-v-5205412e=""][text()="Dashboard"]').contains('Dashboard');
    });
});