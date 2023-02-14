import logo from './logo.svg';
import './App.css';

// import React from 'react'
import { NavBar, ProductCardCollection } from './ui-components';
import Terms from './terms.js'
import Contact from './Contact.js'



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
  const [showContact, setShowContact] = React.useState(false)

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

      <NavBar overrides={{
        Terms:{
        onClick: () => {
        setShowTerms(true)
        setShowProfs(false)
        setShowContact(false)
        },
        style:{cursor:'pointer'}
      }, 
      'Find teachers':{
          onClick: () => {
            setShowProfs(true)
            setShowTerms(false)
            setShowContact(false)
            },
          style:{cursor:'pointer'}
        }
          ,
          Contact:{
            onClick: () => {
              setShowProfs(false)
              setShowTerms(false)
              setShowContact(true)
              },
            style:{
              cursor:'pointer'
            }
          }
          
          }}/>
      <div className='container'  style={{display :(showProfs===true || showTerms === false || showContact === true) && 'none'}}>
        <Terms/>
      </div>
      <div style={{display :(showProfs===false && showTerms === true || showContact === true) && 'none'}}>
      <div className="banner">
            <h3 className="banner">
            Get in touch with a math/physics/statistics teacher easy
            </h3>

        </div>

        <ProductCardCollection  fontFamily='Arial' margin="auto" />
      </div>

      <div style={{display :(showProfs===true || showTerms === true || showContact === false) && 'none'}}>
        <Contact   fontFamily='Arial' margin="auto" 
        overrides={{
          Rating:{
            
          }
        }}/>
      </div>

      

      
    </>
  );
}

export default App;
