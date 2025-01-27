import { useState } from "react";
import { React } from "react";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Modal from "./components/Modal";
import  base from "./public/stays.json"

function App() {
 

  return (
    <>
      <div className="relative p-8">
      <Modal />
        <Header />
        <Counter />

        <Cards />
      </div>
    </>
  );
}
{/*  */}
export default App;
