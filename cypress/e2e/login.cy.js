describe('template spec', () => {
  beforeEach(() => {
    //Arrange
    cy.visit('/')
  })
  it('Login com dados válidos deve permitir entrada no sistema', () => {
    //Act
    cy.fazerLoginCredenciaisValidas()
    //Assert
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
  })

  it('Login com dados inválidos deve apresentar mensagem de erro', () => {
    //Act
    cy.fazerLoginCredenciaisInvalidas()
    //Assert
    cy.verificarMensagemNoToast('Erro no login. Tente novamente.')
  })
})