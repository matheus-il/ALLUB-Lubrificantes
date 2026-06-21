# Perfil Do Projeto Para O Lucy

Workspace: `C:\Users\pedro\Desktop\ALLUB`  
Cerebro central: `C:\Users\pedro\Universo_Lucy\Lucy`  
Gerado em: 2026-06-20 22:15

## Stack Detectada

- Node/JavaScript
- NPM
- TypeScript
- Vite

## Arquivos Raiz

DIR  .lucy
DIR  public
DIR  src
FILE .env (291 bytes)
FILE .env.example (121 bytes)
FILE .gitignore (332 bytes)
FILE AGENTS.md (4007 bytes)
FILE eslint.config.js (591 bytes)
FILE index.html (458 bytes)
FILE logo_allub.jpeg (146587 bytes)
FILE MANUAL.md (4689 bytes)
FILE package-lock.json (141072 bytes)
FILE package.json (1055 bytes)
FILE README.md (2425 bytes)
FILE REGRAS_ENTREGA.md (1520 bytes)
FILE supabase_schema.sql (3141 bytes)
FILE tsconfig.app.json (617 bytes)
FILE tsconfig.json (119 bytes)
FILE tsconfig.node.json (591 bytes)
FILE vite.config.ts (302 bytes)

## Validacoes Provaveis

- `npm run test`
- `npm run lint`
- `npm run build`

## Como O Agente Deve Usar

- Ler `AGENTS.md` do workspace.
- Ler `.lucy/TEST_FIRST_PLAN.md` antes de qualquer edicao de codigo.
- Ler `.lucy/AGENT_RUNTIME.md` e `.lucy/COMMAND_POLICY.md`.
- Rodar `lucy context --query "<tarefa>"`.
- Para tarefa media/grande, rodar `lucy gsd --task "<tarefa>" --write`.
- Para seguranca, rodar `lucy security --task "<tarefa>" --write`.
- Para UI/UX, rodar `lucy ui --task "<tarefa>" --write`.
- Para frontend, rodar `lucy frontend --task "<tarefa>" --write`.
- Para motion, rodar `lucy motion --task "<tarefa>" --write`.
- Antes de concluir, rodar `lucy review --task "<tarefa>" --write`.
