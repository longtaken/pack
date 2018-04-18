import React from "react";
import ReactDOM from "react-dom";
const App = () => {
  return (
    <div className="wrap">
        <p>React here! webpack</p>
    </div>
  );
};
console.log('success!');
ReactDOM.render(<App />, document.getElementById("app"));