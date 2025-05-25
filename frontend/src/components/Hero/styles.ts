import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
  height: fit-content;
  background: #2d2d2d;
  color: #fff;
  padding: 1.5rem 0rem 1.5rem 5rem;
  text-align: left;

  @media (max-width: 768px) {
    padding: 0rem 0rem 1.5rem 1rem;
    border-bottom-left-radius: 0rem;
    border-bottom-right-radius: 0rem;
  }
`;

export const ContentWrapper = styled.div`
  max-width: 60vw;
  background: #2d2d2d;
  z-index: 1;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  padding-top: 3.75rem;
  font-weight: 800;
  color: #eae8e4;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding-top: 0;
  }
`;

export const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 100;
  letter-spacing: 2%;
  line-height: 100%;
  color: #eae8e4;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ScrollImgContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #2d2d2d;
  margin-top: 3.75rem;

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`;

export const ScrollImg = styled.img`
  width: 4.5rem;
  height: auto;
`;
