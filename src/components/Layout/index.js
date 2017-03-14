import React from 'react';

import HeaderContainer from './../../containers/Header';
import Filter from './../Filter';

export default function({ children }) {  
  return (
    <div>
      <HeaderContainer />
      <Filter />
      { children }
    </div>
  )
};