# S206-L1_Lista-1
Repositório da primeira lista de S206 - Qualidade de software

Vinicius Marques - 73
Caio Lima - 72

Testes realizados no site:
https://ygoprodeck.com/

1. Adicionando dependências para o comando de arrastar:
npm install --save-dev @4tw/cypress-drag-drop

2. Adicionando as dependências necessárias para gerar o reporte de testes:
npm i --save-dev cypress-mochawesome-reporter

3. Rodar e sair com os testes e relatorios:
./node_modules/.bin/cypress run --spec 'cypress/e2e/**/'
