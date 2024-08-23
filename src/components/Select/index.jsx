// components/CustomSelect.js
import React from 'react';
import Select from 'react-select';

// Define custom styles for react-select using Tailwind CSS classes
const customStyles = ({control = {}, menu = {}, option = {}, placeholder = {}, singleValue = {}, dropdownIndicator = {}, ...restStyles}) => ({
  control: (provided, state) => ({
    ...provided,
    border: '1px solid #e2e8f0',
    boxShadow: 'none',
    '&:hover': {
      border: '1px solid #e2e8f0',
    },
    padding: '0.25rem',
    borderRadius: '0.375rem', // Rounded-md
    backgroundColor: '#ffffff',
    ...control
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: '0.375rem', // Rounded-md
    marginTop: '0.25rem',
    boxShadow: '0 5px 10px rgba(0, 0, 0, 0.05)',
    border: '1px solid #e2e8f0',
    padding: '5px',
    ...menu,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#e2e8f0' : '#ffffff',
    color: '#374151',
    borderRadius: '5px',
    '&:hover': {
      backgroundColor: '#e2e8f0',
      // color: '#ffffff',
    },
    padding: '0.5rem 1rem',
    ...option
  }),
  placeholder: (provided) => ({
    ...provided,
    color: '#9ca3af',
    ...placeholder
  }),
  singleValue: (provided) => ({
    ...provided,
    color: '#374151',
    ...singleValue
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    display: 'none',
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    color: '#374151',
    ...dropdownIndicator,
  }),
  ...restStyles
});

const CustomSelect = ({ options, value, onChange, placeholder = 'Select an option', isMulti = false, className = '', styles = {}, ...props }) => {
  return (
    <div className={`w-full ${className}`}>
      <Select
        options={options}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        styles={customStyles(styles)}
        isMulti={isMulti}
        {...props}
      />
    </div>
  );
};

export default CustomSelect;
