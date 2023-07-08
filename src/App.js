import React from "react";
import Weather from "./Weather";
import FormattedDate from "./FormattedDate";

import "./index.css";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FormattedDate date={new Date()} />
        <Weather city="Gingelom" />
      </header>
    </div>
  );
}
