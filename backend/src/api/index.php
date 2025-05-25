<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$mysqli = new mysqli("db", "user", "password", "monks");

if ($mysqli->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "Erro na conexão com o banco"]);
    exit();
}

$result = $mysqli->query("SELECT id, title, imageUrl FROM cards");

$cards = [];

while ($row = $result->fetch_assoc()) {
    $cards[] = $row;
}

echo json_encode($cards);
