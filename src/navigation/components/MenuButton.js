import styled, { css } from "styled-components";
import { sizer } from "../../utility/Utils";
import IconButton from "../../views/components/IconButton";

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
