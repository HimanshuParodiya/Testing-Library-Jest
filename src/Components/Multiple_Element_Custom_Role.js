import React from "react";

const Multiple_Element_Custom_Role = () => {
  return (
    <div>
      <h1>Multiple Item with Role</h1>
      <h1>Custom Role</h1>
      <button>Click 1</button>
      <button>Click 2</button>
      {/* // in input we dont have text like Click 1 so we can use label  */}
      <label htmlFor="input1">User Name</label>
      <input type="text" id="input1" />
      <label htmlFor="input2">User Age</label>
      <input type="text" id="input2" />

      <div role="dummy">Dummy text</div>
    </div>
  );
};

export default Multiple_Element_Custom_Role;
