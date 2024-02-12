import React from "react";
import styled from "styled-components";
import { theme } from "../../../../theme";
import MenuStyled from "./Menu";
import AdminStyled from "../Admin/Admin";
export default function MainPage() {
  return (
    <MainPageStyled>
      <MenuStyled />
      <AdminStyled />
    </MainPageStyled>
  );
}

const MainPageStyled = styled.div`
  /* flex: 1; */
  height: calc(95vh - 10vh);
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};
  display: grid;
  grid-template-columns: 1fr;
  overflow-y: hidden;
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
`;
