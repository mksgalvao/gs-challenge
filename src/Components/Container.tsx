import React from "react";
import { NavbarComponent } from "./NavbarComponent/NavbarComponent";
import { PhonesWrapper } from "./PhonesWrapper";

export const Container = () => {
  return (
    <>
      <NavbarComponent />
      <div>
        <PhonesWrapper />
      </div>
    </>
  );
};
