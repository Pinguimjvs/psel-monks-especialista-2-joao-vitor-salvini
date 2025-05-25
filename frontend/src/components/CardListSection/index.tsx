import * as S from "./styles";

export default function CardListSection() {
  return (
    <S.Container>
      <S.Grid>
        {Array.from({ length: 3 }).map((_, index) => (
          <S.Card key={index}>
            <h3>Lorem ipsum dolor sit amet</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
              faucibus sit scelerisque quis commodo aenean viverra.
            </p>
            <S.Button>Lorem ipsum</S.Button>
          </S.Card>
        ))}
      </S.Grid>
    </S.Container>
  );
}
