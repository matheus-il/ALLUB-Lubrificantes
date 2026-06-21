# Lucy GSD Task Pack

Tarefa: pode popular a aplicação lucy, o banco de dados  
Workspace: `C:\Users\pedro\Desktop\ALLUB`  
Cerebro central: `C:\Users\pedro\Universo_Lucy\Lucy`

## Contexto Inicial

Use antes:

```powershell
lucy context --query "pode popular a aplicação lucy, o banco de dados"
```

Memorias relevantes:

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

Skills relevantes:

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

## Mini-Spec

- Problema:
- Objetivo:
- Fora de escopo:
- Arquivos provaveis:
- Comportamento esperado:
- Criterios de aceite:
- Riscos:
- Validacao:

## Plano

- [ ] Ler arquivos relevantes.
- [ ] Confirmar padroes do projeto.
- [ ] Ler `.lucy/TEST_FIRST_PLAN.md`.
- [ ] Criar ou ajustar teste automatizado antes de editar codigo.
- [ ] Rodar o teste e confirmar falha esperada.
- [ ] Implementar a menor mudanca suficiente.
- [ ] Rodar teste relevante e validacao disponivel.
- [ ] Registrar memoria se houver decisao reutilizavel.

## Gates Obrigatorios

- [ ] Test-first foi cumprido antes da implementacao.
- [ ] Escopo nao foi reduzido silenciosamente.
- [ ] Mudancas do usuario foram preservadas.
- [ ] Validacao foi rodada ou lacuna foi informada.
- [ ] Se a tarefa for sensivel, `lucy security --task "pode popular a aplicação lucy, o banco de dados"` foi usado.
- [ ] Se a tarefa envolver UI, `lucy ui --task "pode popular a aplicação lucy, o banco de dados"` foi usado.

## Protocolo

Leia: `C:\Users\pedro\Universo_Lucy\Lucy\LUCY_WORKFLOW_PROTOCOL.md`
