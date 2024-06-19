# Git Find

## Teste Técnico

- Empresa: Tecnorise.
- Aplicação Front-End com React e Redux utilizando GraphQL.
- Autor: Robson Ferreira.

### Visão Geral do Projeto

O Git Find é um aplicativo web desenvolvido em React com GraphQL, utilizando a API pública do GitHub para buscar informações de perfil de usuários. O estado global da aplicação é gerenciado pelo Redux, proporcionando uma experiência dinâmica e eficiente.

### Estrutura Essencial

#### Descrição do Aplicativo

O Git Find permite aos usuários buscar e visualizar informações detalhadas de perfis do GitHub de forma rápida e organizada.

### Instalação

Siga os passos abaixo para configurar e executar o Git Find em seu ambiente local:

#### Pré-requisitos

Certifique-se de ter o Node.js instalado. Caso não tenha, você pode baixá-lo em [nodejs.org](https://nodejs.org/).

#### Tecnologias

- React
- TypeScript
- HTML
- SCSS
- Redux
- GraphQL
- React Modal
- React Sidebar

#### Documentação

- [Documentação do Projeto](https://docs.google.com/document/d/1rg0E-S7HjE9chbFbpI8EiZ7bWL2m900FQOHwCWXqAyA/edit#heading=h.pn9rvvs2mmbn)
- [Instruções do Teste](https://docs.google.com/document/d/1sJYW5UXxLzkvIRNNnHhB_5-hjAkC1VTUuxFlkv4MJc8/edit)

#### Passo a Passo

1. **Clonar o repositório**

   ```bash
   git clone https://seu-repositorio-gitfind.git
   cd gitfind
   ```

2. **Instalar as dependências**

   ```bash
   npm install
   ```

3. **Instalar React Router**

   ```bash
   npm install react-router-dom
   ```

4. **Instalar React Icons**

   ```bash
   npm install react-icons
   ```

5. **Instalar React Pro Sidebar**

   ```bash
   npm install react-pro-sidebar
   ```

6. **Instalar Redux Toolkit**

   ```bash
   npm install @reduxjs/toolkit
   ```

7. **Instalar React Redux**

   ```bash
   npm install react-redux
   ```

8. **Instalar Apollo Client para GraphQL**

   ```bash
   npm install @apollo/client graphql
   ```

9. **Configurar variáveis de ambiente**

   Crie um arquivo `.env` na raiz do projeto e adicione a URL da API do GitHub:

   ```plaintext
   REACT_APP_GITHUB_API_URL=https://api.github.com/users
   ```

10. **Iniciar o servidor de desenvolvimento**

    ```bash
    npm start
    ```

11. **Acessar o aplicativo**

    Abra seu navegador e vá para [http://localhost:3000](http://localhost:3000) para visualizar o Git Find em ação.

12. **Autenticação**

    É necessário gerar uma autenticação do GitHub para utilização da API e configurar no sistema.

### Como Gerar Autenticação para utilizar a API com GraphQL

1. **Acessar Configurações de Conta**

   Primeiramente, acesse o site do GitHub e faça login na sua conta.

2. **Ir para Configurações de Segurança**

   No canto superior direito, clique na sua foto de perfil e selecione "Settings" (Configurações) no menu suspenso.

3. **Navegar para Tokens Pessoais**

   No menu lateral esquerdo, clique em "Developer settings" (Configurações de desenvolvedor).

4. **Gerar um Novo Token de Acesso**

   - No menu do lado esquerdo, selecione "Personal access tokens" (Tokens de acesso pessoal).
   - Clique em "Generate new token" (Gerar novo token).

5. **Preencher Informações do Token**

   - Dê um nome ao seu token para identificação (por exemplo, "Token para API GitHub GraphQL").
   - Selecione os escopos (scopes) necessários. Para utilizar a API GraphQL do GitHub, você precisará pelo menos dos escopos `repo` e `user`. Se precisar de acesso a recursos mais específicos, selecione os escopos apropriados.

6. **Gerar o Token**

   Após selecionar os escopos necessários, clique em "Generate token" (Gerar token).

7. **Copiar o Token**

   - Após a geração, o GitHub exibirá o token gerado. **Atenção**: Este token é exibido apenas uma vez por motivos de segurança. Certifique-se de copiá-lo e armazená-lo de forma segura em um local seguro, como um gerenciador de senhas.

8. **Utilizar o Token na sua Aplicação**

   - Para utilizar o token na sua aplicação, você pode passá-lo como um cabeçalho de autorização (Authorization header) nas suas requisições HTTP para a API GraphQL do GitHub.

Instale o dotenv

```bash
npm install dotenv
```

Crie na raiz do projeto o arquivo `.env` e dentro do arquivo coloque o seu token gerado pelo github.

```bash
REACT_APP_GITHUB_TOKEN=SEU_TOKEN
```

Obs: Ele precisa iniciar com REACT*APP_GITHUB*

depois coloque no seu arquivo client

```vscode
// src/apolloClient.ts
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
});

export default client;
```

Caso voce inicie a aplicação com o `Vite` é necessário essa configuração

```vscode
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": process.env,
  },
});

```

---

#### Requisitos de Negócio

- Busca dinâmica e eficiente.
- Tempo de resposta rápido.
- Exibição de informações detalhadas.

#### Requisitos Funcionais e Não-Funcionais

##### Funcionalidades

- Consulta personalizada de perfil do GitHub.
- Listagem de repositórios ordenada alfabeticamente e por avaliação.
- Integração com API pública do GitHub via GraphQL.
- Paginação dos repositórios para facilitar a navegação.

##### Requisitos Não-Funcionais

- Atualização dinâmica e eficiente dos dados.
- Segurança assegurada.
- Acessibilidade otimizada para dispositivos móveis.
- Interface amigável e responsiva.

#### Arquitetura e Design

- Interface desenvolvida em React com TypeScript (TSX).
- Estilização utilizando SCSS para uma experiência visual aprimorada.
- Utilização de Redux para gerenciamento global de estado.
- Integração com API pública do GitHub utilizando GraphQL para consultas personalizadas.

---

### Desenvolvimento

O Git Find foi desenvolvido utilizando práticas modernas de desenvolvimento web, focando em desempenho, acessibilidade e usabilidade.

---

© 2024 Git Find. Criado por Robson Ferreira.
