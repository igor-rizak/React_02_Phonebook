export const Filter = ({ handleFilterChange }) => {
  return (
    <>
      <span>Find contacts by name</span>
      <input type="text" onChange={handleFilterChange} name="filter" />
    </>
  );
};
