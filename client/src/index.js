import React from 'react';
import ReactDOM from 'react-dom/client';
// import { BrowserRouter as Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { StateContextProvider } from './context/ind';
import { Routes,Route} from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";
// import  functions from 'firebase-functions';
// import * as admin from 'firebase-admin';
import ReadContent from './pages/user/readcontent';
import App from './App';





const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain="dev-petrhms2thok1i1v.us.auth0.com"
    clientId="PZQFGDHie659askeNmFeexgpbhZgH98k"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >

  <ThirdwebProvider desiredChainId={ChainId.Goerli}> 
   <Router>
      <StateContextProvider>
        <App />
        
      </StateContextProvider>
    </Router>
     
  </ThirdwebProvider> 
  </Auth0Provider>
)