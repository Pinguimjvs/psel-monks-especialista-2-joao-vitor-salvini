import * as S from "./styles";

export default function Hero() {
  return (
    <S.Container>
      <S.ContentWrapper>
        <S.Title>Lorem ipsum dolor sit amet consectetur</S.Title>
        <S.Description>
          Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
          faucibus sit scelerisque quis commodo aenean viverra.
        </S.Description>

        <S.ScrollImgContent>
          <S.ScrollImg src="/hero/scroll.png" alt="Scroll" />
        </S.ScrollImgContent>
      </S.ContentWrapper>
    </S.Container>
  );
}
