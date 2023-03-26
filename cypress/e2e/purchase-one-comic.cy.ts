describe('Successful purchase tests just with one comic', () => {
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
  });

  it('by cart', () => {
    cy.get('[data-cy="btn-add-cart"]').click();
    cy.get('[data-cy="span-total-value-comics"]').should('have.text', '1');

    cy.get('[data-cy="btn-cart"]').click();
    cy.url().should('include', 'http://localhost:5173/cart');

    cy.contains('Gun Theory (2003) #4');
    cy.get('[data-cy="comics-quantity"]').should('have.text', '1');

    cy.get('[data-cy="btn-finish-purchase"]').click();
    cy.url().should('include', 'http://localhost:5173/purchase-made');
  });

  it('by the page of the comic itself', () => {
    cy.get('[data-cy="btn-confirm-purchase"]').click();
    cy.url().should('include', 'http://localhost:5173/purchase-made');
    cy.contains('Compra efetuada com sucesso');
  });

  it('see a comic, go back to the homepage, navigate between the comics and choose another comic and make the purchase using the cart', () => {
    cy.get('[data-cy="btn-return-home"]').click();
    cy.url().should('include', 'http://localhost:5173/');

    cy.get('[data-cy="page-forward-btn"]').click();
    cy.get('[data-cy="page-forward-btn"]').click();
    cy.get('[data-cy="page-forward-btn"]').click();

    cy.get('[data-cy="show-current-page"]').should('have.text', '4');
    cy.get('[data-cy="comic-card"]').eq(2).click();
    cy.contains('Penance: Relentless (2008)');

    cy.get('[data-cy="btn-add-cart"]').click();
    cy.get('[data-cy="span-total-value-comics"]').should('have.text', '1');

    cy.get('[data-cy="btn-cart"]').click();
    cy.url().should('include', 'http://localhost:5173/cart');

    cy.contains('Penance: Relentless (2008)');
    cy.get('[data-cy="comics-quantity"]').should('have.text', '1');

    cy.get('[data-cy="btn-finish-purchase"]').click();
    cy.url().should('include', 'http://localhost:5173/purchase-made');
  });
});
