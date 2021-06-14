import styled from "styled-components";

export const RelDiv = styled.div`
  /* position: relative; */
  height: 100%;
  width: 100%;
`;

export const ColoredSlash = styled.div`
  /* display: none; */
  position: absolute;
  width: 100%;
  height: 100%;
  clip-path: polygon(0% 0%, 100% 100%, 100% 0%);
  background: ${(props) => props.theme.colors.secondaryDark};
  @media ${(props) => props.theme.device.tablet} {
    display: flex;
  }
`;

const StyledExperience = styled.div`
  background: ${(props) => props.theme.colors.primaryDark};
  padding: 3rem;  
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export default StyledExperience;
