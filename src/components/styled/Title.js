import styled from "styled-components";

const Title = styled.div`
  position: absolute;
  top: 25%;
  z-index: 4;
  text-align: center;
  padding: 2.5rem;
  background-image: ${props => props.theme.glass.backgroundImage};
  backdrop-filter: ${props => props.theme.glass.backdropFilter};
  border-radius: 20px;
  border-top: ${props => props.theme.glass.borderTop};
  border-left: ${props => props.theme.glass.borderLeft};
  margin: 1.5rem;
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
