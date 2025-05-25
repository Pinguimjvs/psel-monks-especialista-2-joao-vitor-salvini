import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2.5rem;
  padding: 4rem 5rem;
  background-color: #eae8e4;

  .left-column {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media (max-width: 768px) {
      gap: 1rem;
    }
  }

  .right-column {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media (max-width: 768px) {
      gap: 1rem;
    }
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    .right-column {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
    padding: 2rem 1.5rem 2rem 1.5rem;
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 500;
  color: #2d2d2d;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Description = styled.p`
  font-size: 1.5rem;
  font-weight: 300;
  color: #2d2d2d;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 1rem;
  object-fit: cover;
`;
