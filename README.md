Cadastro de Pessoas - Angular
Este é um aplicativo simples de cadastro de pessoas utilizando Angular, onde você pode adicionar, visualizar, editar e excluir informações de pessoas. 
O projeto também utiliza Bootstrap para o design.

Pré-requisitos
Antes de rodar o projeto, você precisa ter as seguintes ferramentas instaladas:
Node.js (versão 16 ou superior)
Angular CLI (versão 14 ou superior)
Git (para versionamento de código)

Como rodar o projeto
Siga os passos abaixo para executar o projeto localmente:

1. Clonar o repositório
Clone o repositório para o seu computador:
git clone https://github.com/nichtsmutely/cadastro-pessoas.git
Substitua nichtsmutely pelo seu nome de usuário no GitHub.

2. Navegar para a pasta do projeto
Entre na pasta do projeto:
cd cadastro-pessoas

4. Instalar as dependências
Instale todas as dependências do projeto usando o npm:
npm install

4. Rodar o projeto
Execute o comando abaixo para iniciar o servidor de desenvolvimento:
ng serve
O aplicativo estará disponível em http://localhost:4200.

5. Acessar o aplicativo
Abra seu navegador e acesse http://localhost:4200 para visualizar a aplicação em execução.
Como testar o aplicativo
Testes de funcionalidade
Adicionar Pessoa: Vá até a página de cadastro, preencha o formulário e clique em "Salvar".
Visualizar Pessoa: Após adicionar, as informações aparecerão na lista abaixo do formulário.
Editar Pessoa: Clique no botão de editar ao lado de qualquer pessoa cadastrada para alterar os dados.
Excluir Pessoa: Clique no botão de excluir para remover a pessoa da lista.

Testes de Validação
O formulário de cadastro possui validação para:
Nome (campo obrigatório)
E-mail (campo obrigatório e deve ser um e-mail válido)
Telefone (campo opcional)

Estrutura do Projeto
A estrutura do projeto é organizada da seguinte forma:

cadastro-pessoas/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── cadastro/
│   │   │   │   ├── cadastro.component.ts
│   │   │   │   ├── cadastro.component.html
│   │   │   │   └── cadastro.component.css
│   │   ├── models/
│   │   │   ├── pessoa.model.ts
│   │   └── services/
│   │       ├── pessoa.service.ts
├── angular.json
├── package.json
└── README.md
