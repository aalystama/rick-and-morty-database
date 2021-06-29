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
  border-radius: 4px;

  img {
    height: 232px;
    width: 100%;
    border-radius: 4px 4px 0px 0px;
    object-fit: cover;
    object-position: center center;
  }

  .character-card__content {
    display: flex;
    flex-direction: column;
    background: white;
    padding: 12px 16px;
    border-radius: 4px;
  }

  .character-card__name {
    font-size: 20px;
    line-height: 30px;
    font-weight: 500;
  }

  .character-card__species {
    font-size: 14px;
    line-height: 21px;
    color: rgba(0, 0, 0, 0.6);
  }
`;
