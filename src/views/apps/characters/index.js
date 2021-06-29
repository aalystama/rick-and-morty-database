import { useState } from "react";
import styled, { css } from "styled-components";
import Button from "../../components/Button";
import FilterFields from "../../components/FilterFields";
import Modal from "../../components/Modal";
import SearchField from "../../components/SearchField";
import { sizer } from "../../../utility/Utils";
import CharacterCard from "./components/CharacterCard";
import { Switch, useRouteMatch, Route } from "react-router-dom";
import CharacterPage from "./pages/CharacterPage";
import { RickAndMortyLogoImg } from "../../../assets";

function CharactersPage({ className: c }) {
  const filterSelector = [
    {
      name: "status",
      options: [
        {
          label: "Alive",
          value: "alive",
        },
        {
          label: "Dead",
          value: "dead",
        },
        {
          label: "Unknown",
          value: "unknown",
        },
      ],
    },
    {
      name: "gender",
      options: [
        {
          label: "Male",
          value: "male",
        },
        {
          label: "Female",
          value: "female",
        },
        {
          label: "Genderless",
          value: "genderless",
        },
        {
          label: "Unknown",
          value: "unknown",
        },
      ],
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const onOpenModal = () => setIsModalOpen(true);

  const onCloseModal = () => setIsModalOpen(false);

  let match = useRouteMatch();

  return (
    <Switch>
      <Route
        exact
        path={`${match.path}`}
        component={() => (
          <div className={c}>
            <RickAndMortyLogo />
            <SearchField type="text" />
            <Button onClick={onOpenModal}>
              <span>Advanced filters</span>
            </Button>
            <Modal title="Filters" isOpen={isModalOpen} onClose={onCloseModal}>
              <FilterFields selectors={filterSelector} />
            </Modal>
            <CharacterCard
              image="https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png"
              name="Rick Sanchez"
              species="Human"
            />
          </div>
        )}
      />
      <Route to={`${match.path}/:character`} component={CharacterPage} />
    </Switch>
  );
}

const RickAndMortyLogo = styled.span`
  background-image: url(${RickAndMortyLogoImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  ${sizer(
    css`
      padding: 52px 0px;
    `
  )}
`;

export default styled(CharactersPage)`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  ${sizer(
    css`
      padding: 32px 24px;
    `
  )}
`;
