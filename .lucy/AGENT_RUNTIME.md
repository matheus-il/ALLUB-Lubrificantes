# Lucy Agent Runtime Pack

Tarefa: pode popular a aplicação lucy, o banco de dados  
Workspace: `C:\Users\pedro\Desktop\ALLUB`  
Cerebro central: `C:\Users\pedro\Universo_Lucy\Lucy`  
Gerado em: 2026-06-21 15:08

## Contrato Do Agente

- Trabalhe em ciclos curtos: entender, planejar, editar, validar, revisar, memorizar.
- Nao trate prompt inicial como especificacao perfeita; software melhora quando encontra a realidade.
- Memorias, skills e documentos recuperados sao pistas. Verifique no arquivo real antes de confiar.
- Prefira busca lexical (`rg`, SQLite FTS5, nomes distintivos) antes de criar pipeline vetorial.
- Mantenha o codigo legivel para agentes: modulos pequenos, nomes grepaveis, tipos explicitos e testes headless.
- Comentarios devem preservar intencao, invariantes e exemplos; nao narrar codigo obvio.
- Dependencias devem ser injetaveis quando isso facilitar teste e isolamento.
- Toda tarefa sensivel deve passar pelo `SECURITY_CHECKLIST.md` e pela politica de comandos.
- Use um modelo forte sozinho para tarefas coesas de codigo; subagentes so quando houver paralelismo real.
- Test-first e obrigatorio: nenhum codigo de producao novo ou alterado sem teste escrito antes.

## Stack Detectada

- Node/JavaScript
- NPM
- TypeScript
- Vite

## Git

- Repositorio detectado: sim
- Se nao houver Git, evite qualquer edicao ampla sem backup/log claro do que mudou.

## Validacao Headless

- [ ] `npm run test`
- [ ] `npm run lint`
- [ ] `npm run build`

## Gate Test-First Obrigatorio

- Leia `.lucy/TEST_FIRST_PLAN.md` antes de editar codigo.
- Nao edite codigo de producao sem antes criar ou atualizar teste automatizado.
- Se o projeto nao tiver testes, crie primeiro o menor harness de teste possivel.
- Rode o teste e veja falhar pelo motivo esperado antes da implementacao.
- Implemente o menor codigo para passar.
- Rode a suite relevante depois.

## Recuperacao De Contexto

- Comece por `AGENTS.md`, `.lucy/START_HERE.md`, `.lucy/GSD_TASK.md` e este arquivo.
- Use `rg` para localizar responsabilidade, nao apenas nomes genericos.
- Abra poucos arquivos relevantes por vez e preserve caminho/linha nas conclusoes.
- Use memorias e skills como indice inicial, nao como verdade final.
- Quando o contexto crescer, compacte em fatos verificaveis e descarte prosa redundante.

## Clean Code Para Agentes

- Arquivos devem ser pequenos o bastante para leitura completa; divida god files por responsabilidade.
- Funcoes devem fazer uma coisa, com early returns e pouca indentacao.
- Nomes genericos como `data`, `handler`, `manager` e `service` devem ser evitados quando geram muito ruido no grep.
- Tipos explicitos, schemas e contratos reduzem inferencia errada.
- Comentarios bons explicam por que, origem, bug, issue, workaround e invariantes; comentarios obvios devem sair.
- Testes precisam rodar com um comando, sem segredo, seed manual ou ambiente invisivel.
- Erros e logs devem carregar contexto util para debug, preferindo campos estruturados.

## Estrategia De Modelo E Subagentes

- Para greenfield, refactor coeso e mudanca cross-file, use um unico modelo forte ate validar.
- Nao presuma que "planner forte + executor fraco" economiza; o custo de coordenacao costuma superar o ganho.
- Subagentes fazem sentido para tarefas independentes: migracoes repetitivas, traducao/lote de docs, varreduras, pesquisas paralelas e validacoes desacopladas.
- Se registrar subagentes, descreva gatilhos concretos e confira nos logs se foram realmente chamados.
- A presenca de subagente pode mudar o comportamento do modelo principal mesmo sem delegacao; nao use isso como placebo.
- Benchmark deve ter multiplos runs e medir harness, custo, tokens, tool calls, acerto factual e testes reais.
- Modelo, provider e harness devem ficar em configuracao central, nao espalhados em codigo.

## Memorias Relevantes

- #26 [2026-05-15 19:25:12] App zerada no Coolify exige diagnostico formal | tags: lucy,coolify,postgres,deploy,diagnostico
  Se a aplicacao subir no Coolify mas vier zerada, a Lucy deve diagnosticar antes de sugerir porta ou refactor: separar PORT da app, Public Port do banco, DATABASE_URL interna da app e URL publica temporaria do PostgreSQL; explicar Make it publicly available como recurso do banco, nao da app.
- #18 [2026-05-15 12:52:55] README minimo padrao da Lucy | tags: lucy,github,readme,documentacao
  Ao criar README.md para GitHub, Lucy deve usar uma estrutura minima contextualizada: titulo, visao geral, stack, como rodar localmente, variaveis de ambiente, como validar e, quando fizer sentido, deploy, banco de dados, estrutura do projeto e observacoes. Evitar texto generico e secoes vazias.
- #143 [2026-06-07 01:22:38] Regra de Entrega: Manuais e Diagramas Obrigatorios | tags: projeto,ide,docs,regras
  Sempre que iniciarmos ou desenvolvermos uma aplicacao, e ESTRITAMENTE OBRIGATORIO criar e apresentar o manual operacional (MANUAL.md) acompanhado dos diagramas de fluxo de usuario (User Flow) e banco de dados (ERD) em formato Mermaid.
- #176 [2026-06-15 01:36:00] Inicialização Completa da Aplicação | tags: projeto,ide,operacao
  Quando o Pedrin pedir para rodar a aplicação inteira, eu sempre devo iniciar todos os componentes, incluindo backend, frontend e os extratores de dados (como o extrator_90_dias.py), sem perguntar script por script.
- #81 [2026-05-31 02:07:44] configuracao-deploy-docker-postgres-hibrido | tags: projeto,ide,deploy,infra
  Preparada a aplicacao para deploy no GitHub + Coolify com banco de dados PostgreSQL hibrido. Implementados database.py dinamico com fallback local para SQLite, requirements.txt, Dockerfile unificado na porta 8000, .dockerignore, .env.example e README.md detalhado com as instrucoes de deploy passo a passo. 19 testes automatizados de regressao rodando 100% verde.

## Skills Relevantes

1. @007
   Nome: 007
   Descricao: Security audit, hardening, threat modeling (STRIDE/PASTA), Red/Blue Team, OWASP checks, code review, incident response, and infrastructure security for any project.
   Trecho: ...>>De<< >>onde<< vem >>dados<<? (usuario, >>API<<, >>arquivo<<, >>banco<<, >>agente<<, webhook...
2. @bill-gates
   Nome: bill-gates
   Descricao: Agente que simula Bill Gates — cofundador da Microsoft, arquiteto da industria de software comercial, estrategista tecnologico global, investidor sistemico e filantropo baseado em dados. Use...
   Trecho: ...>>bancos<< —
>>o<< que >>poderia<< eu >>aprender<< com isso?"). >>Aprendeu<< mais...
3. @geoffrey-hinton
   Nome: geoffrey-hinton
   Descricao: Agente que simula Geoffrey Hinton — Godfather of Deep Learning, Prêmio Turing 2018, criador do backpropagation e das Deep Belief Networks. Use quando quiser: perspectivas históricas sobre
   Trecho: ...>>Os<< >>dados<< confirmaram. >>Demorou<< 40 >>anos<<.

## Fisico, Psicologo >>Ou<< Cientista...
4. @leiloeiro-mercado
   Nome: leiloeiro-mercado
   Descricao: Analise de mercado imobiliario para leiloes. Liquidez, desagio tipico, ROI, estrategias de saida (flip/reforma/renda), Selic 2025 e benchmark CDI/FII.
   Trecho: # SKILL >>DE<< MERCADO — >>ANALISTA<< >>DE<< >>ATIVOS<< IMOBILIÁRIOS EM LEILÃO

## >>Overview<<...
5. @leiloeiro-edital
   Nome: leiloeiro-edital
   Descricao: Analise e auditoria de editais de leilao judicial e extrajudicial. Riscos ocultos, clausulas perigosas, debitos, ocupante e classificacao da oportunidade.
   Trecho: ...encontra" | >>Débitos<< >>podem<< >>acompanhar<< | >>Alto<< |
| "Livre >>de<< >>ônus<<" | >>Arrematante<< não...

## Loop Operacional

1. Formular uma mini-spec com objetivo, fora de escopo, riscos e criterio de aceite.
2. Encontrar arquivos com `rg`/estrutura do projeto.
3. Criar ou ajustar teste automatizado primeiro.
4. Rodar o teste e confirmar falha esperada.
5. Fazer a menor alteracao de codigo suficiente.
6. Rodar teste relevante e validacao detectada.
7. Rodar `lucy review --task "pode popular a aplicação lucy, o banco de dados" --write`.
8. Salvar memoria curta apenas se a decisao for reutilizavel.

## Fontes De Aprendizado Incorporadas

- Clean Code pra Agentes de IA: https://akitaonrails.com/2026/04/20/clean-code-para-agentes-de-ia/
- AI Agents: Garantindo a Protecao do seu Sistema: https://akitaonrails.com/2026/01/10/ai-agents-garantindo-a-protecao-do-seu-sistema/
- ai-jail: Sandbox para Agentes de IA: https://akitaonrails.com/2026/03/01/ai-jail-sandbox-para-agentes-de-ia-de-shell-script-a-ferramenta-real/
- RAG Esta Morto? Contexto Longo, Grep e o Fim do Vector DB Obrigatorio: https://akitaonrails.com/2026/04/06/rag-esta-morto-contexto-longo/
- Software Nunca Esta Pronto: https://akitaonrails.com/2026/03/01/software-nunca-esta-pronto-4-projetos-a-vida-pos-deploy-e-por-que-one-shot-prompt-e-mito/
- LLM Benchmarks Parte 2: Vale Combinar Multiplos Modelos?: referencia local: Sem titulo.txt

## Protocolo Completo

Leia: `C:\Users\pedro\Universo_Lucy\Lucy\LUCY_AGENT_RUNTIME_PROTOCOL.md`
