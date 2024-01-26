import { useParams } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../Navbar/NavBar";
import MainPage from "./MainPage";
import { theme } from "../../../../theme";

export default function OrderPage() {
  const { inputValue } = useParams();

  return (
    <OrderPageStyled>
      <div className="container">
        <NavBar id={inputValue} inputValue={inputValue} />
        <MainPage />
      </div>
    </OrderPageStyled>
  );
}

const OrderPageStyled = styled.div`
  background-color: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    border-radius: 15px 15px 15px 15px;
  }
`;