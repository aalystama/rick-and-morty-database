import styled, { css } from "styled-components";
import { sizer } from "../../utility/Utils";

export default styled.li`
  ${sizer(
    css`
      font-family: "Karla";
      font-weight: bold;
      font-size: 24px;
      margin: 48px 0px;
      &:last-child,
      &:first-child {
        margin: 0px;
      }
    `,
    css`
      font-size: 18px;
      margin: 0px 24px;
    `
  )}
`;
