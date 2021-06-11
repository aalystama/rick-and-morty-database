import styled, { css } from "styled-components";
import { RickAndMortyLogoImg } from "../../../assets";
import { sizer } from "../../../utility/Utils";

export default styled.span`
  background-image: url(${RickAndMortyLogoImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  ${sizer(
    css`
      padding: 52px 0px;
    `,
    css``
  )}
`;
