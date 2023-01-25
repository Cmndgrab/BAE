import Search from "./components/Search/Search";
import Result from "./components/Result/Result";
import { useState } from "react";
import data from "./lib/data";
import "./App.css";
import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Page from "./components/page/Page.js";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [clicked, setClick] = useState(false)
  const [food, setFood] = useState("");
  const foodByName = (name) => {
    setFood(
      data.filter((food) =>
        food.name.toLowerCase().includes(name.toLowerCase())
      )
    );
    return foodByName;
  };

  return (
    <ChakraProvider>
      <Header />
      <div className="App">
        <Search click={clicked} />
        
      </div>
      <Page />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
