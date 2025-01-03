// CommonJs
const fastify = require('fastify')();
const fastifyView = require("@fastify/view");

fastify.register(fastifyView, {
    engine: {
        ejs: require("ejs")
    },
});

// Declare a route
fastify.get('/', function (request, reply) {
    reply.view('index.ejs');
});

// Run the server!
const port = process.env.PORT || 3000;
const host = '0.0.0.0';

fastify.listen({ port, host }, (err, address) => {
    console.info(`Servidor rodando em ${address}`);
});