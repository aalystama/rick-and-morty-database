import styled from "styled-components";
import BackButton from "../../../components/BackButton";

function CharacterPage({ className: c, character }) {
  return (
    <div className={c}>
      <BackButton />
    </div>
  );
}

export default styled(CharacterPage)`
  display: flex;
  flex-direction: column;
  margin: 0px 24px;
`;
