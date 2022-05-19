import React from 'react';

const sortedSelect = ({ options, defaultValue, value, onChange }) => {
    return (
        <select value={value}
            onChange={event => onChange(event.target.value)}
        >
            <option value='' selected>{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>

    );
};

export default sortedSelect;