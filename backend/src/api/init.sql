CREATE TABLE IF NOT EXISTS cards (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    imageUrl VARCHAR(255)
);

INSERT INTO cards (title, imageUrl) VALUES
('Imagem 1', 'https://via.placeholder.com/300x180'),
('Imagem 2', 'https://via.placeholder.com/300x180'),
('Imagem 3', 'https://via.placeholder.com/300x180');
