import React from 'react';

import HeaderContainer from './../../containers/Header';
import FilterContainer from './../../containers/Filter';
import ListViewContainer from './../../containers/ListView';

export default function({ children }) {  
  return (
    <div>
      <HeaderContainer />
      <FilterContainer />
      <ListViewContainer />
      { children }
    </div>
  )
};