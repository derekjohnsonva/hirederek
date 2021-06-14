import styled from "styled-components";

export const ColoredSlash = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  clip-path: polygon(50% 0%, 100% 100%, 100% 0%);
  background: ${(props) => props.theme.colors.secondaryDark};
`;

export const Circle = styled.div`
  display: none;
  position: absolute;
  top: 40%;
  left: 10%;
  height: 30vw;
  width: 30vw;
  max-width: 15rem;
  max-height: 15rem;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.primaryDark};
  @media ${(props) => props.theme.device.tablet} {
    display: flex;
  }
`;

const StyledSplash = styled.div`
  background: ${(props) => props.theme.colors.darkText};
  background-size: cover;
  align-items: center;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
`;

export default StyledSplash;
