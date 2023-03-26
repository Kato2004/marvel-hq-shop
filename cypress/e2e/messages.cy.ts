describe('testing that error messages appear correctly', () => {
  beforeEach(() => {
    cy.visit('/');

    cy.contains(
      'As HQs marcadas com uma estrela são consideradas RARAS.'
    ).should('be.visible');
    cy.get('[data-cy="close-warning-star"]').click();
    cy.contains(
      'As HQs marcadas com uma estrela são consideradas RARAS.'
    ).should('not.exist');

    cy.get('[data-cy="comic-card"]').eq(5).click();
    cy.url().should('include', 'http://localhost:5173/comic/331');

    cy.get('[data-cy="btn-add-cart"]').click();
    cy.get('[data-cy="span-total-value-comics"]').should('have.text', '1');
  });

  it('Checks if the message that informs if the coupon is valid or not', () => {
    cy.contains('Item adicionado ao carrinho');
  });

  it('checks if the coupon is invalid, if this is the case it displays an error message', () => {
    cy.get('[data-cy="btn-cart"]').click();
    cy.url().should('include', 'http://localhost:5173/cart');

    cy.contains('Gun Theory (2003) #4');
    cy.get('[data-cy="comics-quantity"]').should('have.text', '1');
    cy.get('[data-cy="input-coupon"]').click();
    cy.get('[data-cy="input-coupon"]').type('TCqx98');
    cy.get('[data-cy="btn-add-coupon"]').click();

    cy.contains('Cupom inválido');
  });
});
