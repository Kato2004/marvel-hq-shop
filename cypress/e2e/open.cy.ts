describe('Home', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('passes', () => {
    //Verifica se contém o texto na página e após isso o excluí e
    //verifica se ele existe novamente
    const containsWarning = cy.contains(
      'As HQs marcadas com uma estrela são consideradas RARAS.'
    );
    cy.get('[data-cy="close-warning-star"]').click();
    containsWarning.should('not.exist');

    //clica no card número 6 e verifica se ele foi direcionado
    //para a página da hq selecioanda
    cy.get('[data-cy="comic-card"]').eq(5).click();
    cy.url().should('include', 'http://localhost:5173/comic/331');

    //adiciona a hq no carrinho e verifica se foi realmente adicionado
    //atraves do span responsável por mostrar a quantidade de items no carrinho
    cy.get('[data-cy="button-add-cart"]').click();
    cy.get('[data-cy="span-total-value-comics"]').should('have.text', '1');

    //vai ao carrinho e verifica se esta na página que foi direcionada
    cy.get('[data-cy="button-cart"]').click();
    cy.url().should('include', 'http://localhost:5173/cart');

    cy.contains('Gun Theory (2003) #4');
    cy.contains('Total: R$2,50');
    cy.get('[data-cy="comics-quantity"]').should('have.text', '1');

    cy.get('[data-cy="button-finish-purchase"]').click();
    cy.url().should('include', 'http://localhost:5173/purchase-made');
  });
});
