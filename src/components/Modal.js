import styled from "styled-components";
import IconButton from "./IconButton";

const Overlay = styled.div`
  position: absolute;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  justify-content: stretch;
  align-items: center;
  height: 100vh;
  width: 100vw;
  inset: 0px;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Content = styled.div`
  display: ${(props) => (props.isOpen ? "block" : "none")};
  width: 100%;
  background-color: white;
  margin: 0px 25px;
  padding: 16px;
  border-radius: 4px;
`;

const ContentHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  p {
    font-size: 20px;
    margin: 0px;
  }
`;

function Modal({ children, title, isOpen, onClose }) {
  return (
    <Overlay isOpen={isOpen}>
      <Content isOpen={isOpen}>
        <ContentHeading>
          <p>{title}</p>
          <IconButton onClick={onClose}>
            <span className="material-icons">close</span>
          </IconButton>
        </ContentHeading>
        {children}
      </Content>
    </Overlay>
  );
}

export default Modal;
