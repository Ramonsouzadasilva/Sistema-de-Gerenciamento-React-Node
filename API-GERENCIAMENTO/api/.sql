use api_servico;

CREATE TABLE setor (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    codigo VARCHAR(50) UNIQUE NOT NULL
)ENGINE=INNODB;

-- Criar a tabela equipamento com o novo atributo setor
CREATE TABLE equipamento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    marca VARCHAR(100) NOT NULL,
    descricao VARCHAR(150) NOT NULL,
    codigo VARCHAR(50) UNIQUE NOT NULL,
    valor DECIMAL(10, 2) NOT NULL,
    setor_id INT,
    FOREIGN KEY (setor_id) REFERENCES setor(id)
)ENGINE=INNODB;

-- Criar a tabela ordem_de_servico
CREATE TABLE ordem_de_servico (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(150) NOT NULL,
    codigo VARCHAR(50) UNIQUE NOT NULL,
    equipamento_id INT,
    tipo_manutencao VARCHAR(50) NOT NULL,
    data_emissao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (equipamento_id) REFERENCES equipamento(id)
)ENGINE=INNODB;


-- Inserir dados na tabela setor
INSERT INTO setor (nome, codigo) VALUES
('Produção de Peças', 'PP001'),
('Manutenção de Máquinas', 'MM002'),
('Controle de Qualidade', 'CQ003');

-- Inserir dados na tabela equipamento
INSERT INTO equipamento (nome, marca, descricao, codigo, valor, setor_id) VALUES
('Torno CNC', 'Mazak', 'Máquina de usinagem CNC para produção', 'CNC001', 80000.00, 1),
('Fresadora Vertical', 'Haas', 'Máquina de fresagem para produção', 'FRS002', 60000.00, 1),
('Máquina de Solda a Arco', 'Lincoln Electric', 'Máquina de solda para processos de fabricação', 'SOL003', 5000.50, 2);

-- Inserir dados na tabela ordem_de_servico
INSERT INTO ordem_de_servico (descricao, codigo, equipamento_id, tipo_manutencao) VALUES
('Substituição de Ferramenta de Corte', 'OS001', 1, 'Manutenção Corretiva'),
('Calibração de Fresadora', 'OS002', 2, 'Calibração Mecânica'),
('Manutenção Preventiva em Máquina de Solda', 'OS003', 3, 'Manutenção Preventiva');


-- Inserir dados na tabela setor
INSERT INTO setor (nome, codigo) VALUES
('Fundição', 'FND001'),
('Usinagem de Precisão', 'UP002'),
('Montagem', 'MTG003');

-- Inserir dados na tabela equipamento
INSERT INTO equipamento (nome, marca, descricao, codigo, valor, setor_id) VALUES
('Forno de Indução', 'Inductotherm', 'Forno para fundição de metais', 'FRN001', 120000.00, 1),
('Torno Vertical CNC', 'Doosan', 'Máquina para usinagem de peças grandes', 'CNC002', 100000.00, 2),
('Robô de Solda', 'ABB', 'Robô para soldagem automatizada', 'ROB003', 25000.50, 3);

-- Inserir dados na tabela ordem_de_servico
INSERT INTO ordem_de_servico (descricao, codigo, equipamento_id, tipo_manutencao) VALUES
('Troca de Cadinho no Forno de Indução', 'OS004', 1, 'Manutenção Corretiva'),
('Ajuste Fino do Torno CNC', 'OS005', 2, 'Ajuste de Precisão'),
('Atualização de Software no Robô de Solda', 'OS006', 3, 'Manutenção de Software');

-- Inserir mais dados na tabela de equipamentos
INSERT INTO equipamento (nome, marca, descricao, codigo, valor, setor_id) VALUES
('Câmara de Testes', 'ACME', 'Câmara de testes para controle de qualidade', 'CAM001', 15000.00, 3),
('Scanner de Códigos de Barras', 'Zebra', 'Scanner de códigos de barras para logística', 'SCN001', 500.00, 4),
('Software CAD', 'Autodesk', 'Software de design assistido por computador', 'CAD001', 10000.00, 5),
('Capacete de Segurança', '3M', 'Capacete de segurança para uso em canteiros de obras', 'CAP001', 50.00, 8),
('Sistema de Folha de Pagamento', 'SAP', 'Sistema de gestão de recursos humanos', 'RH001', 5000.00, 9),
('Furadeira de Bancada', 'Bosch', 'Furadeira de bancada para produção', 'FUR001', 3000.00, 1),
('Plaina Elétrica', 'DeWalt', 'Plaina elétrica para trabalhos de marcenaria', 'PLN001', 2500.00, 1),
('Máquina de Corte a Laser', 'Trumpf', 'Máquina de corte a laser para produção', 'LAS001', 100000.00, 2),
('Impressora 3D', 'Ultimaker', 'Impressora 3D para prototipagem rápida', 'IMP001', 5000.00, 2),
('Espectrômetro de Fluorescência de Raios X', 'Thermo Fisher Scientific', 'Espectrômetro para análise de materiais', 'ESF001', 75000.00, 3),
('Balança de Precisão', 'Mettler Toledo', 'Balança de precisão para laboratório', 'BAL001', 2000.00, 3),
('Empilhadeira Elétrica', 'Hyster', 'Empilhadeira elétrica para movimentação de carga', 'EMP002', 30000.00, 4),
('Empilhadeira a Combustão', 'Caterpillar', 'Empilhadeira a combustão para movimentação de carga', 'EMP003', 35000.00, 4),
('Software de CAD/CAM', 'Siemens', 'Software integrado para design e fabricação', 'CAD002', 12000.00, 5),
('Osciloscópio Digital', 'Tektronix', 'Osciloscópio digital para análise de circuitos eletrônicos', 'OSC001', 3000.00, 6),
('Fonte de Alimentação Programável', 'Keysight', 'Fonte de alimentação programável para testes eletrônicos', 'FNT001', 1500.00, 6),
('Microscópio Óptico', 'Nikon', 'Microscópio óptico para análise em laboratório', 'MIC002', 8000.00, 7),
('Câmera de Alta Velocidade', 'Photron', 'Câmera de alta velocidade para captura de imagens rápidas', 'CAM002', 10000.00, 7),
('Colete Refletivo', '3M', 'Colete refletivo para segurança dos trabalhadores', 'COL001', 30.00, 8),
('Luvas de Proteção', 'Ansell', 'Luvas de proteção para uso industrial', 'LUV001', 15.00, 8),
('Sistema de Gestão de RH', 'Oracle', 'Sistema de gestão de recursos humanos', 'RH002', 10000.00, 9),
('Sistema de Avaliação de Desempenho', 'ADP', 'Sistema de avaliação de desempenho dos funcionários', 'RH003', 8000.00, 9);




SELECT s.nome AS setor, COUNT(e.id) AS quantidade_equipamentos
FROM setor s
LEFT JOIN equipamento e ON s.id = e.setor_id
GROUP BY s.id, s.nome;

SELECT s.nome AS setor, COUNT(e.id) AS quantidade_equipamentos
FROM setor s
LEFT JOIN equipamento e ON s.id = e.setor_id
WHERE s.id = '1'  -- Substitua 'ID_DO_SETOR' pelo ID do setor desejado
GROUP BY s.id, s.nome;

SELECT s.nome AS setor, SUM(e.valor) AS valor_total_equipamentos
FROM setor s
LEFT JOIN equipamento e ON s.id = e.setor_id
GROUP BY s.id, s.nome;


SELECT s.nome AS setor, SUM(e.valor) AS valor_total_equipamentos
FROM setor s
LEFT JOIN equipamento e ON s.id = e.setor_id
WHERE s.id = '3'
GROUP BY s.id, s.nome;