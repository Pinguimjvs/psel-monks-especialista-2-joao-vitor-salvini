import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  background-color: #2d2d2d;
  padding: 4rem 5rem;
  gap: 2.5rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    background-color: #2d2d2d;
    padding: 2rem 1.5rem;
    gap: 2.5rem;
    align-items: center;
    justify-content: center;
    max-width: 100vw;
    box-sizing: border-box;
  }
`;

export const Box = styled.div`
  background-color: #ecebe7;
  padding: 1.5rem;
  border-radius: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  max-width: 75rem;
  width: 100%;
  box-sizing: border-box;

  button {
    align-self: center;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 1.5rem;
    max-width: 100%;
  }
`;

export const Illustration = styled.div`
  flex: 1;
  background-color: #2d2d2d;
  img {
    width: 100%;
    max-width: 315px;
  }
`;

export const Form = styled.form`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: bold;
  color: #1c1c1c;
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: #555;
`;

export const Label = styled.label`
  font-size: 0.875rem;
  color: #333;
`;

export const Input = styled.input`
  padding: 0.75rem;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 0.375rem;
  font-size: 1rem;
  flex: 1;
  min-width: 0;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 0.625rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SecurityCheck = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  strong {
    font-size: 1rem;
    color: #1c1c1c;
  }
`;

export const SecurityText = styled.strong`
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 2rem;
`;

export const Equation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  span {
    font-weight: bold;
    font-size: 1rem;
    color: #5c268c;
  }

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Numbers = styled.div`
  display: flex;

  gap: 1.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  background-color: #dfdcd5;
`;

export const Counters = styled.div`
  display: flex;
  gap: 1.5rem;

  align-items: center;
`;

export const Button = styled.button`
  background-color: #decbed;
  width: fit-content;
  color: #2d2d2d;
  border: none;
  border-radius: 0.375rem;
  padding: 0.5rem 2.5rem;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background-color: #caaee0;
  }
`;
