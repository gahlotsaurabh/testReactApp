import React, { useState, useEffect } from "react";
import DynamicCrudBaseView from "./DynamicCrudBaseView";

const CustomDynamicCrudBaseView = (props) => {
  const [state, setState] = useState({});

  useEffect(() => {
    // Custom code to be executed when component is mounted
  }, []);

  // Custom function
  const myCustomFunction = () => {
    // Your custom code here
  };

  return (
    <DynamicCrudBaseView
      {...props}
      state={state}
      setState={setState}
      myCustomFunction={myCustomFunction}
    />
  );
};

export default CustomDynamicCrudBaseView;
