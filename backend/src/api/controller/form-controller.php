<?php
require_once __DIR__ . '/../repository/my-sql-configuration.php';
require_once __DIR__ . '/../repository/form-repository.php';

$db = new MySqlConfiguration();
$formRepo = new FormRepository($db);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);

    $category1 = $input['category1'] ?? null;
    $category2 = $input['category2'] ?? null;
    $category3 = $input['category3'] ?? null;
    $category4 = $input['category4'] ?? null;

    if (!$category1 || !$category2) {
        http_response_code(400);
        echo json_encode([
            "error" => "category1 e category2 são obrigatórios"
        ]);
        exit();
    }

    try {
        $insertedId = $formRepo->insertForm($category1, $category2, $category3, $category4);
        http_response_code(201);
        echo json_encode([
            "success" => true,
            "id" => $insertedId
        ]);
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode([
            "error" => $e->getMessage()
        ]);
    }
    exit();
}

http_response_code(405);
echo json_encode([
    "error" => "Método não permitido"
]);
exit();