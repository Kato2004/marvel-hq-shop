import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  transition: 2s opacity;
`;

export const MovieGrid = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 10px;
`;

export const SwitchPageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  button {
    background-color: #9f0013;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border: none;
    padding: 5px 15px;
    border-radius: 5px;
    width: 90px;
    font-size: 20px;
  }
`;
