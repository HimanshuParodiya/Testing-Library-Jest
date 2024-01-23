import React from "react";

const Three_CheckBox_testing = () => {
  return (
    <div>
      <h1>GetByLabelText</h1>
      <label htmlFor="user_name">Username</label>
      <input type="text" id="user_name" defaultValue={"Jay"} />


      <label htmlFor="skills">Skills</label>
      <input type="checkbox" id="skills" />


    </div>
  );
};

export default Three_CheckBox_testing;
