<?php
require_once __DIR__ . '/../repository/my-sql-configuration.php';
require_once __DIR__ . '/../repository/tags-repository.php';

$db = new MySqlConfiguration();
$cardsRepo = new TagsRepository($db);

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo json_encode($cardsRepo->getAllTags(), JSON_UNESCAPED_UNICODE);
    exit();
}