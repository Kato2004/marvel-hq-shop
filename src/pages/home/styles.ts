import styled from "styled-components";
import { flexCenter } from "../../styles/global-styles";

export const WarningStar = styled.div`
  display: flex;
  background-color: #bbf3f9;
  color: #437b81;
  justify-content: space-between;
  padding: 30px;
  width: 100%;
  max-width: 800px;
  border-radius: 5px;
  margin-top: 40px;
  button {
    background-color: transparent;
    color: #1b5359;
    font-size: 20px;
  }
`;

export const ComicsArea = styled.div`
  ${flexCenter}
  flex-direction: column;
  gap: 20px;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
  }
  max-width: 1600px;
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
