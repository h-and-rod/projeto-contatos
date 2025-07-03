INSERT INTO TBL_CATEGORIA (nome) VALUES
('Amigos'),
('Familiares'),
('Colegas de Trabalho'),
('Escola'),
('Faculdade'),
('Outros');

INSERT INTO TBL_CONTATO (nome, apelido, telefone, email, endereco, data_nascimento, bloqueado, categoria_id, favorito) VALUES
('João Silva', 'João', '123456789', 'joao@email.com', 'Rua A, 123', '1990-01-01', false, 1, true),
('Maria Souza', 'Mari', '987654321', 'maria@email.com', 'Rua B, 456', '1992-02-02', false, 2, false),
('Carlos Pereira', 'Carl', '555123456', 'carlos@email.com', 'Rua C, 789', '1988-03-03', true, 3, false),
('Ana Lima', 'Aninha', '444987654', 'ana@email.com', 'Rua D, 321', '1995-04-04', false, 4, true),
('Pedro Santos', 'Pedrinho', '333456789', 'pedro@email.com', 'Rua E, 654', '1993-05-05', false, 5, false),
('Fernanda Costa', 'Fer', '222123456', 'fernanda@email.com', 'Rua F, 987', '1991-06-06', true, 6, false),
('Lucas Almeida', 'Lu', '111987654', 'lucas@email.com', 'Rua G, 159', '1994-07-07', false, 1, true),
('Juliana Rocha', 'Ju', '666456789', 'juliana@email.com', 'Rua H, 753', '1996-08-08', false, 2, false);