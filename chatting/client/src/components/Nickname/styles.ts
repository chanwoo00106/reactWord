import styled from "styled-components";

export const Nickname = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
`;

export const Contents = styled.div`
  background: #fff;
  width: 35rem;
  height: 20rem;
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin: 0;
`;

export const Input = styled.input`
  font-size: 1.2rem;
  padding: 10px;
  border: 2px solid #218fff;
  border-radius: 5px;
  outline: none;
  box-sizing: border-box;
  box-shadow: 0 0 10px #218fff;
  width: 70%;
`;