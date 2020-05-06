import styled from "styled-components";
import { setRem } from "../../styles/helpers";

export const Section = styled.section`
  padding: ${setRem(60)} 0;
  background: ${(props) => props.color};
`;

export const SlantedSection = styled(Section)`
  clip-path: polygon(0 10%, 100% 0, 100% 90%, 0 100%);
  padding: ${setRem(100)} 0;
  background: ${(props) => props.color};
`;
