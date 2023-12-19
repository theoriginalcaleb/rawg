import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css';

import { StateContextProvider } from './context/StateContext.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <StateContextProvider>
           <BrowserRouter>
  <MantineProvider>
  <App />
  </MantineProvider>
  </BrowserRouter>  
  </StateContextProvider>

 
 

 
)
