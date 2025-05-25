import styled from "styled-components";

export const Container = styled.section`
  padding: 2rem 5rem 4rem 5rem;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem 2rem 1.5rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(17.5rem, 1fr));
  gap: 2.5rem;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 1rem;
  border: 2px solid #d9b8ff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.06);
  text-align: left;
  align-items: flex-start;

  h3 {
    font-size: 1.5rem;
    font-weight: 500;
    color: #2d2d2d;
    line-height: 2.25rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.25rem;
    font-weight: 400;
    color: #2d2d2d;
    line-height: 30px;
    margin-bottom: 1.5rem;
  }

  button {
    align-self: center;
  }
`;

export const Button = styled.button`
  width: fit-content;
  padding: 0.5rem 2.5rem;
  background-color: #efccff;
  color: #2d2d2d;
  font-weight: 700;
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background-color: #e1a8ff;
  }
`;
