import { Button, Image } from "@mantine/core";
import React from "react";
import logo from "../assets/ruedata.png";
import "../styles/AppHeader.css";

const AppHeader = ({ handleOpenModal }) => {
  return (
    <>
      <header className="header">
        <Image src={logo} alt="logo" width={200} height={80} />

        <Button type="button" onClick={handleOpenModal}>
          Nueva mascota
        </Button>
      </header>
    </>
  );
};

export default AppHeader;
