import React from 'react';

let styling = {
  "border": "solid black",
  "borderWidth": "0 2px 2px 0",
  "display":"inline-block",
  "padding": "3px",
  "transform": "rotate(-45deg)",
  "WebkitTransform": "rotate(-45deg)"
}
const Arrow = ({ src,value, style }) => {
  return <i style={styling}/>;
};

export default Arrow;