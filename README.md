# Churras 
Sistema para ajudar a galera a marcar um Churras.

# Hospedagem
O projeto está hospedado no Heroku, com um banco de dados hospedado no Mongo Atlas.

Link da aplicação: https://churras-v2-client.herokuapp.com/

# Caso queira rodar localmente

## Pré-Requisitos
Para utilizar o projeto você necessita ter instalado:
- NodeJS (v6 ou superior)

## Como instalar
Navegue até a pasta em que deseja salvar o projeto e realize os seguintes comandos: 

```sh
$ git clone https://github.com/lukaspiccini/Churras_V2.git
$ cd Churras_V2
$ cd client
$ npm install
$ cd..
$ cd server
$ npm install
```

## Banco de Dados
Para o banco de dados, a aplicação está utilizando de um Cluster do Mongo Atlas disponibilizado por mim. Para obter as credenciais, basta entrar em contato em **lukaspiccini@hotmail.com**

Caso deseje alterar a conexão do banco de dados, basta acessar o arquivo **database.js** no projeto do **server** e alterar a conexão.
