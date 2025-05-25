import * as S from "./styles";

export default function DownloadSection() {
  return (
    <S.Container>
      <S.Content>
        <S.Title>Lorem ipsum dolor sit amet consectetur</S.Title>
        <S.Subtitle>
          Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
          faucibus sit scelerisque quis commodo aenean viverra
        </S.Subtitle>
      </S.Content>
      <S.ButtonsContainer>
        <S.StoreButton href="#">
          <img src="/download/appstore.png" alt="App Store" />
        </S.StoreButton>
        <S.StoreButton href="#">
          <img src="/download/googleplay.png" alt="Google Play" />
        </S.StoreButton>
      </S.ButtonsContainer>
    </S.Container>
  );
}
