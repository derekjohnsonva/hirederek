import styled from "styled-components";

const StyledHeader = styled.div`
  max-width: 25rem;
  justify-content: center;
  border-bottom: 3px solid ${(props) => props.theme.colors.secondaryDark};
  padding-bottom: .7rem;
  margin-bottom: 2rem;
  h2 {
    color: ${(props) =>
      props.dark ? props.theme.colors.darkText : props.theme.colors.lightText};
    padding: 1rem 0rem;
  }
  h4 {
    color: ${(props) =>
      props.dark ? props.theme.colors.darkText : props.theme.colors.lightText};
    padding: 1rem;
  }
`;

function Header(props) {
  return (
    <StyledHeader dark={props.dark}>
      <h2>{props.title}</h2>
      <h4>{props.subtitle}</h4>
    </StyledHeader>
  );
}

export default Header;
