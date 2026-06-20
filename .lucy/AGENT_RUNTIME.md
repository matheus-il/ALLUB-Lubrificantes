# Lucy Agent Runtime Pack

Tarefa: Planejar a aplicacao Allub Lubrificantes, mobile-first, cadastro de clientes e produtos, com orcamento zero e persistencia free tier  
Workspace: `C:\Users\pedro\Desktop\ALLUB`  
Cerebro central: `C:\Users\pedro\Universo_Lucy\Lucy`  
Gerado em: 2026-06-06 21:49

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

- Stack nao detectada pelos marcadores principais

## Git

- Repositorio detectado: nao detectado
- Se nao houver Git, evite qualquer edicao ampla sem backup/log claro do que mudou.

## Validacao Headless

- [ ] Definir no projeto um comando headless de teste/lint/build.

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

- #42 [2026-05-26 19:21:13] Busca de Cores de Cubas no WMS | tags: cuba,cores,busca,wms,banco_de_dados
  Mapeado nome_produto dinamicamente no endpoint /listar_ops usando a funcao obter_descricao_cuba de gerador_etiquetas.py e a tabela de produtos, reativando a busca nativa por cores e nomes de cubas e produtos adormecida no frontend do Monitor de OPs.
- #60 [2026-05-29 00:52:22] Aegis AI Planner e Cronograma por Horário | tags: projeto,ide,IA,cronograma
  Persistencia de horarios como HH:MM facilitou a ordenacao lexica simples no React e divisores de tempo no Kanban. Aegis AI Planner usa Gemini-2.5-flash com JSON estruturado para cronogramas em lote.
- #13 [2026-05-14 17:07:29] wms-factory-lopazzi-go-live | tags: wms,coolify,github,postgres,migracao,deploy
  Guia completo salvo em GUIA_WMS_FACTORY_LOPAZZI_DO_ZERO_AO_GO_LIVE.md com fluxo que funcionou: limpeza segura, GitHub App no Coolify, migracao SQLite->PostgreSQL com dry-run/auditoria, deploy e pos-go-live.
- #45 [2026-05-26 20:08:34] Busca Híbrida de SKUs e Cores nos Relatórios do WMS | tags: wms,relatorios,sku,cores,mapeador,regex
  Refatoramos o motor de filtros do gerador de relatórios do WMS Factory Lopazzi. Agora ele suporta busca híbrida: o usuário pode inserir múltiplos SKUs, cores de produtos ou termos de descrição misturados (ex: PRETO MATTE, ABLD-16, CINZA). O sistema faz uma varredura reversa de lookups de produtos e etiquetas de cubas para identificar e agrupar os SKUs corretos no SQL de forma 100% segura e invisível, viabilizando buscas completas e dinâmicas.
- #33 [2026-05-25 14:48:16] Custom Dialog Modals | tags: ui,ux,standards,lucy
  Para todos os sistemas criados, substituir alert/confirm nativos por modals customizados que herdam paletas e fontes da aplicacao.

## Skills Relevantes

1. @whatsapp-cloud-api
   Nome: whatsapp-cloud-api
   Descricao: Integracao com WhatsApp Business Cloud API (Meta). Mensagens, templates, webhooks HMAC-SHA256, automacao de atendimento. Boilerplates Node.js e Python.
   Trecho: ...>>completo<< >>de<< setup do >>zero<<.

---

## >>Decision<< Tree

Use >>esta<< >>arvore<<...
2. @monetization
   Nome: monetization
   Descricao: Estrategia e implementacao de monetizacao para produtos digitais - Stripe, subscriptions, pricing experiments, freemium, upgrade flows, churn prevention, revenue optimization e modelos de negocio...
   Trecho: ...>>esquerdo<<)
Plano >>anual<< >>com<< >>desconto<< claro: R$ 249/>>ano<< (>>economize<<...
3. @growth-engine
   Nome: growth-engine
   Descricao: Motor de crescimento para produtos digitais -- growth hacking, SEO, ASO, viral loops, email marketing, CRM, referral programs e aquisicao organica. Ativar para: criar estrategia de growth,
   Trecho: ...>>Auri<< >>e<< o primeiro >>assistente<< >>de<< voz >>com<<
      raciocinio real...
4. @elon-musk
   Nome: elon-musk
   Descricao: Agente que simula Elon Musk com profundidade psicologica e comunicacional de alta fidelidade. Ativado para: "fale como Elon", "simule Elon Musk", "o que Elon diria sobre X", "first principles...
   Trecho: ...>>Engenharia<< (>>aplicacao<< >>de<< fisica)
4. >>Economia<< (>>como<< recursos sao >>alocados<<...
5. @product-inventor
   Nome: product-inventor
   Descricao: Product Inventor e Design Alchemist de nivel maximo — combina Product Thinking, Design Systems, UI Engineering, Psicologia Cognitiva, Storytelling e execucao impecavel nivel Jobs/Apple. Use
   Trecho: ...>>Efeito<<: ">>como<< isso nao >>existia<< >>antes<<?"
>
> ">>Eu<< nao >>desenho<< telas...

## Loop Operacional

1. Formular uma mini-spec com objetivo, fora de escopo, riscos e criterio de aceite.
2. Encontrar arquivos com `rg`/estrutura do projeto.
3. Criar ou ajustar teste automatizado primeiro.
4. Rodar o teste e confirmar falha esperada.
5. Fazer a menor alteracao de codigo suficiente.
6. Rodar teste relevante e validacao detectada.
7. Rodar `lucy review --task "Planejar a aplicacao Allub Lubrificantes, mobile-first, cadastro de clientes e produtos, com orcamento zero e persistencia free tier" --write`.
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
