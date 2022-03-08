import Header from "../Header";
import Sidebar from "../Sidebar";
import React from "react";
import Table from "../Table";

const Dictcomp = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <Table></Table>

      <Sidebar></Sidebar>
    </React.Fragment>
  );
};

export default Dictcomp;
