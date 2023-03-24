import styled from "styled-components";
import { flexCenter } from "../../styles/global-styles";

export const Container = styled.div`
  height: 90vh;
  width: 100%;
  ${flexCenter}
`;

export const Square = styled.div`
  @keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    50% {
      transform: rotate(100deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  position: static;
  top: 0;
  width: 50px;
  height: 50px;
  border-radius: 2px;
  background-color: #9f0013;
  animation: rotate-center 2s linear infinite;
`;
