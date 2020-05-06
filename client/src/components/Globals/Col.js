import React from "react";
import styled from "styled-components";
import { setRem, media } from "../../styles/helpers";

const Col = ({ className, children }) => {
  return <div className={className}>{children}</div>;
};

export default styled(Col)`
  flex: 0 0 ${(props) => (props.size ? props.size : "100%")};
  padding: ${setRem(20)};
  ${media.tablet` 
    flex: 0 0 100%;
    `}
`;
