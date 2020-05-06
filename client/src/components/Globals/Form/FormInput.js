import React from "react";
import { FormInputContainer, FormInputLabel } from "./FormInputContainer";

const FormInput = ({ handleChange, label, ...props }) => (
  <div style={{ position: "relative" }}>
    <FormInputContainer onChange={handleChange} {...props} />
    {label ? (
      <FormInputLabel className={props.value.length ? "shrink" : ""}>
        {label}
      </FormInputLabel>
    ) : null}
  </div>
);

export default FormInput;
