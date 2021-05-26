import styled from "styled-components";

const StyledEducation = styled.div`
  background: ${(props) => props.theme.colors.yellow};
  padding: 3rem;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Box = styled.div`
  border-style: solid;
  border-color: ${(props) => props.theme.colors.green};
  max-width: 30rem;
  margin: 1rem;
`;

export const TwoColumnList = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
  list-style-position: outside;
  & > *{
    flex: 1 0 calc(50% - 10px);
    margin-bottom: .5rem;
  };
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
