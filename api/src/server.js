const express = require('express');
const logger = require('./functions/logger.js');
const path = require('path');
require('dotenv').config();

const administradorRoutes = require('./routes/administradorRoutes.js');
const clienteRoutes = require('./routes/clienteRoutes.js');
const filmeRoutes = require('./routes/filmeRoutes.js');
const generoRoutes = require('./routes/generoRoutes.js');

// Variaveis
const port = process.env.PORT;
const server = express();

// Middlewares
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.json());
server.use(logger);

// Rotas
server.use('/', administradorRoutes);
server.use('/', clienteRoutes);
server.use('/', filmeRoutes);
server.use('/', generoRoutes);

server.get('/', (req, res) => {
	return res.send('<h1>Servidor rodando ...<h1>');
});

server.listen(port, () => {
	console.log(`Servidor rodando na porta ${port} ...`);
});
