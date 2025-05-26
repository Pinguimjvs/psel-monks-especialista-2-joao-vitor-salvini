import { useContext } from "react";
import * as S from "./styles";
import { GlobalContext } from "../../context/GlobalContext";
import Skeleton from "../Skeleton";

export default function CitiesList() {
  const { cards, loading } = useContext(GlobalContext);

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
        {loading ? (
          <S.CardGrid>
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton
                key={index}
                width="100%"
                height="200px"
                borderRadius="10px"
              />
            ))}
          </S.CardGrid>
        ) : (
          cards?.map((card, index) => (
            <S.Card key={index}>
              <img src={card.imageUrl} alt={card.title} />
              <h3>{card.title}</h3>
              <p>{card.subtitle}</p>
            </S.Card>
          ))
        )}
      </S.CardGrid>
    </S.Container>
  );
}
