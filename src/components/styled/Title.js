import styled from "styled-components";

const Title = styled.div`
  position: relative;
  top: 25%;
  z-index: 4;
  text-align: center;
  h1 {
    border-bottom: 3px solid ${(props) => props.theme.colors.lightblue};
    padding-bottom: 20px;
  }
  h3 {
    padding: 1rem;
    color: ${(props) => props.theme.colors.lightblue};
  }
  hr {
    width: 100%;
    size: 20px;
    color: ${(props) => props.theme.colors.lightblue};
  }
`;

export default Title;
