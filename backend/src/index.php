<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
$request = $_SERVER['REQUEST_URI'];

switch ($request) {
    case '/api/cards':
        require __DIR__ . '/api/cards.php';
        break;

    case '/api/tags':
        require __DIR__ . '/api/tags.php';
        break;

    default:
        http_response_code(404);
        echo json_encode(['error' => 'Rota não encontrada']);
        break;
}
