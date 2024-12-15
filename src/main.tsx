import App from './App';
import React from 'react';
import outputs from '../amplify_outputs.json';
import { Amplify } from 'aws-amplify';
import { createRoot } from 'react-dom/client';

Amplify.configure(outputs);

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
