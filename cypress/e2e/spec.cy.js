describe('Laliko Spec', () => {
  let user;

  before(() => {
    // Load user data from lalikko.json
    cy.fixture('lalikko').then((data) => {
      user = data.user1; // Assign data for test case 1 and 2
    });
  });

  it('Testcase 1: Register User and Verify Home Page', () => {
    cy.visit('http://automationexercise.com');
    cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible');

    // Click on 'Signup / Login' button
    cy.get('.shop-menu > .nav > :nth-child(4)').click();

    // Verify 'New User Signup!' is visible
    cy.contains('New User Signup!').should('be.visible');

    // Enter name and email address
    cy.get('[data-qa="signup-name"]').type(user.name);
    cy.get('[data-qa="signup-email"]').type(user.email);

    // Click 'Signup' button
    cy.get('[data-qa="signup-button"]').click();

    // Verify 'Enter Account Information' is visible
    cy.contains("Enter Account Information").should("be.visible");

    // Fill details
    cy.get('[data-qa="password"]').type(user.password);
    cy.get('form > :nth-child(6)').type(user.dob); 
    cy.get('#newsletter').click(); 
    cy.get('#optin').click(); 

    // Fill address details
    cy.get('[data-qa="first_name"]').type(user.firstName);
    cy.get('[data-qa="last_name"]').type(user.lastName);
    cy.get('[data-qa="company"]').type(user.company);
    cy.get('[data-qa="address"]').type(user.address1);
    cy.get('[data-qa="address2"]').type(user.address2);
    cy.get('[data-qa="country"]').select(user.country);
    cy.get('[data-qa="state"]').type(user.state);
    cy.get('[data-qa="city"]').type(user.city);
    cy.get('[data-qa="zipcode"]').type(user.zipcode);
    cy.get('[data-qa="mobile_number"]').type(user.mobile);

    // Click 'Create Account' button
    cy.get('[data-qa="create-account"]').click();
   

    // Click 'Continue' button
    cy.get('[data-qa="continue-button"]').click();
    cy.contains(`Logged in as ${user.firstName}`).should('be.visible');

    // Delete account
   //cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
   // cy.contains('ACCOUNT DELETED!').should('be.visible');
    //cy.get('[data-qa="continue-button"]').click();
  });

  it('Testcase 2: Login User with Correct Email and Password', () => {
    cy.visit('http://automationexercise.com');
    cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible');

    // Click on 'Signup / Login' button
    cy.get('.shop-menu > .nav > :nth-child(4)').click();

    // Verify 'Login to your account' is visible
    cy.contains('Login to your account').should('be.visible');

    // Enter email and password
    cy.get('[data-qa="login-email"]').type(user.email);
    cy.get('[data-qa="login-password"]').type(user.password);

    // Click 'Login' button
    cy.get('[data-qa="login-button"]').click();

    // Verify login success
    cy.contains(`Logged in as ${user.firstName}`).should('be.visible');

    // Delete account
    cy.get('.shop-menu > .nav > :nth-child(5) > a').click();
 
    cy.get('[data-qa="continue-button"]').click();
  });

  it('Testcase 3: Login User with Incorrect Email and Password', () => {
    cy.fixture('lalikko').then((data) => {
      const invalidUser = data.user2; 

      cy.visit('http://automationexercise.com');
      cy.contains('Full-Fledged practice website for Automation Engineers').should('be.visible');

      // Click on 'Signup / Login' button
      cy.get('.shop-menu > .nav > :nth-child(4)').click();

      // Verify 'Login to your account' is visible
      cy.contains('Login to your account').should('be.visible');

      // Enter incorrect email and password
      cy.get('[data-qa="login-email"]').type(invalidUser.email);
      cy.get('[data-qa="login-password"]').type(invalidUser.password);

      // Click 'Login' button
      cy.get('[data-qa="login-button"]').click();

      // Verify error message
      cy.contains('Your email or password is incorrect!').should('be.visible');
    });
  });
});
