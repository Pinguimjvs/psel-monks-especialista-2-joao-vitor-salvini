import { useEffect, useState } from "react";
import * as S from "./styles";
import { api } from "../../services/api";

interface CardData {
  title: string;
  subtitle: string;
  imageUrl: string;
}

export default function CardSection() {
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
    async function fetchCards() {
      try {
        const response = await api.get<CardData[]>("/cards");
        setCards(response.data);
      } catch (error) {
        console.error("Erro ao buscar os cards:", error);
      }
    }

    fetchCards();
  }, []);

  return (
    <S.Container>
      <div>
        <S.Title>Lorem ipsum dolor sit amet consectetur</S.Title>
        <S.Description>
          Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
          faucibus sit scelerisque quis commodo aenean viverra.
        </S.Description>
      </div>

      <S.CardGrid>
        {cards.map((card, index) => (
          <S.Card key={index}>
            <img src={card.imageUrl} alt={card.title} />
            <h3>{card.title}</h3>
            <p>{card.subtitle}</p>
          </S.Card>
        ))}
      </S.CardGrid>
    </S.Container>
  );
}
