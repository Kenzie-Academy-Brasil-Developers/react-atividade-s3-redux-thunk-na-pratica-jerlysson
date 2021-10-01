import styled from "styled-components";

export const BoxMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;

  textarea {
    margin-left: 15px;
    width: 70%;
    opacity: 50%;
    border-radius: 10px;
    padding: 5px;
  }
  button {
    font-weight: bold;
    font-size: 15px;
    margin: 5px;
    height: 50px;
    border-radius: 10px;
    cursor: pointer;
    :hover {
      background: #3a3af8;
      color: white;
    }
  }
`;
