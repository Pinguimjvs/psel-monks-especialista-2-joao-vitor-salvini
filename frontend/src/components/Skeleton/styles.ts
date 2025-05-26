import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  0% {
    background-position: -200px 0;
  }

  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const Skeleton = styled.div`
  background-color: #e0e0e0;
  background-image: linear-gradient(
    90deg,
    #e0e0e0 0px,
    #f8f8f8 40px,
    #e0e0e0 80px
  );
  background-size: 200px 100%;
  background-repeat: no-repeat;
  animation: ${shimmer} 1.2s infinite;
`;
