import ScrollIndicator from "./ScrollIndicator";
import StyledSplash from "./styled/StyledSplash";
import Title from "./styled/Title";
function Splash() {
  return (
    <StyledSplash>
      <Title>
        <h1>Derek Johnson</h1>
        <h3>Resume & Repo</h3>
      </Title>
      <ScrollIndicator/>
    </StyledSplash>
  );
}

export default Splash;
