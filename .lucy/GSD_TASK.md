# Lucy GSD Task Pack

Tarefa: AGOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA SIMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK FICOU MAGNIFICO !!!! KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK SÓ QUE UMA ANIMAÇÃO PAROU... a gotinha não funciona mais kkkkkkkkkkkkkkkkkkkk Pode verificar por gentileza  
Workspace: `C:\Users\pedro\Desktop\ALLUB`  
Cerebro central: `C:\Users\pedro\Universo_Lucy\Lucy`

## Contexto Inicial

Use antes:

```powershell
lucy context --query "AGOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA SIMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK FICOU MAGNIFICO !!!! KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK SÓ QUE UMA ANIMAÇÃO PAROU... a gotinha não funciona mais kkkkkkkkkkkkkkkkkkkk Pode verificar por gentileza"
```

Memorias relevantes:

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

Skills relevantes:

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
- [ ] Se a tarefa for sensivel, `lucy security --task "AGOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA SIMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK FICOU MAGNIFICO !!!! KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK SÓ QUE UMA ANIMAÇÃO PAROU... a gotinha não funciona mais kkkkkkkkkkkkkkkkkkkk Pode verificar por gentileza"` foi usado.
- [ ] Se a tarefa envolver UI, `lucy ui --task "AGOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOORAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA SIMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK FICOU MAGNIFICO !!!! KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK SÓ QUE UMA ANIMAÇÃO PAROU... a gotinha não funciona mais kkkkkkkkkkkkkkkkkkkk Pode verificar por gentileza"` foi usado.

## Protocolo

Leia: `C:\Users\pedro\Universo_Lucy\Lucy\LUCY_WORKFLOW_PROTOCOL.md`
