import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 7px;
  background-color: #9f0013;
  color: #fff;
  border-radius: 5px;
  position: relative;
  img {
    width: 100%;
    border-radius: 2px;
  }

  > div {
    padding: 10px 3px;
    padding-bottom: 10px;
    .title {
      font-size: 20px;
    }
  }

  span {
    position: absolute;
    font-size: 70px;
    color: #fdff00;
  }
  @media (min-width: 768px) {
    max-width: 300px;
    img {
    }
    > div {
      min-height: 100px;
    }
  }
`;
