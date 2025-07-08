import React from "react";

function Hello() {
  let name = "Sunil";

  function fullName() {
    return "Sunil Hatila";
  }

  return (
    <div>
      <h3> Hello this is the future speaking. my name is {name}</h3>
      <h2>my full name is {fullName()}</h2>
    </div>
  );
}

export default Hello;
