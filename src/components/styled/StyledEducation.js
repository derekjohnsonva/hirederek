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
`;

export const BoxHead = styled.div`
`;
export const BoxBody = styled.div`
    text-align: left;
`;
export default StyledEducation;
