// components/CardSection/styles.ts
import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 2.5rem;
  padding: 4rem 5rem 2rem 5rem;
  text-align: left;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem 2rem 1.5rem;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  color: #2d2d2d;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  letter-spacing: 2%;
  line-height: 100%;
  color: #2d2d2d;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(16.25rem, 1fr));
  gap: 2.5rem;
`;

export const Card = styled.div`
  background: #fff;
  border: 1px solid #ccc;
  padding: 0.375rem 0.375rem 1rem 0.375rem;
  border-radius: 0.5rem;

  img {
    width: 100%;
    border-radius: 0.25rem;
  }

  h3 {
    font-size: 1rem;
    margin-top: 0.5rem;
  }

  p {
    font-size: 0.9rem;
    margin-top: 0.3rem;
  }
`;
