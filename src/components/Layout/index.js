import React from 'react';

import Header from './../Header';
import Filter from './../Filter';

export default function({ children }) {  
  return (
    <div>
      <Header />
      { children }
    </div>
  )
};