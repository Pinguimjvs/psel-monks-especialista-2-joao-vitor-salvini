<?php
require_once __DIR__ . '/../repository/my-sql-configuration.php'; // mesmo que você não use aqui
require_once __DIR__ . '/../repository/security-repository.php';

$securityRepo = new SecurityRepository();

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    echo json_encode($securityRepo->generateRandomNumbers(), JSON_UNESCAPED_UNICODE);
    exit();
}
