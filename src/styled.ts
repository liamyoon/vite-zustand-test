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
  }
  button {
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
  .todo-list-box {
    width: 300px;
    ul > li {
      display: flex;
      align-items: center;
      padding: 4px 8px;
      > label {
        display: flex;
        width: calc(100% - 20px);
        cursor: pointer;
        line-height: 20px;
        &.completed {
          > p {
            text-decoration: line-through;
          }
        }
        > p {
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      > button {
        flex: 0 0 20px;
        font-size: 14px;
        line-height: 20px;
        width: 20px;
        height: 20px;
      }
    }
  }
`;
