<?php
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json; charset=utf-8');

$request = $_SERVER['REQUEST_URI'];

switch ($request) {
    case '/api/cards':
        require __DIR__ . '/controller/cards-controller.php';
        break;

    case '/api/tags':
        require __DIR__ . '/controller/tags-controller.php';
        break;
        
    case '/api/form':
        require __DIR__ . '/controller/form-controller.php';
        break;
    default:
        http_response_code(404);
        echo json_encode([
            'error' => 'Rota não encontrada',
            'request' => $request 
        ]);
        break;
}
