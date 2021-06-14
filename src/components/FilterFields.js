import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";
import styled, { css } from "styled-components";
import { changeValue } from "../pages/characters/filterSlice";
import { sizer } from "../utility/Utils";

function SelectField({ name, options, value, onChange }) {
  const StyledSelect = styled(Select)`
    .react-select__placeholder {
      text-transform: capitalize;
    }
  `;

  return (
    <StyledSelect
      value={value}
      placeholder={name}
      options={options}
      onChange={onChange}
      classNamePrefix="react-select"
    />
  );
}

function FilterFields({ className: c, selectors }) {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

  function changeFilterValue(option, name) {
    dispatch(changeValue({ name: name, value: option }));
  }

  return (
    <ul className={c}>
      {selectors.map((v, i) => (
        <li key={i}>
          <SelectField
            key={i}
            name={v.name}
            options={v.options}
            value={filter[v.name]}
            onChange={(option) => changeFilterValue(option, v.name)}
          />
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
