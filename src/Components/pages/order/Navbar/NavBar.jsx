import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../../reusable-ui/Logo";
import NavBarRightSide from "./NavBarRightSide";
import { theme } from "../../../../theme";
import UserContext from "../../../../context/UserContext";

export default function NavBar() {
  const { username } = useContext(UserContext);

  return (
    <NavBarStyled>
      <Link to={`/order/${username}`}>
        <Logo />
      </Link>
      <NavBarRightSide id={username} />
    </NavBarStyled>
  );
}

const NavBarStyled = styled.nav`
  background-color: ${theme.colors.white};
  border-radius: 15px 15px 0px 0px;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
`;
