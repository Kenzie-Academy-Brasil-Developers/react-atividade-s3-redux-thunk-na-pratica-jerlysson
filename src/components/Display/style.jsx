import styled from "styled-components";

export const Container = styled.div`
  background: #6c6cdc;
  width: 70%;
  height: 70%;
  border-radius: 2em;
  display: flex;
  flex-direction: column;
`;
export const BoxText = styled.div`
  overflow: auto;
  padding: 0;
  word-break: break-word;
  height: 60%;
  align-items: end;
  justify-content: flex-end;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto 20px;
  border-radius: 20px;
  box-shadow: 0 2px 5px;
  font-family: "Nanum Gothic", sans-serif;
  p {
    list-style: none;
    background-color: #a1a1cc45;
    font-size: 18px;
    border-radius: 10px;
    margin: 0 20px;
  }
`;
export const UserBox = styled.div`
  margin: 3%;
  width: 20%;
  min-width: 90px;
  max-width: 150px;
  justify-content: space-between;
  display: flex;
  div {
    width: 4em;
    height: 4em;
    background: black;
    color: white;
    border-radius: 100%;
    font-weight: bold;
    font-size: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
