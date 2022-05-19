import React from 'react';

const CardFilter = ({ filter, setFilter }) => {
  return (
    <div>
      <input
        placeholder='search'
        value={filter.query}
        onChange={e => setFilter({ ...filter, query: e.target.value })}
      />
    </div>
  );
};

export default CardFilter;