import React from "react";
import styled from "styled-components";

const Row = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default styled(Row)`
  min-width: 100vw;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
`;
