import React from 'react';

import HeaderContainer from './../../containers/Header';
import FilterContainer from './../../containers/Filter';

export default function({ children }) {  
  return (
    <div>
      <HeaderContainer />
      <FilterContainer />
      { children }
    </div>
  )
};