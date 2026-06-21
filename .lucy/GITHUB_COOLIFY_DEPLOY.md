# Playbook GitHub + Coolify + Contabo

Tarefa: Realizar o deploy da aplicação ALLUB Lubrificantes  
Workspace: `C:\Users\pedro\Desktop\ALLUB`  
Cerebro central: `C:\Users\pedro\Universo_Lucy\Lucy`

## Quando Usar

Use este playbook quando a tarefa envolver GitHub, Coolify, Contabo, Docker,
PostgreSQL, migracao SQLite -> PostgreSQL, deploy, dominio, SSL ou pos-go-live.

## Regra Principal

Nao trate deploy como um unico passo. O fluxo correto e:

```text
Raio-X -> Backup -> Baseline -> Refactor -> GitHub -> Coolify -> Migracao -> Auditoria -> Deploy -> Pos-go-live
```

## Gates Obrigatorios

- [ ] Confirmar projeto certo antes de qualquer mudanca.
- [ ] Classificar risco usando impacto, probabilidade e dificuldade de reversao.
- [ ] Consultar documentacao oficial quando houver deploy, infra, banco, DNS, SSL ou ferramenta externa sensivel.
- [ ] Mapear stack, entrypoint, dependencias, Dockerfile, porta e healthcheck.
- [ ] Mapear todos os acessos ao banco (`sqlite3`, `SQLAlchemy`, `DATABASE_URL`, `.db`).
- [ ] Diagnosticar se o problema e acesso espalhado, caminho local hardcoded ou falta de abstracao.
- [ ] Verificar se `README.md` existe na raiz; se nao existir, criar antes do primeiro push.
- [ ] Criar backup rastreavel antes de limpeza, migracao ou refactor amplo.
- [ ] Preservar `.env`, bancos locais, dumps e credenciais fora do Git.
- [ ] Nao aprovar ORM completo antes de baseline, testes e analise de risco.
- [ ] Rodar teste/compile/dry-run antes de deploy.
- [ ] Usar `GitHub App` como caminho preferencial para repo privado no Coolify.
- [ ] Criar PostgreSQL no mesmo projeto/ambiente da app.
- [ ] Usar `DATABASE_URL` interna no Coolify.
- [ ] Usar URL publica do PostgreSQL somente de forma temporaria para migracao local.
- [ ] Rodar migracao real somente depois do dry-run.
- [ ] Rodar auditoria SQLite x PostgreSQL antes do deploy final.
- [ ] Fechar PostgreSQL publico depois da migracao.
- [ ] Rotacionar segredos expostos.

## Matriz Oficial De Risco

Use antes de sugerir ou executar acoes sensiveis:

```text
Risco = Impacto x Probabilidade x Dificuldade de Reversao
```

Pontue cada eixo de 1 a 3:

- Impacto 1: local e reversivel.
- Impacto 2: afeta fluxo importante, integracao ou dados nao criticos.
- Impacto 3: afeta producao, dados reais, seguranca, dinheiro ou acesso.

- Probabilidade 1: caminho conhecido, testado e documentado no projeto.
- Probabilidade 2: ha incerteza moderada, versao externa ou configuracao nova.
- Probabilidade 3: ferramenta externa, comportamento desconhecido, erro atual ou pouca cobertura de teste.

- Reversao 1: facil desfazer.
- Reversao 2: exige backup, coordenacao ou ajuste manual.
- Reversao 3: dificil desfazer, envolve banco escrito, DNS, deploy remoto ou segredo exposto.

Faixas:

- 1 a 3: baixo risco, validacao simples.
- 4 a 8: medio risco, plano curto e evidencia.
- 9 a 18: alto risco, backup, dry-run, auditoria e confirmacao.
- 19 a 27: critico, parar, consultar documentacao oficial, rollback e aprovacao explicita.

Leia tambem: `C:\Users\pedro\Universo_Lucy\Lucy\LUCY_RISK_MATRIX_PROTOCOL.md`

## Gate De Documentacao Oficial

Antes de orientar ou executar tarefas de deploy, Coolify, Docker, GitHub,
PostgreSQL, cloud, DNS, SSL ou ferramenta externa sensivel:

- consultar a documentacao oficial do produto ou repositorio primario;
- usar fontes secundarias apenas como apoio;
- declarar incerteza se a fonte oficial nao puder ser consultada;
- nao inventar tela, botao, parametro, porta ou comportamento externo;
- registrar no plano qual documentacao foi usada e qual decisao ela sustenta.

## Gate De Source/Auth Antes Da Aplicacao

Antes de orientar a criacao da aplicacao no Coolify, a Lucy deve validar a
camada de `Sources/Auth`.

Checklist obrigatorio:

- confirmar o modo de autenticacao em `Sources`:
  `GitHub App`, `Deploy Key` ou token/PAT;
- diferenciar `visibilidade do repositorio` de `modo de autenticacao`;
- para repo privado, preferir `GitHub App`;
- confirmar se a integracao foi instalada no owner correto;
- confirmar se o repositorio aparece para selecao no Coolify;
- so depois seguir para `Application`.

Validacao esperada:

1. `Sources` configurado e salvo.
2. Repositorio visivel para selecao no Coolify.
3. Modo de autenticacao explicitamente informado na resposta.

Regra:

- nao iniciar passo de `Application` sem checklist de `Source/Auth`;
- nao resumir isso como apenas repo `private` ou `public`;
- se faltar evidencia de `Sources`, marcar como `pendente de validacao`.

## Gate De Build Pack Antes Da Aplicacao

Antes de orientar a criacao da aplicacao no Coolify, a Lucy deve verificar o
tipo de `Build Pack` com base no repositorio.

Regra de decisao:

- se existir `Dockerfile` na raiz ou no `Base Directory` usado pela app,
  sugerir `Dockerfile`;
- se existir `docker-compose.yml` ou `compose.yml` e a aplicacao depender dele,
  sugerir `Docker Compose`;
- se o projeto for um site estatico exportado e nao depender de runtime/server,
  considerar `Static`;
- se nao houver `Dockerfile` nem `compose`, mas houver stack suportada por
  autodetect (`package.json`, `requirements.txt`, `pyproject.toml`, etc.),
  considerar `Nixpacks`;
- se houver mais de um caminho possivel, marcar como `pendente de validacao`
  e explicar o motivo.

Checklist obrigatorio:

- confirmar quais arquivos de build existem;
- confirmar o `Base Directory` correto;
- confirmar se o projeto precisa de runtime de aplicacao;
- confirmar se o start depende de `Dockerfile`, `compose` ou autodetect.

Regra:

- nao assumir `Dockerfile` por habito;
- nao sugerir `Nixpacks` se o projeto depende claramente de `Dockerfile`
  customizado;
- nao sugerir `Static` se houver backend, banco, env vars sensiveis ou runtime.

## Formato Obrigatorio De Resposta Em Deploy

Em tarefas de GitHub/Coolify/Contabo/deploy, a Lucy deve responder em tres blocos:

1. Confirmado no codigo do projeto:
   arquivos, variaveis, porta, comando de start, Dockerfile, healthcheck, banco e scripts existentes.
2. Confirmado na documentacao oficial:
   regra/plataforma externa que foi validada (com produto/fonte oficial citada no texto).
3. Pendente de validacao no painel/ambiente:
   campos que dependem de verificacao manual no Coolify/Cloud/DNS e nao podem ser assumidos.

Quando houver Coolify, o bloco `Pendente de validacao no painel/ambiente` deve
incluir pelo menos:

- `Source/Auth` validado ou pendente;
- repositorio visivel para selecao ou pendente;
- `Build Pack` validado ou pendente;
- `Application` criada ou pendente;
- env vars/porta/healthcheck validados ou pendentes.

Regra de qualidade:

- se nao estiver confirmado no codigo ou na doc oficial, marcar como pendente;
- nao orientar acao critica com base em suposicao;
- usar linguagem explicita: "confirmado", "nao confirmado", "pendente".

## Gate De Colinha De Env Antes Do Deploy

Quando a tarefa envolver `Environment Variables`, Coolify, Docker, cloud,
PostgreSQL, API key, segredo, banco ou runtime remoto, a Lucy deve entregar uma
colinha operacional de env e nao apenas listar variaveis no texto.

Formato minimo obrigatorio:

```env
NOME_DA_VARIAVEL=<placeholder_ou_origem>
OUTRA_VARIAVEL=<placeholder_ou_origem>
```

Logo abaixo do bloco, explicar cada item com este padrao:

- nome da variavel;
- origem do valor (`confirmado no codigo`, `vem do banco`, `vem da credencial externa`,
  `vem do painel`, `valor manual`, `nao confirmado`);
- status: `confirmado`, `nao confirmado` ou `pendente`.

Regras:

- nao despejar variaveis soltas em prosa sem montar o bloco `.env`;
- nao assumir nome, formato ou valor de variavel sem evidencia;
- quando a origem depender do Coolify/PostgreSQL/DNS/terceiro, marcar como
  `pendente de validacao`;
- nunca imprimir segredo real, token real, chave privada, cookie ou senha;
- quando houver JSON/string especial em env, avisar se o formato esta
  `confirmado` ou `pendente`;
- porta, `DATABASE_URL`, secret key e comando de start devem aparecer no bloco
  de env quando fizerem parte da configuracao da app.

Quando existir diferenca entre execucao local e producao, a Lucy deve gerar
dois blocos separados:

1. `.env local`
2. `.env producao` ou `.env Coolify`

Padrao esperado:

```env
# .env local
DATABASE_URL=<fallback_local_ou_vazio_se_nao_aplicar>
PORT=<porta_local_se_confirmada>
```

```env
# .env producao
DATABASE_URL=<url_interna_ou_publica_confirmada>
PORT=<porta_de_runtime_confirmada>
```

Regra de uso:

- `env local` deve privilegiar SQLite/fallback local e valores para rodar no
  computador do desenvolvedor;
- `env producao/Coolify` deve privilegiar `DATABASE_URL`, segredos, flags e
  runtime remoto;
- quando uma variavel existir nos dois cenarios, manter a mesma chave e mudar
  apenas o valor/origem;
- quando a variavel so existir em um dos cenarios, explicar isso de forma
  explicita;
- se nao houver diferenca entre local e producao, a Lucy pode informar que um
  unico bloco atende os dois, mas isso deve estar `confirmado`.

Quando a tarefa pedir deploy, GitHub, Coolify ou preparacao de ambiente, a Lucy
deve gerar automaticamente estes artefatos de apoio quando houver env vars:

1. um `.env.example` contextualizado sem segredos reais;
2. uma colinha `.env local`;
3. uma colinha `.env producao` ou `.env Coolify`;
4. uma tabela `variavel -> origem -> onde preencher -> status`.

Estrutura minima do `.env.example`:

```env
NOME_DA_VARIAVEL=
OUTRA_VARIAVEL=
```

Estrutura minima da tabela:

```text
VARIAVEL | ORIGEM | ONDE PREENCHER | STATUS
```

Campo `ONDE PREENCHER` deve usar valores claros, por exemplo:

- `arquivo .env local`
- `Coolify > Environment Variables`
- `Coolify > Database > Postgres URL`
- `provedor externo`
- `nao confirmado`

Regra de automacao:

- se o projeto nao tiver `.env.example`, a Lucy deve propor ou criar um
  contextualizado ao projeto;
- se o projeto ja tiver `.env.example`, a Lucy deve revisar e complementar;
- em tarefas de Coolify, a tabela deve deixar explicito o que vai no banco, o
  que vai na aplicacao e o que fica so no local;
- a Lucy nao deve considerar a etapa de env concluida sem esses artefatos,
  salvo quando o projeto comprovadamente nao usar env vars.

## Diagnostico Obrigatorio Quando A App Sobe Zerada No Coolify

Se a aplicacao subir no Coolify mas aparecer "zerada", sem dados esperados,
sem SKUs, sem registros ou com comportamento de banco novo, a Lucy deve
responder primeiro com diagnostico e separacao de conceitos, antes de sugerir
porta, refactor ou upload manual.

Formato obrigatorio:

1. `Confirmado no codigo do projeto`
2. `Confirmado na documentacao oficial`
3. `Pendente de validacao no painel/ambiente`
4. `Conclusao tecnica`
5. `Separacao correta`
6. `Colinha correta para este caso`
7. `Proximo passo seguro`

Regra tecnica:

- separar explicitamente `porta da aplicacao` de `porta publica do banco`;
- separar `DATABASE_URL` interna da app de `DATABASE_URL` publica temporaria
  para import manual;
- verificar se a app sobe com fallback local (`SQLite`) quando `DATABASE_URL`
  estiver ausente;
- verificar se o banco remoto nasceu vazio e se a carga inicial depende de
  arquivo local, seed, script ou import externo;
- nao tratar "app abriu no navegador" como prova de que os dados foram migrados;
- nao culpar `PORT` sem confirmar antes `entrypoint`, `EXPOSE`, runtime real e
  variavel `PORT`.

Regra de explicacao:

- se existir opcao `Make it publicly available`, explicar que isso e do banco e
  nao da aplicacao;
- deixar claro quando a URL publica serve apenas para acesso externo/manual;
- para producao, priorizar `DATABASE_URL` interna da app;
- para import manual temporario, explicar quando usar a URL publica do banco;
- nunca misturar `Public Port` do PostgreSQL com `PORT` da aplicacao.

Checklist minimo:

- qual arquivo sobe a app de verdade (`run.py`, `CMD`, `entrypoint`, `serve`, etc.);
- qual porta a app realmente usa;
- se existe `DATABASE_URL` no projeto e como o fallback e decidido;
- se existe script de carga/import/seed;
- se o dado esperado depende de arquivo que nao foi para o GitHub;
- se o banco remoto esta vazio ou populado.

## Gate De README Antes Do GitHub

Antes de subir qualquer projeto para GitHub, confirme:

- existe `README.md` na raiz do projeto; e
- o conteudo foi escrito com base no contexto real do projeto, nao um texto generico.

Se `README.md` nao existir, o agente deve criar automaticamente antes do push.

Conteudo minimo esperado:

- nome e objetivo do projeto;
- stack principal;
- como rodar localmente;
- variaveis de ambiente necessarias sem expor segredos;
- como testar/validar;
- status de deploy, quando a tarefa envolver GitHub + Coolify + Contabo;
- observacoes importantes de banco, migracao ou arquitetura quando existirem.

Estrutura minima recomendada do `README.md`:

```md
# <Nome do Projeto>

Breve resumo do objetivo real do projeto em 2 a 4 linhas.

## Visao Geral
- problema que o projeto resolve;
- publico ou contexto de uso;
- status atual (em desenvolvimento, producao, piloto, etc.).

## Stack
- linguagens, framework principal, banco, servidor de aplicacao e infraestrutura relevante.

## Como Rodar Localmente
- pre-requisitos;
- instalacao de dependencias;
- configuracao do `.env`;
- comando para iniciar a aplicacao.

## Variaveis De Ambiente
- listar apenas nomes e funcao de cada variavel;
- nunca expor segredos reais.

## Como Validar
- comandos de teste, lint, smoke test ou verificacao manual minima.

## Deploy
- somente quando o projeto usar GitHub/Coolify/Contabo ou fluxo remoto;
- branch, Dockerfile, porta, healthcheck e observacoes de ambiente.

## Banco De Dados
- banco usado localmente;
- banco usado em producao;
- estrategia de migracao/auditoria, quando existir.

## Estrutura Do Projeto
- visao curta das pastas principais, quando isso ajudar.

## Observacoes
- riscos conhecidos, integracoes, limites ou decisoes arquiteturais relevantes.
```

Regra editorial:

- o README deve ser objetivo, util e especifico do projeto;
- evitar texto generico de IA;
- evitar secoes vazias;
- remover secoes que nao se aplicam;
- incluir Deploy e Banco De Dados somente quando fizer sentido.

Regra:

- nao deixar o repositorio sem `README.md` depois da preparacao para GitHub;
- nao depender do botao "Add a README" do GitHub;
- se houver `README.md`, atualizar conforme o contexto atual do projeto.

## Gate Tecnico De Banco Antes De Refatorar

Antes de sugerir SQLAlchemy, ORM ou migracao, responda objetivamente:

- Onde o banco e aberto hoje?
- Quantos modulos usam `sqlite3` diretamente?
- Existe camada unica de dados ou o acesso esta espalhado?
- Quais queries usam sintaxe especifica do SQLite?
- Quais tabelas e volumes precisam ser preservados?
- Existe script de backup, migracao e auditoria?
- O projeto ja tem `Dockerfile`, dependencias, `PORT` por env e healthcheck?

Regra de decisao:

- Se o problema for `sqlite3` espalhado ou caminho `.db` hardcoded, primeiro centralize o acesso.
- Para hibrido SQLite local + PostgreSQL producao, prefira adaptador fino ou `SQLAlchemy Core`.
- Use SQLAlchemy ORM completo so depois de testes, por tabelas/fluxos pequenos.
- Nao pedir Coolify como proximo passo se o projeto ainda nao esta empacotavel.

Pergunta segura para o usuario:

```text
Voce aprova a Fase 1 de centralizar a camada de dados e preparar suporte
hibrido SQLite/PostgreSQL, mantendo ORM completo como etapa posterior se for
necessario?
```

## Variaveis Padrao Da App

```env
PORT=8080
WAITRESS_THREADS=8
SECRET_KEY=<SECRET_KEY_FORTE>
DATABASE_URL=<POSTGRES_URL_INTERNA>
DB_CONNECT_TIMEOUT=20
DISABLE_SCHEDULER=1
DEBUG_ETIQUETAS=0
```

Use esse bloco apenas como ponto de partida. Em respostas de deploy, a Lucy
deve montar uma colinha `.env` especifica do projeto atual e marcar a origem de
cada variavel como `confirmado`, `nao confirmado` ou `pendente`. Quando local e
producao forem diferentes, montar dois blocos: `.env local` e `.env producao`.
Sempre que houver deploy/ambiente remoto, gerar tambem `.env.example` e tabela
`variavel -> origem -> onde preencher -> status`.

## Comandos De Migracao Quando Existirem No Projeto

```powershell
python migrar_sqlite_pg.py --sqlite-path controle_total.db
python migrar_sqlite_pg.py --sqlite-path controle_total.db --execute
python audit_migration.py
```

## Criterio Para Avancar

So considerar a etapa pronta quando houver evidencia objetiva:

- testes ou validacao local passaram;
- dry-run passou;
- auditoria retornou `RESULTADO: OK`;
- Coolify mostrou container `healthy`;
- app abriu no navegador;
- banco publico foi fechado no pos-go-live.

## Protocolo Completo

Leia: `C:\Users\pedro\Universo_Lucy\Lucy\LUCY_GITHUB_COOLIFY_PROTOCOL.md`
