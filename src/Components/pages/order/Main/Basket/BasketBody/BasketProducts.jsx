import { useContext } from "react";

import { IMAGE_COMING_SOON } from "../../../../../../enums/product";
import BasketCard from "./basketCard";
import OrderContext from "../../../../../../context/OrderContext";
import { findObjectById } from "../../../../../utils/array";
import { checkIfProductIsClicked } from "../../MainRightSide/Menu/helper";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { basketAnimation } from "../../../../../../theme/animations";
import styled from "styled-components";

export default function BasketProducts() {
  const {
    username,
    basket,
    isModeAdmin,
    handleDeleteBasketProduct,
    menu,
    handleProductSelected,
    productSelected,
  } = useContext(OrderContext);

  const handleOnDelete = (event, id) => {
    event.stopPropagation();
    handleDeleteBasketProduct(id, username);
  };

  return (
    <TransitionGroup
      component={BasketProductsStyled}
      className={"transition-group"}
    >
      {basket.map((basketProduct) => {
        const menuProduct = findObjectById(basketProduct.id, menu);
        return (
          <CSSTransition
            appear={true}
            classNames={"animation-basket"}
            key={basketProduct.id}
            timeout={300}
          >
            <div className="card-container">
              <BasketCard
                {...menuProduct}
                imageSource={
                  menuProduct.imageSource
                    ? menuProduct.imageSource
                    : IMAGE_COMING_SOON
                }
                quantity={basketProduct.quantity}
                onDelete={(event) => handleOnDelete(event, basketProduct.id)}
                isClickable={isModeAdmin}
                onClick={
                  isModeAdmin
                    ? () => handleProductSelected(basketProduct.id)
                    : null
                }
                isSelected={checkIfProductIsClicked(
                  basketProduct.id,
                  productSelected.id,
                )}
                className={"card"}
              />
            </div>
          </CSSTransition>
        );
      })}
    </TransitionGroup>
  );
}

const BasketProductsStyled = styled.div`
  /* border: 1px solid red; */
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  .card-container {
    /* border: 1px solid blue; */
    margin: 10px 16px;
    height: 86px;
    box-sizing: border-box;
    &:first-child {
      margin-top: 20px;
      /* border: 1px solid red; */
    }
    &:last-child {
      margin-bottom: 20px;
    }
  }

  ${basketAnimation}
`;
