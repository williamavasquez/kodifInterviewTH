import React from 'react';

const Text = ({ src,data, style }) => {
  return <p style={style?.webStyle}>{data.value}</p>;
};

export default Text;