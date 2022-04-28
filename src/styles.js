import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  @media (min-width: 800px) {
    width: 800px;
  }
`;

export const InputGroup = styled.div`
  width: 100%;
  background-color: var(--Light-Blue);
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  .icon {
    width: 20px;
  }
`;

export const Input = styled.input`
  color: var(--White);
  width: 100%;
  font-size: 14px;
  padding: 15px 10px;
  margin: 0 10px;
  background: none;
`;

export const Button = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 6px;
  background-color: var(--Button);
  color: var(--White);
`;
