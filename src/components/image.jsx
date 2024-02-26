import React from 'react';

const Image = ({ src,value, style }) => {
  return <img src={value} style={style?.webStyle} />;
};

export default Image;