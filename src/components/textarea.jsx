import React, { useContext } from 'react';
import { cleanKeys } from '../utils'
import { DataContext } from '../context/dataContext';


const TextArea = ({  style, data }) => {
  const { appData, setAppData } = useContext(DataContext);
  let cleanStyles = cleanKeys(style?.webStyle)

    const handleChange = (event) => {
      const { value } = event.target;
      setAppData({ ...appData, [data.name]: value });
    }

  return <textarea value={appData[data.name]} onChange={handleChange} style={cleanStyles} rows={data?.rows} />;

};

export default TextArea;
