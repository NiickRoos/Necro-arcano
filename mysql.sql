CREATE  database grimorio;
use  grimorio;
CREATE TABLE informa (
  id INT PRIMARY KEY AUTO_INCREMENT,
  Nome VARCHAR(255),
  Tipodeocorrencia VARCHAR(255),
  lugar VARCHAR(255),
  Datadoevento DATE,
  EntidadesEnvolvidas VARCHAR(255),
  Niveldeatividadeparanormal VARCHAR(100),
  Evidencias VARCHAR(255),
  RituaisRealizados VARCHAR(255)
);

