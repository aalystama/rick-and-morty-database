import styled, { css } from "styled-components";
import IconButton from "../../components/IconButton";
import { sizer } from "../../utility/Utils";

function MenuButton({ className: c, toggleMenu }) {
  return (
    <IconButton className={c} onClick={() => toggleMenu()}>
      <span className="material-icons">menu</span>
    </IconButton>
  );
}

export default styled(MenuButton)`
  ${sizer(
    css``,
    css`
      display: none;
    `
  )}
`;
