import logo from './logo.svg';
import './App.css';

import React from 'react'
import { NavBar, ProductCardCollection } from './ui-components';
import Terms from './terms.js'

function App() {
  const [showTerms, setShowTerms] = React.useState(false)
  const [showProfs, setShowProfs] = React.useState(true)

  return (
    <div>
      "heyeye"
      <NavBar overrides={{Terms:{onClick: () => setShowTerms(true)}}}/>
      <div className='container' style={{display :showProfs===true && showTerms === false && 'none'}}>
        <Terms/>
      </div>
      <div style={{display :showProfs===false && showTerms === true && 'none'}}>
        <ProductCardCollection  fontFamily='Arial' margin="auto" />
      </div>
    </div>
  );
}

export default App;
