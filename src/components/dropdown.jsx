import React, { useContext } from 'react';
import { DataContext } from '../context/dataContext';

const Dropdown = ({ options, data, style }) => {
  const { appData, setAppData } = useContext(DataContext);

  const handleDropdownChange = (event) => {
    const { value } = event.target;
    setAppData({ ...appData, [data.name]: value });
  };

  return (
    <select value={appData[data.name]} onChange={handleDropdownChange} style={style?.webStyle} >
      {options.map((option, index) => (
        <option key={index} value={option.value}>{option.label}</option>
      ))}
    </select>
  );
};

export default Dropdown;