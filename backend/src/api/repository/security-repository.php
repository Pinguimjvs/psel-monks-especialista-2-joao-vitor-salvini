<?php

class SecurityRepository
{
    public function generateRandomNumbers()
    {
        $num1 = rand(100, 999);
        $num2 = rand(100, 999);
        return [
            'num1' => $num1,
            'num2' => $num2
        ];
    }
}
