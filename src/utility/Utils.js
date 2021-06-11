import { createGlobalStyle, css } from "styled-components";
import normalize from "styled-normalize";

const Size = {
  TABLET: "768px",
  LAPTOP_L: "1440px",
};

export const Device = {
  TABLET: `min-width: ${Size.TABLET}`,
  DESKTOP: `min-width: ${Size.LAPTOP_L}`,
};

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  body {
    font-family: 'Roboto'
  }
`;

export const sizer = (mobile = "", tablet = null, desktop = null) => css`
  ${mobile ? mobile : ""}
  ${tablet
    ? css`
        @media (${Device.TABLET}) {
          ${tablet}
        }
      `
    : ""}
  ${desktop
    ? css`
        @media (${Device.DESKTOP}) {
          ${desktop}
        }
      `
    : ""}
`;
