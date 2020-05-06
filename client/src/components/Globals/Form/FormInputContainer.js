import styled, { css } from "styled-components";
import { setColor, setTransition } from "../../../styles/helpers";

const subColor = "grey";
const mainColor = "black";

const shrinkLabelStyles = css`
  /* top: -14px;
  font-size: 12px;
  color: ${mainColor}; */
  top: -7px;
  font-size: 12px;
  color: ${setColor.theme};
  background: white;
  padding: 1px 5px;
`;

export const GroupContainer = styled.div`
  position: relative;
  margin-bottom: 15px;
  input[type="password"] {
    letter-spacing: 0.3em;
  }
  width: ${(props) => (props.size ? props.size : "100%")};
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  color: ${setColor.mainColor};
  font-size: setRem(18);
  padding: 10px 10px 10px 5px;
  display: block;
  width:  ${(props) => (props.size ? props.size : "100%")};
  border: none;
  border-radius: 0;
  border: 1px solid ${setColor.mainColor};
  user-select: none;
  /* border-bottom: 1px solid ${subColor}; */
  &:focus {
    outline: none;
    border: 1px solid ${setColor.theme};
    background-color: white;
  }
  
  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

// FormInputContainer.displayName = "FormInputContainer";

export const FormInputLabel = styled.label`
  color: ${setColor.mainColor};
  font-size: setRem(16);
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 8px;
  ${setTransition()};
  &.shrink {
    ${shrinkLabelStyles}
  }
`;

export const FormContainer = styled.div`
  width: ${(props) => (props.size ? props.size : "400px")};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const TwoInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

// FormInputLabel.displayName = "FormInputLabel";
