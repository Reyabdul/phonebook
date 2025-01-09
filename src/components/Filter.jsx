import React from "react";

const Filter = ({newFilter, handleFilterChange}) => {

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
      <input name={newFilter} onChange={handleFilterChange} value={newFilter} />
      </div>
    </div>
  )
}

export default Filter;