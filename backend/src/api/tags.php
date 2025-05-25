<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

$tags = [
    ["name" => "Perfumaria"],
    ["name" => "Corpo e banho"],
    ["name" => "Hidratante"],
    ["name" => "Desodorante"],
    ["name" => "Cabelos"],
    ["name" => "Maquiagem"],
    ["name" => "Rosto"],
    ["name" => "Casa"],
    ["name" => "Infantil"],
    ["name" => "Shampoo"],
    ["name" => "Sabonete"],
    ["name" => "Body splash"],
    ["name" => "Óleo corporal"],
    ["name" => "Corretivo"],
    ["name" => "Proteção solar"],
];

echo json_encode($tags);
