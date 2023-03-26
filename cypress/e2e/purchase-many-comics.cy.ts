describe('Successful purchase tests just with many comics', () => {
  beforeEach(() => {
    cy.visit('/');
    const containsWarning = cy.contains(
      'As HQs marcadas com uma estrela são consideradas RARAS.'
    );
    containsWarning.should('be.visible');
    cy.get('[data-cy="close-warning-star"]').click();
    containsWarning.should('not.exist');

    cy.get('[data-cy="comic-card"]').eq(5).click();
    cy.url().should('include', 'http://localhost:5173/comic/331');
    cy.get('[data-cy="btn-add-cart"]').click();
    cy.get('[data-cy="btn-return-home"]').click();

    cy.get('[data-cy="comic-card"]').eq(2).click();
    cy.url().should('include', 'http://localhost:5173/comic/82970');
    cy.get('[data-cy="btn-add-cart"]').click();
    cy.get('[data-cy="btn-return-home"]').click();

    cy.get('[data-cy="page-forward-btn"]').click();
    cy.get('[data-cy="page-forward-btn"]').click();

    cy.get('[data-cy="show-current-page"]').should('have.text', '3');

    cy.get('[data-cy="comic-card"]')
      .eq(10)
      .should(
        'contain',
        'Incredible Hulks (2010) #604 (DJURDJEVIC 70TH ANNIVERSARY VARIANT)'
      );
    cy.get('[data-cy="comic-card"]').eq(10).click();
    cy.url().should('include', 'http://localhost:5173/comic/27649');
    cy.get('[data-cy="btn-add-cart"]').click();

    cy.get('[data-cy="btn-cart"]').click();
    cy.url().should('include', 'http://localhost:5173/cart');
  });
  it('by cart', () => {
    cy.get('[data-cy="btn-finish-purchase"]').click();
    cy.url().should('include', 'http://localhost:5173/purchase-made');
  });

  it('by cart with discount', () => {
    cy.get('[data-cy="input-coupon"]').click();
    cy.get('[data-cy="input-coupon"]').type('TCqp98');
    cy.get('[data-cy="btn-add-coupon"]').click();

    cy.get('[data-cy="btn-finish-purchase"]').click();
    cy.url().should('include', 'http://localhost:5173/purchase-made');
  });
});
