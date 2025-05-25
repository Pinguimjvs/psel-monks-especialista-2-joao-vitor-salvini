import { styled } from "styled-components";

export const TopContent = styled.div`
  display: flex;
  position: relative;
  width: 100vw;
  border-bottom-left-radius: 2.25rem;
  border-bottom-right-radius: 2.25rem;
  overflow: hidden;
  background-color: #2d2d2d;

  @media (max-width: 768px) {
    border-bottom-left-radius: 0rem;
    border-bottom-right-radius: 0rem;
    //flex-direction: column;
  }
`;

export const LeftSide = styled.div`
  width: 70%;
  background-color: #dfbbfe;
  z-index: 1;

  @media (max-width: 768px) {
    width: 60%;
  }
`;

export const RightSide = styled.div`
  width: 30%;
  display: flex;
  background-color: #dfbbfe;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    width: 40%;
  }
`;

export const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: fill;
  background-color: #2d2d2d;
`;
