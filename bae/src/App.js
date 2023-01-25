
import Search from "./components/Search/Search";
import Result from "./components/Result/Result";

import './App.css';
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Page from './components/page/Page.js';

function App() {
  return (
    <ChakraProvider>
    <div className="App">
      <Search/>
      <Result />
    </div>
    <Page/>
    </ChakraProvider>
  );
}

export default App;
