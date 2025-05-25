import * as S from "./styles";

export default function ImageSection() {
  return (
    <S.Container>
      <div className="left-column">
        <S.Title>Lorem ipsum dolor sit amet consectetur</S.Title>
        <S.Description>
          Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
          faucibus sit scelerisque quis commodo
        </S.Description>
        <S.Image src="/images/city3.png" alt="Nova York" />
      </div>

      <div className="right-column">
        <S.Image src="/images/city1.png" alt="Los Angeles" />
        <S.Image src="/images/city2.png" alt="Seattle" />
      </div>
    </S.Container>
  );
}
