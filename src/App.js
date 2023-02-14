import logo from './logo.svg';
import './App.css';

// import React from 'react'
import { NavBar, ProductCardCollection } from './ui-components';
import Terms from './terms.js'



// import {ItemCard, PersonCreateForm, ProductCard, ProductCardCollection, NavBar, AreaCreateForm} from './ui-components';

import { Amplify } from "aws-amplify";
import config from "./aws-exports";
// import {useState } from 'react'

// src/index.js
import { AmplifyProvider } from '@aws-amplify/ui-react'

// import '@aws-amplify/ui-react/styles.css'

// function App() {
 
//   return (
//     <div>
//       "heyeye"
      // <NavBar overrides={{Terms:{onClick: () => setShowTerms(true)}}}/>
      // <div className='container' style={{display :showProfs===true && showTerms === false && 'none'}}>
      //   <Terms/>
      // </div>
      // <div style={{display :showProfs===false && showTerms === true && 'none'}}>
      //   <ProductCardCollection  fontFamily='Arial' margin="auto" />
      // </div>
//     </div>
//   );
// }

// export default App;

import * as React from 'react';
import { Button } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function App() {
  const [showTerms, setShowTerms] = React.useState(false)
  const [showProfs, setShowProfs] = React.useState(true)

  return (

    
    <>
           {/* <Button
            //  ariaLabel="Add item to cart"
            //  backgroundColor="#ffd811"
            //  borderRadius="1rem"
            //  color="black"
            //  fontWeight="normal"
            //  onClick={() => alert('Added to cart! ✅')}
            //  size="small"
            //  width="8rem"
           >
             Add to Cart
           </Button> */}

      <NavBar overrides={{Terms:{onClick: () => setShowTerms(true)}}}/>
      <div className='container' style={{display :showProfs===true && showTerms === false && 'none'}}>
        <Terms/>
      </div>
      <div style={{display :showProfs===false && showTerms === true && 'none'}}>
        <ProductCardCollection  fontFamily='Arial' margin="auto" />
      </div>
      
    </>
  );
}

export default App;
