// Login "SDMSUAT"

describe('SDMS Login Test', () => {
  it('Login', () => {

    cy.visit('https://sdmsuat.dalmiabharat.com/login')

    cy.get(':nth-child(3) > .form-control').type('v-ankur.aggarwal')

    cy.get(':nth-child(4) > .form-control').type('Earnest#456')

    cy.get('.btn').click()

    //create a new sceheme

  cy.get('[title="Add New scheme"] > .fa').click()

    
  cy.get('select[name="comcodefrom"]') 
    .select("1000 - Dalmia Cement(Bharat) Ltd")
    .should("have.value", "1000");

  cy.get('select[name="custschemeType"]') 
   .select("Annual Discount")
   .should("have.value", "RBAD");

  cy.get(':nth-child(5) > .col-md-5 > .row > :nth-child(2) > .form-control').type('DevSecOps_Scheme')

  cy.get('input[name="scheme.fromDate"]') 
  .clear() 
  .type("2023-08-01");

  cy.get('input[name="scheme.toDate"]')
  .clear() 
  .type("2023-08-10");

  cy.get('input[name="scheme.announcementDate"]')
  .clear()
  .type("2023-07-30");

  cy.get('#accordion1 > .card > .card-header > .card-link > b').click()
  
  cy.get('select[name="sorgFrom"]')
  .select("1000") 
  .should("have.value", "1000"); 


  cy.get('select[name="dcFrom"]')
  .select("01") 
  .should("have.value", "01"); 


  cy.get('select[name="div1"]') 
  .select("01") 
  .should("have.value", "01"); 

  cy.get('#accordion1 > .card > .card-header > .card-link > b').click()

  cy.get('#accordion2 > .card > .card-header > .card-link > b').click()

  cy.get('select[name="cr1"]') 
  .select("01")
  .should("have.value", "01");

  cy.get('#accordion2 > .card > .card-header > .card-link > b').click()

  cy.get('#accordion4 > .card > .card-header > .card-link > b').click()

  cy.wait(200);
  cy.get('select[name="scheme.glAccountItem"]')
  .select("0014200260")
  .should("have.value", "0014200260");

  cy.get('#accordion4 > .card > .card-header > .card-link > b').click()

  cy.get('input[type=file]').selectFile("cypress/fixtures/Question 15.pdf", { force: true })
  
  cy.get('input[name="slabCat"][value="slab"]').check();

  cy.contains('Upload Document').click({ force: true });

  cy.get('input[name="slabCat"][value="slab"]').check();

  cy.get('select[name="schemeType1"]') 
   .select("Total Actual Qty Slab_Divyansh")
   .should("have.value", "1486");

cy.get('td input').eq(0).type('10'); // Set "10" in the first input
cy.get('td input').eq(1).type('20'); // Set "20" in the second input
cy.get('td input').eq(2).type('30'); // Set "30" in the third input
cy.get('td input').eq(3).type('40'); // Set "40" in the fourth input

cy.contains('View Scheme').click();

cy.get('button.btn.btn-primary.view[type="button"]').click();

});
  

it('Scheme Check', () => {
  cy.visit('https://sdmsuat.dalmiabharat.com/login')

    cy.get(':nth-child(3) > .form-control').type('v-ankur.aggarwal')

    cy.get(':nth-child(4) > .form-control').type('Earnest#456')

    cy.get('.btn').click()

//Filter scheme

cy.get('button.button-class.sm').first().click(); 
cy.wait(1000);
cy.contains('b', 'PD Portal').click();
cy.get('a.side-nav[href="/pdportalpost"]').click({ multiple: true }); 
cy.get('div.col-md-12 button[data-toggle="tooltip"][title="Discount Calculation"]:contains("Filters")').click({ force: true });
cy.get('select[name="filterStatus"]').select('Partially Posted');
cy.contains('Get Data').click();

// //Batch Job

cy.contains('Tools & Setup').click();
cy.get('a.side-nav[href="/batch"]').click();
cy.get('select[name="searchBy"]').select('Batch Name');
cy.get('select[name="searchBy"]').select('Batch Name');
cy.wait(1000);
cy.get('select[name="fieldtext"]').select('BKPF');

// //Analysis Report

cy.get('button.button-class2').click();
cy.get('a.side-nav[href="/analysisreport"]').click();
cy.get('input[name="fromDate"]').type('2023-08-01');
cy.get('input[name="toDate"]').type('2023-08-30');
cy.get('select[name="regionId"]').select('2');
cy.get('button.btn.btn-primary').click();




});
  
});



