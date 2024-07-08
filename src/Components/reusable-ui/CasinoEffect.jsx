import { CSSTransition, TransitionGroup } from "react-transition-group";
import styled from "styled-components";

export default function CasinoEffect({ count, className }) {
  return (
    <TransitionGroup
      component={CasinoEffectStyled}
      className="transition-group"
    >
      <CSSTransition classNames="count-animated" timeout={5000} key={count}>
        <span className={className}> {count}</span>
      </CSSTransition>
    </TransitionGroup>
  );
}

const CasinoEffectStyled = styled.div`
  position: relative;
  overflow-y: hidden;

  span {
    display: inline-block;
  }
  // MOUNTING
  .count-animated-enter {
    transform: translateY(100%);
  }
  .count-animated-enter-active {
    transform: translateY(0%);
    transition: 2s;
  }
  .count-animated-enter-done {
  }

  // UNMOUNTING
  .count-animated-exit {
    transform: translateY(0%);
    position: absolute;
    left: 0;
    bottom: 0;
  }
  .count-animated-exit-active {
    transform: translateY(-100%);
    transition: 2s;
  }
`;
