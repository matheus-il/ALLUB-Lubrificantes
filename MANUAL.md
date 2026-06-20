# 📖 Manual do Usuário e Arquitetura - Allub Lubrificantes

Este manual descreve a arquitetura de banco de dados, o fluxo de navegação do usuário e os procedimentos de configuração e execução do sistema **Allub Lubrificantes**.

---

## 📊 Diagramas de Arquitetura

### 1. Diagrama de Fluxo e Navegação (User Flow)
O diagrama abaixo representa a jornada do usuário móvel dentro do aplicativo, desde a autenticação até o gerenciamento de registros nas abas.

```mermaid
graph TD
    A[Acesso ao App] --> B{Possui Sessão Ativa?}
    B -- Não --> C[Tela de Login / Cadastro]
    C -->|Autentica com Sucesso| D[Dashboard Principal]
    B -- Sim --> D
    
    D --> E[Bottom Tab Navigation]
    
    E --> F[Aba 1: Clientes]
    F --> F1[Busca de Clientes]
    F --> F2[Botão +: Cadastrar Cliente]
    F2 --> F2_1[Preenchimento CEP -> BrasilAPI]
    F2_1 --> F2_2[Validação de CPF/CNPJ]
    F2_2 --> F2_3[Validação de Duplicidade]
    F2_3 -->|OK| F2_4[Salvar no Supabase]
    F --> F3[Editar Cliente]
    F --> F4[Excluir Cliente]
    
    E --> G[Aba 2: Produtos]
    G --> G1[Busca por Código / Descrição]
    G1 --> G1_1[Lista Ordenada A-Z]
    G --> G2[Botão +: Cadastrar Produto]
    G2 --> G2_1[Código Gerado Sequencialmente]
    G2_1 -->|OK| G2_2[Salvar no Supabase]
    G --> G3[Editar Produto]
    G --> G4[Excluir Produto]
    
    E --> H[Aba 3: Ajustes]
    H --> H1[Visualizar Usuário Conectado]
    H --> H2[Status de Conexão Online]
    H --> H3[Botão: Sair da Conta]
    H3 --> C
```

---

### 2. Diagrama Entidade-Relacionamento (Banco de Dados)
O modelo de banco de dados utiliza a segurança do Supabase baseada em Row Level Security (RLS), isolando os registros de clientes e produtos por meio do identificador de usuário (`user_id`).

```mermaid
erDiagram
    USERS ||--o{ CLIENTES : "cadastra"
    USERS ||--o{ PRODUTOS : "cadastra"

    USERS {
        uuid id PK "Identificador único do usuário auth.users"
        string email "E-mail do usuário"
    }

    CLIENTES {
        uuid id PK "Chave primária autogerada"
        timestamp created_at "Data de criação"
        uuid user_id FK "Referência ao usuário logado"
        string cnpj_cpf "CPF ou CNPJ (Único por usuário)"
        string nome_fantasia "Nome comercial"
        string razao_social "Razão social da empresa"
        string cep "CEP do endereço"
        string rua "Logradouro completo"
        string numero "Número do local"
        string bairro "Bairro do local"
        string cidade "Cidade do local"
        string estado "UF do estado"
        string telefone_1 "Telefone principal (Obrigatório)"
        string telefone_2 "Telefone alternativo"
        string email "E-mail de contato do cliente"
    }

    PRODUTOS {
        uuid id PK "Chave primária autogerada"
        timestamp created_at "Data de criação"
        uuid user_id FK "Referência ao usuário logado"
        bigint codigo "Código sequencial automático (Identity)"
        string nome_descricao "Nome do produto ou lubrificante"
        numeric valor "Valor monetário do produto (R$)"
    }
```

---

## 🛠️ Guia de Inicialização e Execução

### Pré-requisitos
Certifique-se de possuir o [Node.js](https://nodejs.org/) instalado em seu computador.

### Passo 1: Instalação de Dependências
Abra o terminal na pasta raiz do projeto e execute:
```bash
npm install
```

### Passo 2: Configuração de Variáveis de Ambiente
Renomeie o arquivo `.env.example` para `.env` ou configure o arquivo `.env` existente com as suas chaves do Supabase:
```env
VITE_SUPABASE_URL=https://sua-url-do-supabase.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon-key-aqui
```

### Passo 3: Executar Banco de Dados (Supabase)
1. Acesse o console do seu projeto no Supabase.
2. Navegue até a seção **SQL Editor** e clique em **New Query**.
3. Copie o conteúdo do arquivo `supabase_schema.sql` presente na raiz deste projeto, cole-o no editor e clique em **Run**.
4. Isso criará as tabelas `clientes` e `produtos` e habilitará as políticas de segurança RLS.

### Passo 4: Executar Localmente
Para rodar o app localmente em modo de desenvolvimento:
```bash
npm run dev
```
O terminal exibirá a URL local (geralmente `http://localhost:5173`) para acessar o aplicativo móvel diretamente no seu navegador.

### Passo 5: Executar Testes
Para rodar a suíte de testes unitários com o Vitest:
```bash
npm run test
```

### Passo 6: Compilar para Produção
Para gerar a versão otimizada pronta para deploy:
```bash
npm run build
```
Os arquivos finais de produção serão gerados na pasta `/dist` e podem ser hospedados gratuitamente na Vercel, Netlify ou Cloudflare Pages.
