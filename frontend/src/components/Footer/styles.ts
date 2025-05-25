import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2d2d2d;
  padding-bottom: 2.5rem;
  text-align: center;
  color: #fff;
`;

export const Divider = styled.hr`
  height: 1px;
  width: 100%;
  max-width: 1200px;
  background-color: #dfbbfe;
  border: none;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  background-color: #2d2d2d;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1.5rem;
`;

export const Icon = styled.img`
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(1.3);
  }
`;

export const TwitterIcon = styled.img`
  width: 32px;
  height: 25px;
  cursor: pointer;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(1.3);
  }
`;

export const FacebookIcon = styled.img`
  width: 15px;
  height: 32px;
  cursor: pointer;
  transition: filter 0.3s;

  &:hover {
    filter: brightness(1.3);
  }
`;

export const FooterText = styled.p`
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    max-width: 85%;
    font-size: 1rem;
    margin: 0 auto 1.5rem auto;
    line-height: 1.4;
  }
`;

export const Links = styled.ul`
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    font-size: 0.875rem;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #a774e8;
    }
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr); // 3 por linha
    gap: 1rem;
    max-width: 320px;
    margin: 0 auto;

    li {
      text-align: center;
    }

    li:nth-child(4) {
      grid-column: 2 / 3; // ocupa a segunda coluna
    }
  }
`;
