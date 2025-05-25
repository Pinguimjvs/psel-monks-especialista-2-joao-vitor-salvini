// components/DownloadSection/styles.ts
import styled from "styled-components";

export const Container = styled.section`
  background-color: #3c096c;
  color: white;
  border-radius: 1.5rem;
  padding: 2.5rem;
  margin: 2rem 5rem 4rem 5rem;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    margin: 2rem 1.5rem 2rem 1.5rem;
    grid-template-columns: 1fr;
    text-align: left;
    justify-items: center;
    padding: 1.5rem;
  }
`;

export const Content = styled.div`
  display: flex;
  background-color: #3c096c;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
  color: #eae8e4;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    font-weight: 500;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  color: #eae8e4;

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 100%;
    font-weight: 300;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background-color: #3c096c;

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 100%;
  }
`;

export const StoreButton = styled.a`
  img {
    height: 3.125rem;
  }
`;
