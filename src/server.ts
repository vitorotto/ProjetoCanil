// Importando as libs
import express from "express";
import dotenv from "dotenv";
import mustacheExpress from "mustache-express";
import path from "path";

dotenv.config();

const server = express();

server.set('view engine', 'mustacheExpress');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustacheExpress', mustacheExpress());

server.use(express.static(path.join(__dirname, '../public')));

// Rotas

server.listen(process.env.PORT)