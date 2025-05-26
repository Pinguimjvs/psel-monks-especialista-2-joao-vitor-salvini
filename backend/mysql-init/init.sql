CREATE TABLE IF NOT EXISTS cards (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    subtitle VARCHAR(255),
    imageUrl VARCHAR(255)
) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO cards (title, subtitle, imageUrl) VALUES
('Lorem ipsum dolor', 'Lorem ipsum dolor sit amet consectetur.', 'http://localhost:8000/assets/sp.png'),
('Lorem ipsum dolor', 'Lorem ipsum dolor sit amet consectetur.', 'http://localhost:8000/assets/mexico.png'),
('Lorem ipsum dolor', 'Lorem ipsum dolor sit amet consectetur.', 'http://localhost:8000/assets/buenosaires.png'),
('Lorem ipsum dolor', 'Lorem ipsum dolor sit amet consectetur.', 'http://localhost:8000/assets/saltlake.png');


CREATE TABLE IF NOT EXISTS tags (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255)
) DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO tags (name) VALUES
('Perfumaria'),
('Corpo e banho'),
('Hidratante'),
('Desodorante'),
('Cabelos'),
('Maquiagem'),
('Rosto'),
('Casa'),
('Infantil'),
('Shampoo'),
('Sabonete'),
('Body splash'),
('Óleo corporal'),
('Corretivo'),
('Proteção solar');


CREATE TABLE IF NOT EXISTS form_categories (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category1 VARCHAR(255) NOT NULL,
    category2 VARCHAR(255) NOT NULL,
    category3 VARCHAR(255),
    category4 VARCHAR(255)
)DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

