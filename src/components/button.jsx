import React, { useState, useEffect, useContext} from 'react';
import { DataContext } from '../context/dataContext';

import { cleanKeys } from '../utils'
import Arrow from './arrow';

const Button = ({ data, style }) => {
  const { appData  } = useContext(DataContext);

  const [hover, setHover] = useState(false);

  useEffect(() => { }, [hover]);

  let cleanStyles = cleanKeys(style?.webStyle)
  const testFunc = () => console.log(appData)

  let hoverCss = hover ? { ...style?.actions.onHover } : {}

  return (
    <button style={{ ...cleanStyles, ...hoverCss }}
      onClick={() => testFunc()}
      onMouseOver={(e) => {
        e.preventDefault();
        setHover(true);
      }}
      onMouseLeave={(e) => {
        e.preventDefault();
        setHover(false);
      }}
    >
      {data.title}
      {data.addArrow && <Arrow />}
    </button>)
};

export default Button;