import React, { useContext } from 'react';
import { cleanKeys } from '../utils'
import { DataContext } from '../context/dataContext';


const Input = ({ style, data }) => {
  const { placeholder } = data

  const { appData, setAppData } = useContext(DataContext);
  let cleanStyles = cleanKeys(style?.webStyle)

  const handleChange = (event) => {
    const { value } = event.target;
    setAppData({ ...appData, [data.name]: value });
  }

  return <input type="text" placeholder={placeholder} value={appData[data.name]} onChange={handleChange} style={cleanStyles} />;
};

export default Input;
