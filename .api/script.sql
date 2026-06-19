DROP DATABASE IF EXISTS escola1327;

CREATE DATABASE escola1327;

USE escola1327;

CREATE TABLE professores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(150),
    senha INT
);

CREATE TABLE turmas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ano VARCHAR(100),
    ativ VARCHAR(500),
    professor_id INT,
    FOREIGN KEY (professor_id) REFERENCES professores (id)
);