import styled from "styled-components";
import BackButton from "../../../components/BackButton";

const InfoTypes = {
  INFO: "information",
  EPISODES: "episodes",
};

function CharacterPage({ className: c, character }) {
  const data = [
    {
      title: "Episodes",
      values: [
        {
          title: "example",
          text: "example",
          overline: "example",
        },
        {
          title: "example",
          text: "example",
          overline: "example",
        },
        {
          title: "example",
          text: "example",
          overline: "example",
        },
        {
          title: "example",
          text: "example",
          overline: "example",
        },
        {
          title: "example",
          text: "example",
          overline: "example",
        },
      ],
      type: InfoTypes.EPISODES,
    },
    {
      title: "Information",
      values: [
        {
          title: "example",
          text: "example",
        },
        {
          title: "example",
          text: "example",
        },
        {
          title: "example",
          text: "example",
        },
        {
          title: "example",
          text: "example",
        },
      ],
      type: InfoTypes.INFO,
    },
  ];

  return (
    <div className={c}>
      <BackButton />
      <CharacterImage />
      <CharacterName>Rick Sanchez</CharacterName>
      {data.map((v, i) => (
        <CharacterInfo data={v} key={i} />
      ))}
    </div>
  );
}

const CharacterImage = styled.img`
  height: 150px;
  width: 150px;
  margin: 16px 0px;
  border-radius: 50%;
  border: 5px solid #f2f2f7;
  align-self: center;
`;

const CharacterName = styled.h1`
  margin: 0px 0px 32px 0px;
  font-size: 32px;
  line-height: 37px;
  font-weight: normal;
  align-self: center;
`;

export default styled(CharacterPage)`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

function CharacterInfo({ data }) {
  return (
    <CharacterInfoWrapper>
      <CharacterInfoTitle>{data.title}</CharacterInfoTitle>
      <CharacterInfoList>
        {data.values.map((v, i) => {
          if (data.type === InfoTypes.INFO) {
            return (
              <CharacterInfoTile key={i}>
                <TileTitle>{v.title}</TileTitle>
                <TileText>{v.text}</TileText>
              </CharacterInfoTile>
            );
          } else if (data.type === InfoTypes.EPISODES) {
            return (
              <CharacterInfoTile key={i}>
                <TileTitle>{v.title}</TileTitle>
                <TileText>{v.text}</TileText>
                <TileOverline>{v.overline}</TileOverline>
              </CharacterInfoTile>
            );
          } else {
            throw new Error("Unknown data type");
          }
        })}
      </CharacterInfoList>
    </CharacterInfoWrapper>
  );
}

const CharacterInfoWrapper = styled.div`
  margin-bottom: 52px;

  &:last-child {
    margin-bottom: 0px;
  }
`;

const CharacterInfoTitle = styled.h2`
  margin: 0px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #8e8e93;
`;

const CharacterInfoList = styled.ul`
  list-style-type: none;
  padding: 0px 0px 0px 16px;
  margin: 16px 0px 0px 0px;
`;

const CharacterInfoTile = styled.li`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(33, 33, 33, 0.08);
  padding: 9px 0px 12px 0px;
`;

const TileTitle = styled.h3`
  margin: 0px;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
`;

const TileText = styled.span`
  font-size: 14px;
  line-height: 20px;
  color: #6e798c;
`;

const TileOverline = styled.span`
  font-weight: 500;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #8e8e93;
`;
