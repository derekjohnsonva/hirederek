import StyledHeader from "./styled/StyledHeader"

function Header(props) {
  return (
    <StyledHeader>
      <h2>{props.title}</h2>
      <h4>{props.subtitle}</h4>
      <hr />
    </StyledHeader>
  );
}

export default Header;
