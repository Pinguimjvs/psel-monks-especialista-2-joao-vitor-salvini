import { useEffect, useState } from "react";
import * as S from "./styles";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <>
      <S.Container $menuOpen={isMenuOpen}>
        <S.LogoImg src="/hero/headerLogo.png" alt="Logo da empresa" />

        <S.BurgerMenu onClick={() => setIsMenuOpen(true)}>
          <span />
          <span />
          <span />
        </S.BurgerMenu>

        <S.Nav>
          <S.NavItem href="#">Categoria 1</S.NavItem>
          <S.NavItem href="#">Categoria 2</S.NavItem>
          <S.NavItem href="#">Categoria 3</S.NavItem>
          <S.NavItem href="#">Categoria 4</S.NavItem>
        </S.Nav>
      </S.Container>

      {isMenuOpen && (
        <S.Modal>
          <S.ModalNav>
            <li>
              <a href="#">• Categoria 1</a>
            </li>
            <li>
              <a href="#">• Categoria 2</a>
            </li>
            <li>
              <a href="#">• Categoria 3</a>
            </li>
            <li>
              <a href="#">• Categoria 4</a>
            </li>
          </S.ModalNav>
          <S.Back onClick={() => setIsMenuOpen(false)}>
            <img src="/icons/back.png" alt="Voltar" />
          </S.Back>
        </S.Modal>
      )}
    </>
  );
}
