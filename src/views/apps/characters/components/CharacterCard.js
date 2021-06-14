import Card from "../../../components/Card";
import styled from "styled-components";

function CharacterCard({ className: c, image, name, species }) {
  return (
    <Card className={c}>
      <img src={image} alt="Character" />
      <div className="character-card__content">
        <span className="character-card__name">{name}</span>
        <span className="character-card__species">{species}</span>
      </div>
    </Card>
  );
}

export default styled(CharacterCard)`
  img {
    height: 232px;
    width: 100%;
  }

  .character-card__content {
    padding: 12px 16px;
    background: white;
  }

  .character-card__name {
    font-weight: 500;
    font-size: 20px;
  }

  .character-card__species {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
  }
`;
