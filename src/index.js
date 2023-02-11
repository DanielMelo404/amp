import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ItemCard, PersonCreateForm, ProductCard, ProductCardCollection, NavBar, AreaCreateForm} from './ui-components';

import { Amplify } from "aws-amplify";
import config from "./aws-exports";

// src/index.js
import { AmplifyProvider } from '@aws-amplify/ui-react'

import '@aws-amplify/ui-react/styles.css'

Amplify.configure(config);

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <AmplifyProvider>
    <NavBar/>
    <ProductCardCollection/>
    <PersonCreateForm/>
    <AreaCreateForm/>
  </AmplifyProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();