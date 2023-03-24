import styled from "styled-components";
import { flexCenter } from "../../styles/global-styles";

export const ComicsArea = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const SwitchPageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  button {
    background-color: #9f0013;
    ${flexCenter}
    color: #fff;
    border: none;
    padding: 5px 15px;
    border-radius: 5px;
    width: 90px;
    font-size: 20px;
  }
`;
