import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter as Router} from "react-router-dom";
import {

    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";




const queryClient = new QueryClient({

    defaultOptions:{
        queries:{
            //time before re-fetching of data
            staleTime:60 *1000,
        }


    }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

      <QueryClientProvider client={ queryClient}>
          <ReactQueryDevtools initialIsOpen={false}/>
          <Router>
              <App />
          </Router>
      </QueryClientProvider>


  </React.StrictMode>,
)
