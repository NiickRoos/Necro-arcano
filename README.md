
# Necro Arcano 

*Tema*: 

Um grimório digital sombrio usado por uma sociedade secreta para registrar eventos paranormais, pactos demoníacos e mortes envoltas em mistério. Cada entrada é um caso oculto que mistura falecimentos estranhos, aparições e selos demoníacos.


🔮 *Funcionalidades do Sistema Grimório*
Este sistema foi desenvolvido para registrar e gerenciar ocorrências sobrenaturais de forma segura e temática. Abaixo estão as principais funcionalidades disponíveis:

📋 *Listar Grimórios*
Exibe uma tabela com todas as ocorrências sobrenaturais previamente registradas. Cada item inclui informações como:

ID

Nome

Tipo de ocorrência

Data e local

Entidades envolvidas

Evidências

Nível de atividade paranormal

Rituais realizados

Essa funcionalidade é ativada através do botão “Listar”, que busca os dados e os exibe em formato de tabela.

🛑 *Parar de Listar*
Oculta a tabela de ocorrências exibida anteriormente, sem excluir ou apagar os dados salvos. Ideal para limpar a visualização da tela sem perder informações.

⚠️ *Atenção*: Essa ação não deleta registros. Ela apenas remove temporariamente a visualização da tabela do DOM.

🧾 *Cadastrar Grimório*
Permite registrar uma nova ocorrência. O formulário de cadastro coleta os seguintes dados:

ID do registro

Nome do evento

Tipo de ocorrência

Data e local

Entidades envolvidas

Nível de atividade paranormal

Evidências

Rituais realizados

🗑️ *Excluir Grimório*

Remove definitivamente um registro selecionado. Antes da exclusão, o sistema exibe uma mensagem de confirmação. Após confirmado, o registro será apagado do sistema.

Aviso: registros excluídos não podem ser recuperados — eles se perdem para sempre no vale dos registros esquecidos.

⚠️ *Lembretes Importantes*
O sistema não compartilha nem armazena permanentemente os registros de forma externa.

Todo conteúdo inserido é de responsabilidade do usuário.

Evite registros que contrariem a ética sobrenatural e os direitos dos não vivos.



*Instruções para rodar o codigo localmente*

1-Baixe o projeto do GitHub e abra-o no Visual Studio Code.

2-Localize o arquivo mysql.sql, copie o conteúdo disponibilizado e execute-o no seu gerenciador de banco de dados MySQL para criar as tabelas necessárias.

3-Certifique-se de que o Laragon está ligado para que o banco de dados funcione corretamente.

4-No terminal do Visual Studio Code, digite o seguinte comando para instalar as dependências do projeto: "npm i"

5-Instale a extensão Live Server no Visual Studio Code, caso ainda não esteja instalada.

6-Em seguida, execute o seguinte comando para iniciar o servidor de desenvolvimento: "npm run dev"

7-Após isso, clique no botão "Go Live", geralmente localizado no canto inferior direito do Visual Studio Code.

8-Dependendo do arquivo que estiver selecionado no momento, o navegador poderá abrir diretamente aquela página.

9-Caso uma tela em branco com listagem de arquivos seja exibida, clique no arquivo usuabilidade.html para abrir a interface desejada.


*Diagrama* 

![App Screenshot](https://i.imgur.com/w3pCaTi.jpeg)
