import { Appbar } from "../component/Appbar/Appbar";
import { Weather } from "../component/Weather/app.js";
import * as React from "react";

export const Home = () => {
  return (
    <div className="Home">
      <Appbar />
      <Weather />
    </div>
  );
};
