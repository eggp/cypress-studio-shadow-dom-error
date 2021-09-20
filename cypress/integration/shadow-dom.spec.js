describe('Shadow dom', () => {
  before(() => {
    cy.visit('http://localhost:4200');
  });

  it('Test selector', () => {
    cy.get('dynamic-form-card#16572').find('#test_field').type('Test text');
  });

  it('Test selector with studio', () => {

  });
});
