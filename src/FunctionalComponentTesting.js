import React, { useState } from "react";
import handleOtherData from "./helper";

const FunctionalComponentTesting = () => {
  const [data, setData] = useState("");
  const handleData = () => {
    setData("Hello");
  };
  return (
    <div>
      <h1>Functional Component Method Testing</h1>
      <button data-testid="btn1" onClick={handleData}>
        Update
      </button>
      <button onClick={handleOtherData}>Imported from helper</button>
      <h2>{data}</h2>
    </div>
  );
};

export default FunctionalComponentTesting;

// now we will write a test case which will automatically click on button
//  and check that is there any hello in our UI

// so the above scenario was testing method with event

// now we will do without using event
// here we will create a new file(helper.js) and put the method there
// then we can use the method by importing
// now let's write a test case for that
