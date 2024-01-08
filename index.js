// Importa o módulo 'express' e o atribui à constante 'express'
const express = require("express");

// Cria uma instância do express e a atribui à constante 'app'
const app = express();

// Constante que recebe uma porta aleatória do Heroku ou, caso não exista, recebe por padrão a porta 3000
const port = process.env.PORT || 3000;

// Importa os dados do arquivo JSON localizado no caminho "./src/produtos/produtos.json" e os atribui à constante 'produtos'
const produtos = require("./src/produtos/produtos.json");

// Configuração de uma rota do tipo GET para o caminho "/produtos"
app.get("/produtos", (req, res) => {
    // Retorna os dados contidos na constante 'produtos' como uma resposta JSON
    return res.json(produtos);
});

// Inicia o servidor express na porta especificada (variável 'port') e executa uma função de callback quando o servidor está pronto
app.listen(port, () => {
    // Exibe no console a mensagem "servidor está rodando" quando o servidor está pronto
    console.log("Servidor está rodando");
});
