import { useContext } from "react";
import * as S from "./styles";
import { GlobalContext } from "../../context/GlobalContext";

export default function CitiesList() {
  const { cards } = useContext(GlobalContext);

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
