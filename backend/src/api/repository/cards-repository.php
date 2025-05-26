<?php

class CardsRepository
{
    private $db;

    public function __construct(MySqlConfiguration $db)
    {
        $this->db = $db;
    }

    public function getAllCards()
    {
        $result = $this->db->query("SELECT id, title, subtitle, imageUrl FROM cards");
        return $this->db->fetchAll($result);
    }
}