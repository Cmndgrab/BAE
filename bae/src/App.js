
import Search from "./components/Search/Search";
import Result from "./components/Result/Result";
import { useState } from "react";
import data from "./lib/data";
import './App.css';
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Page from './components/page/Page.js';

function App() {

  const [food, setFood] = useState("");
  const foodByName = (name) => {
  setFood(data.filter((food) => food.name.toLowerCase().includes(name.toLowerCase())));
  return foodByName;
  };
  


  return (
    <ChakraProvider>
    <div className="App">
      <Search/>
      <Result food={foodByName}/>
    </div>
    <Page/>
    </ChakraProvider>
  );
}

export default App;
