describe('Leafwell Website', () => {
  it('Clicks the "Get Started" button', () => {
    cy.visit('https://dev.leafwell.com/');
    cy.get('.select-none.hidden').click();
    cy.get('#iFrameResizer0').should('be.visible');
  });

  it('Create account and password', () => {
    cy.visit('https://staging.medicalcard.io/patient_registry/26d3a255-60a1-45c9-b4e8-047c3d5866c0/1');
    cy.get('#patient_registry_state_code').select('ca');
    cy.get('#patient_registry_email')
      .clear()
      .type('rafaelnagao@msn.com');
    cy.get('#patient_registry_phone')
      .clear()
      .type('202-555-0190');

    cy.get(':nth-child(7) > .c-form__label').each(($el) => {
      cy.wrap($el).click({ force: true });
    });    

    cy.get('#new_patient_registry_landing > .c-form__actions > .c-btn').click();
    cy.get('.form-step-password > .c-card > .c-card__title')
      .should('be.visible')
      .invoke('text')
      .should('include', 'Protect your Account');

    //Create a new password
    cy.get('#patient_registry_password').type('Testnumber1');
    cy.get('#patient_registry_password_confirmation').type('Testnumber1');
    cy.get('#new_patient_registry_password > .c-form__actions > .c-form__actions-item--next > .c-btn').click();
    cy.get('.form-step-general_info > .c-dialog__header > .c-heading__title')
      .should('be.visible')
      .invoke('text')
      .should('include', 'Registration');
  });

  it('Fill General Information', () => {
    cy.visit('https://staging.medicalcard.io/ca/patient_registry/80fad4e8-4242-47d3-8fce-9959bb57e444/3');
    cy.get('#patient_registry_first_name').clear().type('John');
    cy.get('#patient_registry_last_name').clear().type('Doe');
    cy.get(':nth-child(2) > .c-form__radio > :nth-child(2) > .c-form__label').click();
    cy.get('#patient_registry_birth_date_month_birth_date').select('6');
    cy.get('#patient_registry_birth_date_day_birth_date').select('23');
    cy.get('#patient_registry_birth_date_year_birth_date').select('1959');
    cy.get('#patient_registry_shipping_address_line_1').clear().type('345 Williams Ave');
    cy.get('#patient_registry_shipping_address_city').clear().type('San Francisco');
    cy.get('#patient_registry_shipping_address_postal_code').clear().type('CA 94124');
    cy.get('#new_patient_registry_general_info > .c-form__actions > .c-form__actions-item > .c-btn').click();
    cy.get('.form-step-medical_info > .c-progress > .o-list-inline > .c-progress__item--current > .c-progress__label')
      .should('be.visible')
      .invoke('text')
      .should('include', 'Medical Information');
  });

  it('Fill Medical Information', () => {
    cy.visit('https://staging.medicalcard.io/ca/patient_registry/80fad4e8-4242-47d3-8fce-9959bb57e444/4');
    cy.get('.renewal > .js-form-field > :nth-child(3) > .c-form__label').should('not.have.class', 'selected');
    cy.get('.renewal > .js-form-field > :nth-child(3) > .c-form__label').click();
    
    cy.get('[data-other-manual-input-toggler-container=""] > :nth-child(2) > .c-form__label').should('not.have.class', 'selected');
    cy.get('[data-other-manual-input-toggler-container=""] > :nth-child(2) > .c-form__label').click();
    
    cy.get('[data-other-manual-input-toggler-container=""] > :nth-child(4) > .c-form__label').should('not.have.class', 'selected');
    cy.get('[data-other-manual-input-toggler-container=""] > :nth-child(4) > .c-form__label').click();
    
    cy.get(':nth-child(5) > .c-form__label').should('not.have.class', 'selected');
    cy.get(':nth-child(5) > .c-form__label').click();
    
    cy.get(':nth-child(6) > .c-form__label').should('not.have.class', 'selected');
    cy.get(':nth-child(6) > .c-form__label').click();
        
    cy.get('#caregiver-controls > .js-form-field > :nth-child(3) > .c-form__label').click();
    cy.get(':nth-child(4) > :nth-child(3) > :nth-child(3) > .c-form__label').click();
    cy.get('#patient_registry_height_ft').clear().type('5');
    cy.get('#patient_registry_height_in').clear().type('10');
    cy.get('#patient_registry_weight').clear().type('110.23');
    cy.get('#step-medical-info-submit').click();
    cy.get('.form-step-documentation > .c-progress > .o-list-inline > .c-progress__item--current > .c-progress__label')
      .should('be.visible')
      .invoke('text')
      .should('include', 'Upload ID');
  });

  it('Upload ID', () => {
    cy.visit('https://staging.medicalcard.io/ca/patient_registry/80fad4e8-4242-47d3-8fce-9959bb57e444/5');
    cy.get('.o-fileupload--upload_name').then((uploadName) => {
      if (uploadName.length === 0) {
        cy.fixture('IMG_1922.jpg', 'base64').then((fileContent) => {
          const blob = Cypress.Blob.base64StringToBlob(fileContent, 'image/jpeg');
          const testFile = new File([blob], 'IMG_1922.jpg', { type: 'image/jpeg' });
          cy.get('.js-official-id-upload').click();
          cy.get('#documents_').then((uploadButton) => {
            cy.get('#documents_').should('be.visible').then((input) => {
              const dataTransfer = new DataTransfer();
              dataTransfer.items.add(testFile);
              input[0].files = dataTransfer.files;
              cy.wrap(input).trigger('change');
            });
  
            cy.wrap(uploadButton).should('be.visible').click();
  
            cy.get('.o-fileupload--upload_name', { timeout: 5000 })
              .should('be.visible')
              .contains('IMG_1922.jpg');
          });
        });
      }
    });
  
    cy.get('.js-validate-disabled').click();
    cy.get('.form-step-plans > .c-progress > .o-list-inline > .c-progress__item--current > .c-progress__label', { timeout: 5000 })
      .should('be.visible')
      .invoke('text')
      .should('include', 'Select Plan');
  });

  it('Select Plan', () => {
    cy.visit('https://staging.medicalcard.io/ca/patient_registry/80fad4e8-4242-47d3-8fce-9959bb57e444/6')
    cy.get('.plan-88 > .c-plan > .c-plan__footer > .js-plan-trigger').click();
    cy.get('.js-summary-update').click();
    cy.get('.form-step-payment > .c-progress > .o-list-inline > .c-progress__item--current > .c-progress__label')
      .should('be.visible')
      .invoke('text')
      .should('include', 'Payment');
  })
});
