Cypress.Commands.add('registerUser', (name, email, password) => {
    cy.visit('http://automationexercise.com');
    cy.get('.shop-menu > .nav > :nth-child(4)').click(); // Click on 'Signup / Login'
    cy.contains('New User Signup!').should('be.visible');
    cy.get('[data-qa="signup-name"]').type(name);
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();
    cy.contains("Enter Account Information").should("be.visible");
    cy.get('[data-qa="password"]').type(password);
    cy.get('form > :nth-child(6)').type('1990-01-01'); // Enter date of birth
    cy.get('#newsletter').check(); // Select newsletter
    cy.get('#optin').check(); // Select special offers
    cy.get('[data-qa="first_name"]').type(name.split(' ')[0]);
    cy.get('[data-qa="last_name"]').type(name.split(' ')[1]);
    cy.get('[data-qa="company"]').type('TestCompany');
    cy.get('[data-qa="address"]').type('123 Main Street');
    cy.get('[data-qa="country"]').select('United States');
    cy.get('[data-qa="state"]').type('California');
    cy.get('[data-qa="city"]').type('Los Angeles');
    cy.get('[data-qa="zipcode"]').type('90001');
    cy.get('[data-qa="mobile_number"]').type('1234567890');
    cy.get('[data-qa="create-account"]').click();
    cy.contains('Account Created!').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
  });
  
  // Custom command to log in
  Cypress.Commands.add('login', (email, password) => {
    cy.visit('http://automationexercise.com');
    cy.get('.shop-menu > .nav > :nth-child(4)').click(); 
    cy.get('[data-qa="login-email"]').type(email);
    
    cy.get('[data-qa="login-password"]').type(password);
    cy.get('[data-qa="login-button"]').click();
  
  });