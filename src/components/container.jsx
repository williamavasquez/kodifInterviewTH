import React from 'react';
import {renderComponents} from '../utils/index';

const Container = ({ children, style}) => {
  return (
    <div style={style?.webStyle}>
      {children && children.length > 0 && children.map((child, index) => {
        return <>{renderComponents([child])}</>
      }
      )}
    </div>
  );
};

export default Container;
