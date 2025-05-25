import React, { useState } from "react";
import * as S from "./styles";

export default function SecurityForm() {
  const [result, setResult] = useState("");
  const num1 = 427;
  const num2 = 628;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setResult(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const expected = num1 + num2;
    if (parseInt(result) === expected) {
      alert("Verificação bem-sucedida!");
    } else {
      alert("Resultado incorreto.");
    }
  };

  return (
    <S.Container>
      <S.Illustration>
        {/* Aqui você pode colocar uma imagem SVG ou <img src="" /> */}
        <img src="/images/form.png" alt="Ilustração operador" />
      </S.Illustration>
      <S.Box>
        <S.Form onSubmit={handleSubmit}>
          <S.Title>Lorem ipsum dolor sit amet consectetur</S.Title>
          <S.Subtitle>
            Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
            faucibus sit scelerisque
          </S.Subtitle>

          <S.Label>*Lorem ipsum dolor sit amet consectetur</S.Label>
          <S.Row>
            <S.Input placeholder="Categoria*" required />
            <S.Input placeholder="Categoria*" required />
          </S.Row>
          <S.Row>
            <S.Input placeholder="Categoria" />
            <S.Input placeholder="Categoria" />
          </S.Row>

          <S.SecurityCheck>
            <S.Equation>
              <S.SecurityText>Verificação de segurança</S.SecurityText>
              <S.Counters>
                <S.Numbers>
                  <span>{num1}</span>
                  <span>+</span>
                  <span>{num2}</span>
                </S.Numbers>
                <span>=</span>
                <S.Input
                  type="number"
                  placeholder="Resultado*"
                  required
                  value={result}
                  onChange={handleChange}
                />
              </S.Counters>
            </S.Equation>
          </S.SecurityCheck>

          <S.Button type="submit">Lorem ipsum</S.Button>
        </S.Form>
      </S.Box>
    </S.Container>
  );
}
