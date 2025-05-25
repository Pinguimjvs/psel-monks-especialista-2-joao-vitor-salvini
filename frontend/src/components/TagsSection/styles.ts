import styled from "styled-components";

export const Container = styled.section`
  padding: 1.5rem 5rem;
  text-align: left;

  @media (max-width: 768px) {
    padding: 1.5rem 2rem;
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 400;
  color: #2d2d2d;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    font-weight: 400;
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0rem 5rem;
  gap: 1.5rem;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 0rem;
    gap: 1rem;
  }
`;

export const Tag = styled.div`
  padding: 0.5rem 5rem;
  border: 1px solid #7d26c9;
  border-radius: 2rem;
  background-color: #dfdcd5;
  color: #7d26c9;
  font-weight: 600;
  cursor: pointer;
  text-align: center;
  transition: background 0.2s;

  &:hover {
    background-color: #f2e6fc;
  }

  @media (max-width: 768px) {
    padding: 0.5rem 1.5rem;
  }
`;
