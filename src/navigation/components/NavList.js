import styled, { css } from "styled-components";
import { sizer } from "../../utility/Utils";

export default styled.ul`
  ${sizer(
    css`
      display: ${(props) => (props.isMenuShown ? "flex" : "none")};
      padding: 0px;
      margin: 0px;
      flex-direction: column;
      flex-basis: 100%;
      align-items: center;
      list-style-type: none;
    `,
    css`
      height: fit-content;
      width: fit-content;
      flex-basis: content;
      display: flex;
      flex-direction: row;
    `
  )}
`;
