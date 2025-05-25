import styled from "styled-components";

interface ContainerProps {
  $menuOpen: boolean;
}

export const Container = styled.header<ContainerProps>`
  display: flex;
  position: sticky;
  align-items: center;
  background: #2d2d2d;
  gap: 1.5rem;
  padding: 1.5rem 0rem 1.5rem 5rem;

  ${({ $menuOpen }) =>
    $menuOpen &&
    `
    width: 100vw;
    z-index: 5;
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
  `}

  @media (max-width: 768px) {
    padding: 1.5rem 0rem 1.5rem 1.5rem;
  }
`;

export const LogoImg = styled.img`
  width: 8.75rem;
  height: auto;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 5.875rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.a`
  color: #eae8e4;
  text-decoration: none;
  font-size: 1rem;

  &:hover {
    color: #6633cc;
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  flex-direction: column;
  gap: 0.25rem;
  background: #2d2d2d;
  cursor: pointer;

  span {
    width: 1.5rem;
    height: 0.125rem;
    background: white;
    display: block;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: #e4b9ff;
  width: 100vw;
  height: 100vh;
  padding: 5rem 2rem 2rem 2rem;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow-y: auto;
`;

export const ModalNav = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  li a {
    color: #2d2d2d;
    font-size: 1.25rem;
    font-weight: bold;
    text-decoration: none;

    &:hover {
      color: #6633cc;
    }
  }
`;

export const Back = styled.div`
  margin-top: auto;
  background-color: #dfbbfe;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;

  img {
    width: 3.625rem;
    height: auto;
  }
`;
