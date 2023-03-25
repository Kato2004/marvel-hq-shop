import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 7px;
  background-color: #9f0013;
  color: #fff;
  border-radius: 5px;
  img {
    width: 100%;
    border-radius: 2px;
  }

  > div {
    padding: 10px 3px;

    .title {
      font-size: 20px;
    }
    .price {
      margin-top: 5px;
    }
  }

  @media (min-width: 768px) {
    max-width: 300px;
    max-height: 500px;
    img {
      height: 100%;
    }
    > div {
      min-height: 100px;
    }
  }
`;
