import React from "react";
import Weather from "./Weather";
import Date from "./Date";

import "./index.css";

export default function App() {
  return (
          <div className="App">
        <header className="App-header">
          <Date />
          <Weather city="Gingelom"/>
        </header>
      </div>
    );
  }
