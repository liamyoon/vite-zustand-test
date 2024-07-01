import styled from 'styled-components';

export const MainBox = styled.article`
  display: flex;
  align-items: center;
  padding-top: 100px;
  flex-direction: column;
  height: 100vh;
  > h1 {
    font-size: 20px;
  }
  .todo-input-box {
    display: flex;
    width: 300px;
    padding: 8px;
    gap: 8px;
    > input {
      flex: 1;
      height: 36px;
      font-size: 20px;
      font-weight: 400;
      line-height: 20px;
      border: 1px solid #aaa;
      border-radius: 3px;
      padding: 0 16px;
    }
    > button {
      width: 36px;
      height: 36px;
      font-size: 20px;
      padding: 0;
      margin: 0;
      border: none;
      background-color: transparent;
      transition: 0.3s all;
      border-radius: 8px;
      cursor: pointer;
      &:hover {
        background-color: #ddd;
      }
      &:active {
        color: white;
        background-color: #aaa;
      }
    }
  }
`;
