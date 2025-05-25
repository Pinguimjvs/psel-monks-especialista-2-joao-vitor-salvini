<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$cards = [
  [
    'title' => 'Lorem ipsum dolor',
    'subtitle' => 'Lorem ipsum dolor sit amet consectetur.',
    'imageUrl' => 'http://localhost:8000/api/assets/sp.png'
  ],
  [
    'title' => 'Lorem ipsum dolor',
    'subtitle' => 'Lorem ipsum dolor sit amet consectetur.',
    'imageUrl' => 'http://localhost:8000/api/assets/mexico.png'
  ],
  [
    'title' => 'Lorem ipsum dolor',
    'subtitle' => 'Lorem ipsum dolor sit amet consectetur.',
    'imageUrl' => 'http://localhost:8000/api/assets/buenosaires.png'
  ],
  [
    'title' => 'Lorem ipsum dolor',
    'subtitle' => 'Lorem ipsum dolor sit amet consectetur.',
    'imageUrl' => 'http://localhost:8000/api/assets/saltlake.png'
  ]
];

echo json_encode($cards);
