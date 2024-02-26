import React from 'react';
import { componentsMap } from '../components'

export function renderComponents(views) {
  return views.map((view, index) => {
    const Component = componentsMap[view.type];
    if (!Component) return null;

    return  <Component key={index} {...view} />
  });
}

function cleanAndCamelCase(str) {
  var words = str.split('-');
  for (var i = 1; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  var camelCasedString = words.join('');
  return camelCasedString;
}

export function cleanKeys(obj) {
  const cleanedObj = {};

  for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
          const cleanedKey = cleanAndCamelCase(key);
          cleanedObj[cleanedKey] = obj[key];
      }
  }

  return cleanedObj;
}