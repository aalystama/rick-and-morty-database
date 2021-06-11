import styled, { css } from "styled-components";
import { sizer } from "../../utility/Utils";

export default styled.nav`
  ${sizer(
    css`
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      padding: 6px 28px;
    `,
    css`
      padding: 12px 210px;
    `
  )}
`;
