import mysql, { Connection, ConnectionOptions } from 'mysql2/promise';
import fastify, { FastifyRequest, FastifyReply } from 'fastify';
import cors from '@fastify/cors';

const app = fastify();
app.register(cors, {
    origin: '*',
    methods: ['GET', 'POST', 'DELETE']
  });



app.get('/', async (request: FastifyRequest, reply: FastifyReply) => {
    reply.send("Fastify Funcionando");
});




app.get('/Grimorio', async (request: FastifyRequest, reply: FastifyReply) => {
    try {
        const conn = await mysql.createConnection({
            host: "localhost",
            user: 'root',
            password: "",
            database: 'grimorio',
            port: 3306
        });

        const resultado = await conn.query("SELECT * FROM informa");
        const [dados, camposTabela] = resultado;
        reply.status(200).send(dados);


    } catch (erro: any) {
        if (erro.code === 'ECONNREFUSED') {
            console.log("ERRO: LIGUE O LARAGÃO => Conexão Recusada");
            reply.status(400).send({ mensagem: "ERRO: LIGUE O LARAGÃO => Conexão Recusada" });


        } else if (erro.code === 'ER_BAD_DB_ERROR') {
            console.log("ERRO: Crie um banco de dados com o nome definido na conexão :)");
            reply.status(400).send({ mensagem: "ERRO: Crie um banco de dados com o nome definido na conexão :)" });


        } else if (erro.code === 'ER_ACCESS_DENIED_ERROR') {
            console.log("ERRO: Confira o usuário e senha definidos na conexão:)");
            reply.status(400).send({ mensagem: "Confira o usuário e senha definidos na conexão:)" });


        } else if (erro.code === 'ER_NO_SUCH_TABLE') {
            console.log("ERRO: Você deve criar a tabela com o mesmo nome da sua QUERY :)");
            reply.status(400).send({ mensagem: "ERRO: Você deve criar a tabela com o mesmo nome da sua QUERY:)" });


        } else if (erro.code === 'ER_PARSE_ERROR') {
            console.log("ERRO: Você tem um erro de escrita em sua QUERY, confira: VÍRGULAS, PARENTESES E NOME DE COLUNAS");
            reply.status(400).send({ mensagem: "ERRO: Você tem um erro de escrita em sua QUERY, confira: VÍRGULAS, PARENTESES E NOME DE COLUNAS" });


        } else {
            console.log(erro);
            reply.status(400).send({ mensagem: "ERRO: NÃO IDENTIFICADO" });


        }
    }
});

app.post('/Grimorio', async (request: FastifyRequest, reply: FastifyReply) => {
    const { Nome, Tipodeocorrencia, Datadoevento, lugar, EntidadesEnvolvidas, Niveldeatividadeparanormal, Evidencias, RituaisRealizados } = request.body as any;
    
    try {

        const conn = await mysql.createConnection({
            host: "localhost",
            user: 'root',
            password: "",
            database: 'grimorio',
            port: 3306

        });

        // Inserir na tabela grimorio
        const resultado = await conn.query("INSERT INTO informa (Nome, Tipodeocorrencia, Datadoevento, lugar, EntidadesEnvolvidas, Niveldeatividadeparanormal, Evidencias, RituaisRealizados) VALUES (?,?,?,?,?,?,?,?)", 
            [Nome, Tipodeocorrencia, Datadoevento, lugar, EntidadesEnvolvidas, Niveldeatividadeparanormal, Evidencias, RituaisRealizados]);

        const [dados, camposTabela] = resultado;
        reply.status(200).send(dados);



    } catch (erro: any) {

    switch (erro.code) {
    case "ECONNREFUSED":

        console.log("Ops! Parece que o servidor não está respondendo. Verifique se o Laragon está ligado.");
        reply.status(400).send({ mensagem: "Ops! Não conseguimos conectar. Por favor, ligue o Laragon e tente novamente." });
        break;

    case "ER_BAD_DB_ERROR":

        console.log("Ops! O nome do banco de dados não foi encontrado. Verifique se o banco existe ou crie um com o nome configurado.");
        reply.status(400).send({ mensagem: "Ops! Banco de dados não encontrado. Verifique o nome ou crie um novo banco com o nome correto." });
        break;

    case "ER_ACCESS_DENIED_ERROR":

        console.log("Ops! Usuário ou senha incorretos na configuração da conexão.");
        reply.status(400).send({ mensagem: "Ops! Usuário ou senha inválidos. Verifique suas credenciais de conexão." });
        break;

    case "ER_DUP_ENTRY":

        console.log("Ops! Parece que você tentou inserir uma chave que já existe.");
        reply.status(400).send({ mensagem: "Ops! Entrada duplicada detectada. A chave primária já está em uso." });
        break;

    default:

        console.log(erro);
        reply.status(400).send({ mensagem: "Erro desconhecido. Dê uma olhada no terminal do backend para mais detalhes." });
        break;

        }
    }
});



app.listen({ port: 8000, host: '0.0.0.0' }, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`);
});



app.delete('/Grimorio/:id', async (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = request.params as { id: string };

    try {
        const conn = await mysql.createConnection({
            host: "localhost",
            user: 'root',
            password: "",
            database: 'grimorio',
            port: 3306
        });

        const resultado = await conn.query("DELETE FROM informa WHERE id = ?", [id]);
        const [dados] = resultado;

        if ((dados as any).affectedRows === 0) {
            reply.status(404).send({ mensagem: "Grimório não encontrado" });
        } else {
            reply.status(200).send({ mensagem: "Grimório excluído com sucesso!" });
        }

        
    } catch (erro: any) {
        console.error(erro);
        reply.status(500).send({ mensagem: "Erro ao excluir Grimório" });
    }
});