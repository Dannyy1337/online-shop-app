import React from 'react';

const CardFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <input
                placeholder='search'
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })}
            />
            {/* <SortedSelect
          value={filter.sort}
          defaultValue='All'
          options={[
            { value: 'type 1', name: 'Type 1' },
            { value: 'type 2', name: 'Type 2' },
          ]}
        /> */}
        </div>
    );
};

export default CardFilter;