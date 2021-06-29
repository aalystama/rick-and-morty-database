import styled from "styled-components";

function BackButton({ className: c }) {
  return (
    <div className={c}>
      <span className="material-icons">arrow_back</span>
      <span className="back-button_text">go back</span>
    </div>
  );
}

export default styled(BackButton)`
  display: flex;
  align-items: center;

  .back-button_text {
    font-family: "Karla";
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;

    margin-left: 8px;

    text-transform: uppercase;
  }

  .material-icons {
    font-size: 24px;
  }
`;
