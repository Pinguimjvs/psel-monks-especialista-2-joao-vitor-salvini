import React, { useState } from "react";
import * as S from "./styles";
import { api } from "../../services/api";

export default function SecurityForm() {
  const [field1, setField1] = useState("");
  const [field2, setField2] = useState("");
  const [field3, setField3] = useState("");
  const [field4, setField4] = useState("");

  const [result, setResult] = useState("");
  const num1 = 427;
  const num2 = 628;

  const expected = num1 + num2;

  const isFormValid =
    field1.trim() !== "" &&
    field2.trim() !== "" &&
    parseInt(result) === expected;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isFormValid) {
      alert("Preencha os campos obrigatórios corretamente.");
      return;
    }

    try {
      await api.post("/form", {
        category1: field1,
        category2: field2,
        category3: field3,
        category4: field4,
      });

      alert("Formulário enviado com sucesso!");
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      alert("Erro ao enviar o formulário.");
    }
  };

  return (
    <S.Container>
      <S.Illustration>
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
            <S.Input
              placeholder="Categoria*"
              required
              value={field1}
              onChange={(e) => setField1(e.target.value)}
            />
            <S.Input
              placeholder="Categoria*"
              required
              value={field2}
              onChange={(e) => setField2(e.target.value)}
            />
          </S.Row>
          <S.Row>
            <S.Input
              placeholder="Categoria"
              value={field3}
              onChange={(e) => setField3(e.target.value)}
            />
            <S.Input
              placeholder="Categoria"
              value={field4}
              onChange={(e) => setField4(e.target.value)}
            />
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
                  onChange={(e) => setResult(e.target.value)}
                />
              </S.Counters>
            </S.Equation>
          </S.SecurityCheck>

          <S.Button type="submit" disabled={!isFormValid}>
            Lorem ipsum
          </S.Button>
        </S.Form>
      </S.Box>
    </S.Container>
  );
}
