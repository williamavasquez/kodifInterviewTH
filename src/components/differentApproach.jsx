import React, { createElement } from 'react';

//This was another approach I was thinking of using. I kept it here for comparison purposes.
const Item = ({ type, style, value, children }) => {
  return (
    <>
      {
        createElement(type, { style: style?.webStyle, value: value },
          children && children.length > 0 && children.map((child, index) => {
            return Item(child)
          }
          ))
      }
    </>)

};

export default Item;
