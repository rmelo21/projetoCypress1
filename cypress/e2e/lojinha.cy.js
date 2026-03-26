describe('Suite de testes do Sistema Lojinha', () => {
    it('Fazer login e adicionar produto', () => {

        cy.visit('http://165.227.93.41/lojinha-web/v2/');

        cy.get('#usuario').click({ force : true }).type('admin');

        cy.get('#senha').click({ force : true }).type('admin');

        cy.get('#btn-entrar').click();

        cy.contains('Boas vindas').should('be.visible');

        cy.contains('a', 'Adicionar produto').click();
        
        cy.get('#produtonome').click({force : true}).type('Playstations 5');

        cy.get('#produtovalor').click({force : true}).type('4500');

        cy.get('#produtocores').click({force : true}).type('Branco');
        
        cy.get('#btn-salvar').click();

        cy.contains('a', 'Lista de Produtos').click();

        cy.contains('Lista de Produtos').should('be.visible');

        cy.screenshot('Após salvar produto');

    });
    
});