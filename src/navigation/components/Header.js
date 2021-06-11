import styled, { css } from "styled-components";

export default styled.header`
  box-shadow: -2px 0px 8px 2px rgba(0, 0, 0, 0.1);
  background: white;
  ${(props) =>
    props.isMenuShown
      ? css`
          position: absolute;
          height: 100vh;
          width: 100vw;
        `
      : css``}
`;
