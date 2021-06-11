import Select from "react-select";
import styled, { css } from "styled-components";
import {
  useFilterDispatch,
  useFilterState,
} from "../pages/characters/FilterContext";
import { sizer } from "../utility/Utils";

function SelectField({ name, options }) {
  const StateContext = useFilterState();
  const DispatchContext = useFilterDispatch();

  return (
    <Select
      defaultValue={StateContext}
      value={StateContext}
      placeholder={name}
      options={options}
      onChange={(option) => DispatchContext(option)}
    />
  );
}

function FilterFields({ className: c, selectors }) {
  return (
    <ul className={c}>
      {selectors.map((v, i) => (
        <li key={i}>
          <SelectField key={i} name={v.name} options={v.options} />
        </li>
      ))}
    </ul>
  );
}

export default styled(FilterFields)`
  ${sizer(css`
    display: flex;
    justify-content: stretch;
    flex-direction: column;
    list-style-type: none;
    padding: 0px;
    margin: 0px;
    li {
      margin-bottom: 16px;
      &:last-child {
        margin: 0px;
      }
    }
  `)}
`;
