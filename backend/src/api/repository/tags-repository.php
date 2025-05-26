<?php

class TagsRepository
{
    private $db;

    public function __construct(MySqlConfiguration $db)
    {
        $this->db = $db;
    }

    // Buscar todas as tags
    public function getAllTags()
    {
        $result = $this->db->query("SELECT id, name FROM tags");
        return $this->db->fetchAll($result);
    }

}
