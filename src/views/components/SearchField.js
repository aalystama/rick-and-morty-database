import styled from "styled-components";

function SearchField({ className: c, type }) {
  return (
    <div className={c}>
      <span className="material-icons" id="search-icon">
        search
      </span>
      <input type={type} placeholder="Search by name..." />
    </div>
  );
}

export default styled(SearchField)`
  display: flex;
  align-items: center;
  padding: 16px;
  margin-top: 32px;
  margin-bottom: 16px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.5);
  #search-icon {
    color: rgba(0, 0, 0, 0.5);
    font-size: 24px;
    margin-right: 8px;
  }
  input {
    border: none;
    outline: none;
  }
`;
