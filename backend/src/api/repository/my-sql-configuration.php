<?php

class MySqlConfiguration
{
    private $host = "db";
    private $user = "user";
    private $password = "pass";
    private $dbname = "monks_db";
    private $mysqli;

    public function __construct()
    {
        $this->mysqli = new mysqli(
            $this->host,
            $this->user,
            $this->password,
            $this->dbname
        );

        $this->mysqli->set_charset("utf8mb4");

        if ($this->mysqli->connect_error) {
            http_response_code(500);
            echo json_encode(["error" => "Erro na conexão com o banco"]);
            exit();
        }
    }

    public function getMysqli() {   
        return $this->mysqli;
    }

    public function query($sql)
    {
        $result = $this->mysqli->query($sql);
        if (!$result) {
            throw new Exception("Erro na query: " . $this->mysqli->error);
        }
        return $result;
    }

    public function fetchAll($result)
    {
        $data = [];
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        return $data;
    }

    public function prepare($sql)
    {
        $stmt = $this->mysqli->prepare($sql);
        if (!$stmt) {
            throw new Exception("Erro ao preparar statement: " . $this->mysqli->error);
        }
        return $stmt;
    }

    public function close()
    {
        $this->mysqli->close();
    }
}

