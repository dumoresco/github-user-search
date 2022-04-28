import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: 20px;
  border-radius: 15px;

  background-color: vaR(--Light-Blue);

  .bio {
    font-size: 14px;
    margin-top: 20px;
    opacity: 0.8;
  }

  @media (min-width: 800px) {
    width: 800px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserIcon = styled.img`
  max-width: 100px;
  border-radius: 100%;
`;

export const UserInfo = styled.div`
  width: 100%;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  flex-direction: column;

  h1 {
    font-size: 16px;
    font-weight: bold;
  }

  h2 {
    font-size: 14px;
    color: var(--Button);
    margin: 10px 0;
  }

  span {
    font-size: 14px;
    color: var(--White);
    opacity: 0.8;
  }
`;

export const UserData = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--Dark-Blue);
  padding: 20px;
  margin: 20px 0;
  border-radius: 10px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p {
      font-size: 12px;
      opacity: 0.5;
    }

    span {
      margin-top: 10px;
    }
  }
`;

export const UserList = styled.div`
  li {
    display: flex;
    align-items: center;

    margin-top: 10px;
    font-size: 14px;

    p {
      opacity: 0.3;
    }

    .icon {
      margin-right: 10px;
    }
  }
`;
