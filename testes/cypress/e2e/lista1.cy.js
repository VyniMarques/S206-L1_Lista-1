///<reference types="cypress"/>

describe('Criando Testes para a Lista 1', () => {
  
  //Teste 1
  it('Pesquisando Carta(Exodia)', () => {
    cy.visit('https://ygoprodeck.com/')
    cy.get('.top-fp-columns > :nth-child(5) > a > .card-img-overlay').click()
    cy.wait(2000)
    cy.get('#filter-dq').type('Exodia')
    cy.wait(2000)
    cy.get('[href="/card/?search=33396948"] > #item-area > .item-name > h1').should('contain.text','Exodia the Forbidden One')
  })

  //Teste 2
  it('Tentando Entrar sem ter conta', () => {
    cy.visit('https://ygoprodeck.com/')
    cy.get(':nth-child(5) > .nav-link').click()
    cy.get('#displayName').type('12345')
    cy.get('#firstPassWord').type('12345')
    cy.get(':nth-child(5) > .btn').click()
    cy.get('.warning-msg').should('contain.text','Incorrect')
  })

  //Teste 3
  it('Criando usuario com email invalido', () => {
    let info = criarUsuario()
    cy.visit('https://ygoprodeck.com/')
    cy.get(':nth-child(5) > .nav-link').click()
    cy.get('form > :nth-child(6) > a').click()
    cy.get('#displayName').type(info[0])
    cy.get('#regEmail').type(info[2])
    cy.get('#firstPassWord').type(info[1])
    cy.get('#secondPassWord').type(info[1])
    cy.get(':nth-child(5) > .btn').click()
    cy.get('.warning-msg').should('have.text','Invalid Email Address Entered.')
  })
  
  //Teste 4
  it('Pesquisando Carta que não existe', () => {
    let carta = new Date().getMinutes().toString() + 'carta'
    cy.visit('https://ygoprodeck.com/')
    cy.get('.top-fp-columns > :nth-child(5) > a > .card-img-overlay').click()
    cy.get('#filter-dq').type(carta)
    cy.get('.item-name > h1').should('contain.text','No Results Found.')
  })
  //Teste 5
  it('Testando função de arrastar cartas', () => {
    
    cy.visit('https://ygoprodeck.com/deckbuilder/')
    cy.wait(12000)
    cy.get(':nth-child(1) > :nth-child(1) > .card').drag('.deck-part--main > .deck-part__content')
    cy.get('.deck-part--main > .deck-part__header > .deck-part__details > .deck-part__stats').should('contain.text', '1 Cards') 
  })
  //Teste 6
  it('Conferindo se começa com 5 cartas', () => {
    cy.visit('https://ygoprodeck.com/')
    cy.get(':nth-child(6) > :nth-child(2) > .deck-layout-flex > :nth-child(1) > a > .card-img-overlay').click()
    cy.get('.flex-button-row > a.btn').click()
    cy.wait(2000)
    cy.get('body').type('{esc}')
    cy.wait(2000)
    cy.get('.handsize').should('have.text','5')

  })


})

function criarUsuario(){

  let horas = new Date().getHours().toString()
  let minutos = new Date().getMinutes().toString()
  let user = horas + minutos + 'name'
  let senha = horas + minutos + 'password'
  let email = horas + minutos + '@email'
  let userInfo = [user, senha, email]

  return userInfo
}