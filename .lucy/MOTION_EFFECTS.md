# Lucy Motion Effects

Tarefa: AGOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA SIMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK FICOU MAGNIFICO !!!! KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK SÓ QUE UMA ANIMAÇÃO PAROU... a gotinha não funciona mais kkkkkkkkkkkkkkkkkkkk Pode verificar por gentileza  
Workspace: `C:\Users\pedro\Desktop\ALLUB`  
Cerebro central: `C:\Users\pedro\Universo_Lucy\Lucy`

## Intencao Do Movimento

- Atencao que o movimento deve guiar:
- Estado ou transicao que ele explica:
- Feedback que entrega ao usuario:
- Risco de distracao:
- Onde o movimento deve ser reduzido:

## Escolha Da Ferramenta

- [ ] CSS transition/keyframes para hover, focus, fade, slide e efeitos simples.
- [ ] Motion para React/Next com layout transitions, variants, gestures e componentes.
- [ ] GSAP para timelines, scroll animation, SVG, canvas/WebGL e controle fino.
- [ ] AutoAnimate para listas simples que entram, saem ou reordenam.
- [ ] React Spring para movimento fisico, drag, swipe e gestos continuos.
- [ ] Anime.js para SVG, DOM, stagger e sequencias leves fora de React.
- [ ] Lottie para ilustracoes vetoriais prontas.
- [ ] Rive para animacoes interativas com state machines.
- [ ] Theatre.js para cenas coreografadas e motion design de alta fidelidade.
- [ ] Lenis apenas quando smooth scroll/parallax for parte real da experiencia.

## Linguagem De Movimento

- [ ] Duracao curta 120-180ms para hover/focus.
- [ ] Duracao media 200-320ms para entradas, cards, modais e tabs.
- [ ] Duracao longa 450-700ms para hero, page transition ou cena editorial.
- [ ] Ease-out para entrada, ease-in para saida, ease-in-out para troca.
- [ ] Spring para interacoes fisicas.
- [ ] Stagger pequeno apenas quando ajuda escaneamento.
- [ ] Transform-origin coerente com a origem da acao.

## Glass + Motion

- [ ] Usar liquid highlights em hover/focus quando combinar com a UI.
- [ ] Animar vidro com fade, translate leve e blur/saturacao com moderacao.
- [ ] Usar sheen/specular sweep apenas em cards importantes.
- [ ] Evitar blur pesado continuo em areas grandes.
- [ ] Manter textos, tabelas e numeros estaveis para leitura.

## Performance

- [ ] Priorizar `transform` e `opacity`.
- [ ] Evitar animar layout, width/height, top/left, box-shadow pesado e blur continuo.
- [ ] Usar `will-change` com parcimonia.
- [ ] Pausar loops fora da viewport quando possivel.
- [ ] Testar mobile se houver blur, parallax, canvas, WebGL ou scroll effects.

## Acessibilidade

- [ ] Respeitar `prefers-reduced-motion`.
- [ ] Oferecer pausa/stop/hide para movimento automatico longo.
- [ ] Evitar flashes, vibracao, zoom forte, rotacoes e parallax agressivo.
- [ ] Manter foco de teclado visivel durante transicoes.
- [ ] Nao depender de movimento para informacao essencial.

## Verificacao Recomendada

- [ ] `npm run lint`
- [ ] `npm run typecheck`
- [ ] `npm run build`
- [ ] Playwright para fluxo animado em desktop/mobile quando existir.
- [ ] Teste manual com reduced motion.

## Memorias Relevantes

- #73 [2026-05-30 22:04:50] Login Neumórfico e HUD | tags: projeto,ide,ui,motion
  Redesign de UI/UX premium da tela de login Lopazzi usando neumorfismo tátil, halos de foco coloridos, radar rotativo HUD de fundo e animação cinemática sequencial no anime.js
- #142 [2026-06-07 01:17:53] Anime.js v4 com React e Cleanup | tags: react,animejs,motion
  Em Anime.js v4, importar de forma nomeada { animate, stagger } e usar o metodo revert() no retorno do useEffect para limpar completamente estilos aplicados e destruir as instancias de animacao.
- #190 [2026-06-18 11:27:50] Interface Painel Magalu | tags: magalu,ui,ux,glassmorphism,css
  Criada interface de atendimento do Magalu para a Lopazzi contendo layout de 3 colunas (listagem, chat ativo com selo de IA e detalhes da venda com acoes rapidas) em HTML/CSS Premium com Glassmorphism e paleta Magalu.
- #56 [2026-05-28 23:08:30] Redesign Premium UI/UX do Monitor de OPs | tags: ui,ux,redesign,glassmorphism,css
  Redesenhamos o cabecalho do Monitor de OPs para desacoplar as Acoes da Barra de Utilidades (Toolbar). Usamos estilos glassmorphism (backdrop-filter) e cores HSL customizadas para botoes neon e segmented tabs. Integridade do JS mantida.
- #77 [2026-05-31 01:03:09] animacao-async-callback-sequencia | tags: animejs,async,callback,sequencia,frontend,ux,lopazzi
  Quando uma animacao assincrona (Anime.js, GSAP, etc) precede uma mudanca de estado da UI (ex: mostrar dashboard apos fechar login), NUNCA chamar as funcoes de estado diretamente apos disparar a animacao. Usar o callback complete: () => {} da animacao para garantir sequencia correta. Sem isso, o estado muda enquanto a animacao ainda roda, causando glitches visuais.

## Skills Relevantes

1. @scroll-experience
   Nome: scroll-experience
   Descricao: Expert in building immersive scroll-driven experiences - parallax storytelling, scroll animations, interactive narratives, and cinematic web experiences. Like NY Times interactives, Apple product p...
   Trecho: ...100vh;
}
```

### >>GSAP<< Pin
```javascript
>>gsap<<.to('.content', {
  scrollTrigger: {
    trigger: '.section...
2. @3d-web-experience
   Nome: 3d-web-experience
   Descricao: Expert in building 3D experiences for the web - Three.js, React Three Fiber, Spline, WebGL, and interactive 3D scenes. Covers product configurators, 3D portfolios, immersive websites, and bringing ...
   Trecho: ...>>gsap<< from '>>gsap<<';
import ScrollTrigger from '>>gsap<</ScrollTrigger';

>>gsap<<.to...
3. @antigravity-design-expert
   Nome: antigravity-design-expert
   Descricao: Core UI/UX engineering skill for building highly interactive, spatial, weightless, and glassmorphism-based web interfaces using GSAP and 3D CSS.
   Trecho: ...complex 3D transforms
- **Animation:** >>GSAP<< (GreenSock) + ScrollTrigger for scroll-linked...
4. @threejs-skills
   Nome: threejs-skills
   Descricao: Create 3D scenes, interactive experiences, and visual effects using Three.js. Use when user requests 3D graphics, WebGL experiences, 3D visualizations, animations, or interactive 3D elements.
   Trecho: ...const timeline = >>gsap<<.timeline();
timeline
  .to(mesh.rotation, { y: Math...
5. @fixing-motion-performance
   Nome: fixing-motion-performance
   Descricao: Audit and fix animation performance issues including layout thrashing, compositor properties, scroll-linked motion, and blur effects. Use when animations stutter, transitions jank, or reviewing CSS/JS animation performance.
   Trecho: ...CSS, WAAPI, Motion, rAF, >>GSAP<<)
- refactoring janky interactions or transitions...

## Radar GitHub

- Motion: React/JS/Vue, layout transitions, springs, gestures e scroll-linked effects.
- GSAP: timelines, ScrollTrigger, SVG, canvas, WebGL e controle fino.
- React Spring: fisica/springs para interacoes naturais.
- AutoAnimate: animacao automatica de listas e reordenacao.
- Anime.js: CSS, SVG, DOM attributes e objetos JS.
- Lottie: animacoes vetoriais exportadas do After Effects.
- Rive: state machines e animacoes interativas.
- Theatre.js: motion design editor e cenas de alta fidelidade.
- Lenis: smooth scroll/parallax com cuidado de performance.

## Protocolo

Leia: `C:\Users\pedro\Universo_Lucy\Lucy\LUCY_MOTION_PROTOCOL.md`
