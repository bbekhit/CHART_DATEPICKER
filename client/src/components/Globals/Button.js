import styled from "styled-components";
import {
  setColor,
  setRem,
  setLetterSpacing,
  setFont,
  setBorder,
  setTransition,
  media,
} from "../../styles/helpers";

export const PrimaryBtn = styled.button`
  display: inline-block;
  border-radius: ${(props) => (props.circle ? "2rem" : "")};
  outline: none;
  background: ${setColor.primaryColor};
  color: ${setColor.mainWhite};
  text-transform: capitalize;
  font-size: ${setRem(18)};
  ${setFont.main};
  padding: ${setRem(17)} ${setRem(36)};
  ${setBorder({ color: setColor.primaryColor })};
  ${setLetterSpacing(3)};
  ${setTransition()};
  &:hover {
    background: transparent;
    color: ${setColor.primaryColor};
  }
  ${(props) =>
    `margin: ${props.t || 0} ${props.r || 0} ${props.b || 0} ${props.l || 0}}`};
  text-decoration: none;
  cursor: pointer;
  ${media.phone` 
     padding: ${setRem(10)} ${setRem(25)}
    `}
`;

export const SmallBtn = styled(PrimaryBtn)`
  padding: ${setRem(9)} ${setRem(12)};
`;
