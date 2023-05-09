import PropTypes from 'prop-types';
import { FilterTitle, FilterInput } from './Filter.styled';

export default function Filter({ handleFilter }) {
  return (
    <>
      <FilterTitle>Find contacts by name</FilterTitle>
      <FilterInput type="search" name="filter" onChange={handleFilter} />
    </>
  );
}

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};
