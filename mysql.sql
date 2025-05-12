Create database Grimorio;
use  Grimorio;
Create table informa(
    ID INT AUTO_INCREMENT PRIMARY KEY,
    Nome VARCHAR(255),
    Tipo_de_Ocorrencia VARCHAR(255),
    Lugar VARCHAR(255),
    Data DATE,
    Entidades VARCHAR(255),
    Atividade_Paranormal VARCHAR(255),
    Evidencias VARCHAR(255),
    Rituais VARCHAR(255)    
);