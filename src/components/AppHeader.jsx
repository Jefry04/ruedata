import { Button } from "@mantine/core";
import React from "react";
import "../styles/AppHeader.css";

const AppHeader = ({handleOpenModal}) => {

  return (
    <>
      <header className="header">
        <p>RUEDATA</p>
        <Button type="button" onClick={handleOpenModal}>Nueva mascota</Button>
      </header>
    </>
  );
};

export default AppHeader;
