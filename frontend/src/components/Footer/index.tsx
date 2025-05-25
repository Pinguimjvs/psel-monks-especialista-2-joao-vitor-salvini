import * as S from "./styles";

export default function Footer() {
  return (
    <S.Container>
      <S.Divider />

      <S.SocialIcons>
        <S.Icon src="/icons/instagram.png" alt="Instagram" />
        <S.Icon src="/icons/whatsapp.png" alt="WhatsApp" />
        <S.TwitterIcon src="/icons/twitter.png" alt="Twitter" />
        <S.FacebookIcon src="/icons/facebook.png" alt="Facebook" />
      </S.SocialIcons>

      <S.FooterText>
        <strong>Lorem ipsum dolor sit amet</strong>
      </S.FooterText>

      <S.Links>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
      </S.Links>
    </S.Container>
  );
}
