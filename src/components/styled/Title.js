import styled from "styled-components";

const Title = styled.div`
  position: relative;
  top: 25%;
  z-index: 4;
  text-align: center;
  h1 {
    color: ${(props) => props.theme.colors.primaryLight};
    border-bottom: 3px solid ${(props) => props.theme.colors.primaryLight};
    padding-bottom: 10px;
  }
  h3 {
    padding: 1rem;
    color: ${(props) => props.theme.colors.primaryLight};
  }
`;

export default Title;
