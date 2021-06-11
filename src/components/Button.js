import styled from "styled-components";

function Button({ children, className: c, onClick }) {
  return (
    <button className={c} onClick={onClick}>
      {children}
    </button>
  );
}

export default styled(Button)`
  background: #e3f2fd;
  padding: 16px;
  color: #2196f3;
  font-size: 14px;
  letter-spacing: 1.25px;
  text-transform: uppercase;
  border-radius: 4px;
  border: none;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  &:hover {
    background: rgba(217, 232, 243, 1);
  }
`;
