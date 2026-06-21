# Lucy Frontend Excellence

Tarefa: AGOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA SIMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK FICOU MAGNIFICO !!!! KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK SÓ QUE UMA ANIMAÇÃO PAROU... a gotinha não funciona mais kkkkkkkkkkkkkkkkkkkk Pode verificar por gentileza  
Workspace: `C:\Users\pedro\Desktop\ALLUB`  
Cerebro central: `C:\Users\pedro\Universo_Lucy\Lucy`

## Stack E Contexto

- Framework/roteador:
- Gerenciador de pacotes:
- Design system existente:
- Biblioteca de componentes:
- Estilo/CSS:
- Testes frontend existentes:
- Comandos disponiveis:

## Decisoes De Arquitetura

- [ ] Preservar padroes locais antes de adicionar biblioteca.
- [ ] Separar estado local, URL state e server state.
- [ ] Em Next.js App Router, usar Server Components para dados e Client Components so para interatividade.
- [ ] Nao expor tokens, secrets, queries sensiveis ou regras privadas no bundle do cliente.
- [ ] Usar Suspense/loading segmentado quando houver dados lentos.
- [ ] Evitar fetch em `useEffect` se o framework oferece fetch no server.

## Componentes E Design System

- [ ] Reusar componentes existentes.
- [ ] Definir tokens ou seguir tokens atuais.
- [ ] Cobrir estados default/hover/focus/disabled/loading/error/empty/selected.
- [ ] Usar semantica nativa primeiro.
- [ ] Para widgets complexos, checar WAI-ARIA APG ou usar Radix/React Aria/shadcn/Chakra.
- [ ] Criar Storybook/stories quando houver componente reutilizavel ou estado complexo.

## Estilo Visual Preferido

- [ ] Considerar glassmorphism/liquid glass como primeira direcao visual quando o produto permitir.
- [ ] Criar tokens para background translucido, blur, borda, shadow, highlight e saturacao.
- [ ] Usar `backdrop-filter` e `-webkit-backdrop-filter` com fallback solido.
- [ ] Evitar aplicar vidro em tudo; priorizar areas de chrome, overlay e destaque.
- [ ] Conferir contraste, performance e responsividade em mobile.

## Formularios

- [ ] Labels, mensagens de erro e foco no primeiro erro.
- [ ] Validacao server-side como fonte de verdade.
- [ ] Zod/schema equivalente para dados vindos de bordas.
- [ ] React Hook Form quando o formulario for complexo ou grande.
- [ ] Actions/Server Functions/useOptimistic quando a stack suportar e melhorar a experiencia.

## Acessibilidade

- [ ] Navegacao por teclado.
- [ ] Foco visivel.
- [ ] Contraste suficiente.
- [ ] Texto nao depende apenas de cor.
- [ ] Tamanho de toque adequado.
- [ ] axe-core/addon a11y quando houver ambiente executavel.

## Performance

- [ ] Revisar imports pesados e client boundary.
- [ ] Otimizar imagens/fontes/scripts de terceiros.
- [ ] Evitar re-render caro em listas, tabelas e dashboards.
- [ ] Virtualizar listas grandes se necessario.
- [ ] Testar desktop e mobile sem overflow.

## Verificacao Recomendada

- [ ] `npm run lint`
- [ ] `npm run typecheck`
- [ ] `npm run build`
- [ ] React Testing Library para comportamento de componentes.
- [ ] Playwright para fluxos e responsividade.
- [ ] Storybook/test-runner ou visual regression quando existir.

## Memorias Relevantes

- #35 [2026-05-25 17:50:32] canal-dinamico-loja-furos-estoque | tags: projeto,ide,baselinker,database,frontend,prioridade
  Mapeado dinamicamente a respectiva loja originaria da API do BaseLinker (campo order_page) para a coluna canal no WMS como 'FURO - {NomeDaLoja}' nas OPs de Furo de Estoque. A presenca da palavra 'FURO' mantem 100% a compatibilidade de maxima prioridade de ordenacao no topo e os badges com chamas (emoji fogo) no frontend de producao.
- #187 [2026-06-17 17:13:38] Etiqueta Pai para Cubas | tags: cuba,lote,palete,wms
  Habilitação da funcionalidade de Etiqueta Pai (recebimento em lote) para Cubas, removendo a restrição de fabrica.cuba no frontend index.html.
- #218 [2026-06-21 00:16:46] Logo Animada ALLUB | tags: logo,animejs,frontend
  Refatorado o SVG para alta fidelidade com setas simétricas de raio 80, engrenagem de raio 48 e animação contínua de gotejamento com fade-out de 1250ms no Anime.js v4
- #176 [2026-06-15 01:36:00] Inicialização Completa da Aplicação | tags: projeto,ide,operacao
  Quando o Pedrin pedir para rodar a aplicação inteira, eu sempre devo iniciar todos os componentes, incluindo backend, frontend e os extratores de dados (como o extrator_90_dias.py), sem perguntar script por script.
- #202 [2026-06-19 14:58:10] Filtro de multiplas lojas na Sidebar do integrador Magalu | tags: sidebar,lojas,filtro,javascript
  Adicionado seletor de lojas (Lopazzi, Artto, Rocco) na Sidebar e implementado filtro de dados em tempo real no frontend javascript com base na chave store adicionada nos registros de chat.

## Skills Relevantes

1. @react-nextjs-development
   Nome: react-nextjs-development
   Descricao: React and Next.js 14+ application development with App Router, Server Components, TypeScript, Tailwind CSS, and modern frontend patterns.
   Trecho: # >>React<</Next.js Development Workflow

## Overview

Specialized workflow for building...
2. @react-modernization
   Nome: react-modernization
   Descricao: Upgrade React applications to latest versions, migrate from class components to hooks, and adopt concurrent features. Use when modernizing React codebases, migrating to React Hooks, or upgrading to...
   Trecho: # >>React<< Modernization

Master >>React<< version upgrades, class to hooks migration...
3. @frontend-mobile-development-component-scaffold
   Nome: frontend-mobile-development-component-scaffold
   Descricao: You are a React component architecture expert specializing in scaffolding production-ready, accessible, and performant components. Generate complete component implementations with TypeScript, tests, s
   Trecho: # >>React<</>>React<< Native Component Scaffolding

You are a >>React<< component...
4. @expo-tailwind-setup
   Nome: expo-tailwind-setup
   Descricao: Set up Tailwind CSS v4 in Expo with react-native-css and NativeWind v5 for universal styling
   Trecho: # Tailwind CSS Setup for Expo with >>react<<-native-css

This...
5. @senior-frontend
   Nome: senior-frontend
   Descricao: Frontend development skill for React, Next.js, TypeScript, and Tailwind CSS applications. Use when building React components, optimizing Next.js performance, analyzing bundle sizes, scaffolding frontend projects, implementing accessibility, or reviewing frontend code quality.
   Trecho: ...>>React<<.>>ReactNode<<;
}

export function Button({ className, children }: ButtonProps) {
  return {children...
6. @cc-skill-frontend-patterns
   Nome: cc-skill-frontend-patterns
   Descricao: Frontend development patterns for React, Next.js, state management, performance optimization, and UI best practices.
   Trecho: # Frontend Development Patterns

Modern frontend patterns for >>React<<, Next.js...
7. @react-native-architecture
   Nome: react-native-architecture
   Descricao: Build production React Native apps with Expo, navigation, native modules, offline sync, and cross-platform patterns. Use when developing mobile apps, implementing native integrations, or architecti...
   Trecho: # >>React<< Native Architecture

Production-ready patterns for >>React<< Native development...
8. @dependency-upgrade
   Nome: dependency-upgrade
   Descricao: Manage major dependency version upgrades with compatibility analysis, staged rollout, and comprehensive testing. Use when upgrading framework versions, updating major dependencies, or managing brea...
   Trecho: ...Update lifecycle methods
npx >>react<<-codeshift \
  --parser tsx \
  --transform >>react<<...

## Radar GitHub

- shadcn/ui: componentes acessiveis e customizaveis com codigo no projeto.
- Radix Primitives: primitivas acessiveis para design systems React.
- React Spectrum/React Aria: comportamento e acessibilidade robustos.
- Storybook: desenvolvimento, documentacao e testes de componentes isolados.
- Testing Library: testes que imitam o uso real.
- Playwright: e2e, viewports e browsers reais.
- axe-core: acessibilidade automatizada junto dos testes.
- TanStack Query: server state, cache e mutacoes.
- React Hook Form + Zod: formularios e validacao tipada.

## Protocolo

Leia: `C:\Users\pedro\Universo_Lucy\Lucy\LUCY_FRONTEND_PROTOCOL.md`
