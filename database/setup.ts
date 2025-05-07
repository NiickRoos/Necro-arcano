import mysql from 'mysql2/promise';

async function criarBancoETabela() {
  // Conectar ao MySQL sem banco definido
  const conexaoInicial = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
  });

  // Criar o banco se não existir
  await conexaoInicial.query('CREATE DATABASE IF NOT EXISTS grimorio');
  console.log("Banco 'grimorio' criado ou já existia.");

  // Agora conecta ao banco grimorio
  const conexao = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'grimorio',
    port: 3306,
  });

  // Criar tabela informa se não existir
  await conexao.query(`
  CREATE TABLE IF NOT EXISTS informa (
      id INT AUTO_INCREMENT PRIMARY KEY,
      Nome VARCHAR(255),
      Tipodeocorrencia VARCHAR(255),
      Datadoevento DATE,
      lugar VARCHAR(255),
      EntidadesEnvolvidas VARCHAR(255),
      Niveldeatividadeparanormal VARCHAR(100),
      Evidencias VARCHAR(255),
      RituaisRealizados VARCHAR(255)
    )
  `);
  console.log("Tabela 'informa' criada ou já existia.");

  // Fechar conexões
  await conexao.end();
  await conexaoInicial.end();
}

criarBancoETabela().catch((err) => {
  console.error("Erro ao criar banco ou tabela:", err);
});
