import React from 'react';

export default (props) => {
    const {label, options, onSelect, value, onTextChange, placeholder} = props;
    return (
        <div className="filter">
            <div className="filter-label">
                {label}:
            </div>
            {!!onSelect &&
            <select className="filter-field"
                    value={value}
                    onChange={onSelect}>
                {options && options.map(option => (
                    <option value={option.value}
                            key={option.value}
                    >
                        {option.name}
                    </option>)
                )}
            </select>
            }
            {!!onTextChange &&
                <input className="filter-field"
                       placeholder={placeholder}
                       onChange={onTextChange} />
            }
        </div>
    );
}