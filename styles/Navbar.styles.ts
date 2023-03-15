import styled from "styled-components";

export const NavContainer = styled.div`
  background-color: #ffc116;

  //#05b993

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 42px;
  width: 100%;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    padding: 10px 16px;
  }
`;
