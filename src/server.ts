// Importando as libs
import express from "express";
import dotenv from "dotenv";
import mustacheExpress from "mustache-express";
import path from "path";
import mainRoutes from './routes/index';

dotenv.config();

const server = express();

server.set('view engine', 'mustacheExpress');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustacheExpress', mustacheExpress());

server.use(express.static(path.join(__dirname, '../public')));

// Rotas
server.use(mainRoutes);

server.use((req, res) => {
    res.status(404).send('Página não encontrada');
})

server.listen(process.env.PORT, () => {
    console.log('Servidor rodando em http://localhost:3000');
})