# Lucy GSD Task Pack

Tarefa: Planejar a aplicacao Allub Lubrificantes, mobile-first, cadastro de clientes e produtos, com orcamento zero e persistencia free tier  
Workspace: `C:\Users\pedro\Desktop\ALLUB`  
Cerebro central: `C:\Users\pedro\Universo_Lucy\Lucy`

## Contexto Inicial

Use antes:

```powershell
lucy context --query "Planejar a aplicacao Allub Lubrificantes, mobile-first, cadastro de clientes e produtos, com orcamento zero e persistencia free tier"
```

Memorias relevantes:

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

Skills relevantes:

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
- [ ] Se a tarefa for sensivel, `lucy security --task "Planejar a aplicacao Allub Lubrificantes, mobile-first, cadastro de clientes e produtos, com orcamento zero e persistencia free tier"` foi usado.
- [ ] Se a tarefa envolver UI, `lucy ui --task "Planejar a aplicacao Allub Lubrificantes, mobile-first, cadastro de clientes e produtos, com orcamento zero e persistencia free tier"` foi usado.

## Protocolo

Leia: `C:\Users\pedro\Universo_Lucy\Lucy\LUCY_WORKFLOW_PROTOCOL.md`
