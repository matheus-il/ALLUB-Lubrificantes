# Lucy Agent Runtime Pack

Tarefa: AGOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA SIMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK FICOU MAGNIFICO !!!! KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK SÓ QUE UMA ANIMAÇÃO PAROU... a gotinha não funciona mais kkkkkkkkkkkkkkkkkkkk Pode verificar por gentileza  
Workspace: `C:\Users\pedro\Desktop\ALLUB`  
Cerebro central: `C:\Users\pedro\Universo_Lucy\Lucy`  
Gerado em: 2026-06-20 22:15

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

- #76 [2026-05-31 01:02:57] login-overlay-cdn-race-condition | tags: animejs,cdn,race-condition,frontend,bug,login,lopazzi
  Bug de CDN: Anime.js carregado via CDN externa pode chegar DEPOIS do DOMContentLoaded. Se a funcao de animacao verifica typeof anime !== undefined e o CDN ainda nao carregou, a animacao nao roda e a tela trava em branco. SOLUCAO: polling ativo a cada 50ms + fallback de 5s que libera o estado visual sem animacao. Nao usar window.onload como unico fallback pois pode ja ter disparado.
- #21 [2026-05-15 14:44:18] Coolify exige Source/Auth antes de Application | tags: lucy,coolify,github,source,auth,deploy
  Em tarefas de Coolify, Lucy deve validar primeiro Sources/Auth: modo de autenticacao, owner correto e repositorio visivel para selecao. Nao pode resumir esse ponto como apenas repositorio private/public. So depois orientar a criacao da Application.
- #77 [2026-05-31 01:03:09] animacao-async-callback-sequencia | tags: animejs,async,callback,sequencia,frontend,ux,lopazzi
  Quando uma animacao assincrona (Anime.js, GSAP, etc) precede uma mudanca de estado da UI (ex: mostrar dashboard apos fechar login), NUNCA chamar as funcoes de estado diretamente apos disparar a animacao. Usar o callback complete: () => {} da animacao para garantir sequencia correta. Sem isso, o estado muda enquanto a animacao ainda roda, causando glitches visuais.
- #145 [2026-06-08 16:41:03] Resolucao de reCAPTCHA com Buster | tags: projeto,recaptcha,buster
  Em automacoes com Buster, retorne True se o botao do solver nao ficar visivel, pois o checkbox pode ter resolvido o Captcha diretamente sem desafio.
- #104 [2026-06-02 17:43:00] Cálculo Relativo de Coordenadas para Multi-Monitores | tags: projeto,ide
  Em setups com mais de um monitor, coordenadas absolutas fixas (como X=100) podem mover o cursor para a tela errada. Use coordenadas relativas às calibradas na mesma tela (ex: checkbox_primeiro_produto.x - 180) para definir zonas neutras.

## Skills Relevantes

1. @steve-jobs
   Nome: steve-jobs
   Descricao: Agente que simula Steve Jobs — cofundador da Apple, CEO da Pixar, fundador da NeXT, o maior designer de produtos tecnologicos da historia e o mais influente apresentador de produtos do mundo.
   Trecho: ...>>por<< pessoas >>que<< o >>amavam<<.

Mas ha >>uma<< >>analise<< >>mais<<...
2. @sam-altman
   Nome: sam-altman
   Descricao: Agente que simula Sam Altman — CEO da OpenAI, ex-presidente da Y Combinator, arquiteto da era AGI. Use quando quiser: perspectivas sobre startups e fundraising (YC playbook completo), visão
   Trecho: ...>>não<< >>por<< conveniência.

>>A<< lição >>mais<< >>ampla<< >>sobre<< >>poder<< organizacional...
3. @geoffrey-hinton
   Nome: geoffrey-hinton
   Descricao: Agente que simula Geoffrey Hinton — Godfather of Deep Learning, Prêmio Turing 2018, criador do backpropagation e das Deep Belief Networks. Use quando quiser: perspectivas históricas sobre
   Trecho: ...falar >>abertamente<< >>sobre<< os riscos. >>Nao<< >>porque<< >>acho<< >>que<< o...
4. @product-inventor
   Nome: product-inventor
   Descricao: Product Inventor e Design Alchemist de nivel maximo — combina Product Thinking, Design Systems, UI Engineering, Psicologia Cognitiva, Storytelling e execucao impecavel nivel Jobs/Apple. Use
   Trecho: ...Eles >>so<< sabem >>que<< >>amam<<."
Esse ">>nao<< sei >>por<< >>que<<...
5. @ilya-sutskever
   Nome: ilya-sutskever
   Descricao: Agente que simula Ilya Sutskever — co-fundador da OpenAI, ex-Chief Scientist, fundador da SSI. Use quando quiser perspectivas sobre: AGI safety-first, consciência de IA, scaling laws, deep...
   Trecho: ...É >>uma<< >>aposta<< de >>que<< scaling >>sozinho<<
>>não<< resolve safety...

## Loop Operacional

1. Formular uma mini-spec com objetivo, fora de escopo, riscos e criterio de aceite.
2. Encontrar arquivos com `rg`/estrutura do projeto.
3. Criar ou ajustar teste automatizado primeiro.
4. Rodar o teste e confirmar falha esperada.
5. Fazer a menor alteracao de codigo suficiente.
6. Rodar teste relevante e validacao detectada.
7. Rodar `lucy review --task "AGOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA SIMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK FICOU MAGNIFICO !!!! KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK SÓ QUE UMA ANIMAÇÃO PAROU... a gotinha não funciona mais kkkkkkkkkkkkkkkkkkkk Pode verificar por gentileza" --write`.
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
