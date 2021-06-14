import styled from "styled-components";

const StyledEducation = styled.div`
  background: ${(props) => props.theme.colors.secondaryLight};
  padding: 3rem;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Box = styled.div`
  background: linear-gradient(
    97.2deg,
    rgba(255, 255, 255, 0.6) 33.91%,
    rgba(255, 255, 255, 0) 100%
  );
  box-shadow: 10px 10px 4px 0px hsla(152, 32%, 92%, 1);
  backdrop-filter: ${(props) => props.theme.glass.backdropFilter};
  border-radius: 20px;
  border: ${(props) => props.theme.glass.borderTop};
  max-width: 30rem;
  margin: 1rem;
`;

export const TwoColumnList = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  list-style-position: outside;
  & > * {
    flex: 1 0 calc(50% - 10px);
    margin-bottom: 0.5rem;
  }
`;

export const BoxHead = styled.div``;
export const BoxBody = styled.div`
  text-align: left;
  padding: 0 1rem;
`;
export const Boxes = styled.div`
  flex-direction: column;
  align-items: center;
  max-width: 70rem;
  @media ${(props) => props.theme.device.tablet} {
    flex-direction: row;
  }
`;

export const LeftBoxes = styled.div`
  height: 100%;
`;
export const RightBoxes = styled.div`
  height: 100%;
`;
export default StyledEducation;
