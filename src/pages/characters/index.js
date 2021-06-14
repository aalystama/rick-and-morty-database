import { useState } from "react";
import styled, { css } from "styled-components";
import Button from "../../components/Button";
import FilterFields from "../../components/FilterFields";
import Modal from "../../components/Modal";
import SearchField from "../../components/SearchField";
import { sizer } from "../../utility/Utils";
import RickAndMortyLogo from "./components/RickAndMortyLogo";

function CharactersPage({ className: c }) {
  const filterSelector = [
    {
      name: "Status",
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
      name: "Gender",
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

  return (
    <div className={c}>
      <RickAndMortyLogo />
      <SearchField type="text" />
      <Button onClick={onOpenModal}>
        <span>Advanced filters</span>
      </Button>
      <Modal title="Filters" isOpen={isModalOpen} onClose={onCloseModal}>
        <FilterFields selectors={filterSelector} />
      </Modal>
    </div>
  );
}

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
