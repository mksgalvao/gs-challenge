import React from "react";
import { NavbarComponent } from "./NavbarComponent/NavbarComponent";
import { PhonesWrapper } from "./PhoneWrapper/PhonesWrapper";

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
