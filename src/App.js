import "./App.css";
import Header from "./mycomponent/Header";
import Sidebar from "./mycomponent/Sidebar";
import React from "react";
import { Route, Link } from "react-router-dom";
import { Routes } from "react-router-dom";
import Connectcomp from "./mycomponent/connectcomp/connectcom";
import Dictcomp from "./mycomponent/dictcomp/dictcomp";
import Posting from "./mycomponent/posting/Posting";

import AddingProperties from "./mycomponent/crud/Add";
// import { Tablelist } from "./mycomponent/Tablelist";
// import { Tab } from "./mycomponent/Table";

function App() {
  return (
    // <AddingProperties></AddingProperties>
    <>
      <Routes>
        <Route exact path="/" element={<Connectcomp />}></Route>
        <Route exact path="/nlconnect" element={<Connectcomp />}></Route>
        <Route exact path="/dict" element={<Dictcomp></Dictcomp>}></Route>
        <Route exact path="/posting" element={<Posting></Posting>}></Route>
      </Routes>
    </>
  );
}

export default App;
