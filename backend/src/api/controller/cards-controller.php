<?php
require_once __DIR__ . '/../repository/my-sql-configuration.php';
require_once __DIR__ . '/../repository/cards-repository.php';

$db = new MySqlConfiguration();
$cardsRepo = new CardsRepository($db);

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo json_encode($cardsRepo->getAllCards(), JSON_UNESCAPED_UNICODE);
    exit();
}