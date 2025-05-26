<?php

class FormRepository
{
    private $db;

    public function __construct(MySqlConfiguration $db)
    {
        $this->db = $db;
    }

    public function insertForm($category1, $category2, $category3 = null, $category4 = null)
    {
        $stmt = $this->db->prepare(
            "INSERT INTO form_categories (category1, category2, category3, category4)
             VALUES (?, ?, ?, ?)"
        );
        $stmt->bind_param("ssss", $category1, $category2, $category3, $category4);
        if (!$stmt->execute()) {
            throw new Exception("Erro ao inserir dados: " . $stmt->error);
        }
        $stmt->close();
        return $this->db->getMysqli()->insert_id;
    }
}
