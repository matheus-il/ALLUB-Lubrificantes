# Lucy Test-First Gate

Tarefa: pode popular a aplicação lucy, o banco de dados  
Workspace: `C:\Users\pedro\Desktop\ALLUB`  
Cerebro central: `C:\Users\pedro\Universo_Lucy\Lucy`  
Gerado em: 2026-06-21 15:08  
Status: Obrigatorio

## Regra Inegociavel

Nao edite codigo de producao antes de criar ou ajustar o teste automatizado que
prova o comportamento esperado. Este gate vem antes da implementacao.

## Antes De Editar Codigo

- [ ] Entender o comportamento esperado e escrever criterio de aceite observavel.
- [ ] Localizar testes existentes e comando de teste do projeto.
- [ ] Criar ou ajustar primeiro um teste automatizado.
- [ ] Se nao houver harness de teste, criar o menor harness possivel como primeira alteracao.
- [ ] Rodar o teste e confirmar falha pelo motivo esperado.
- [ ] So entao editar codigo de producao.

## Ciclo Red Green Refactor

1. Red: escrever teste que falha pelo motivo certo.
2. Green: implementar o menor codigo suficiente para passar.
3. Refactor: melhorar nomes, estrutura e duplicacao mantendo testes verdes.
4. Regression: bug corrigido precisa ganhar teste de regressao.

## Validacoes Detectadas

- [ ] `npm run test`
- [ ] `npm run lint`
- [ ] `npm run build`

## Evidencias Para A Entrega

- Qual teste foi criado ou ajustado:
- Comando rodado antes da implementacao:
- Falha esperada observada:
- Comando rodado depois da implementacao:
- Resultado final:

## Excecoes

- Documentacao pura pode usar checklist/linters como validacao, mas deve declarar que nao houve codigo de producao.
- Para spikes descartaveis, mantenha fora do codigo principal e registre que nao e implementacao entregue.
- Para hotfix emergencial, criar teste de regressao imediatamente antes ou no mesmo commit da correcao.

## Protocolo

Leia: `C:\Users\pedro\Universo_Lucy\Lucy\LUCY_TEST_FIRST_PROTOCOL.md`
