import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'

import AOS from 'aos';
import 'aos/dist/aos.css';

import './svg.js'

import './index.css'
import {useEffect} from "react";

function App() {
  useEffect(() => {
    AOS.init();
  } , []);
  return (
    <RedwoodProvider>
      <RedwoodApolloProvider>
        <FatalErrorBoundary page={FatalErrorPage}>
          <Routes />
        </FatalErrorBoundary>
      </RedwoodApolloProvider>
    </RedwoodProvider>
  )
}


// const App = () => (
//
//   return(
//   <FatalErrorBoundary page={FatalErrorPage}>
//     <RedwoodProvider titleTemplate="%AppTitle - %PageTitle">
//       <RedwoodApolloProvider>
//         <Routes />
//       </RedwoodApolloProvider>
//     </RedwoodProvider>
//   </FatalErrorBoundary>
//   )
// )

export default App
