import React from "react";
import styled from "styled-components";

const Form = ({ className, children, handleSubmit, ...props }) => {
  return (
    <div className={className}>
      <form onSubmit={handleSubmit}>{children}</form>
    </div>
  );
};

export default styled(Form)`
  width: ${(props) => (props.size ? props.size : "400px")};
  margin: 0 auto;
`;
