import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
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
`;
