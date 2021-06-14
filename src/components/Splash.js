import ScrollIndicator from "./ScrollIndicator";
import StyledSplash, {ColoredSlash, Circle} from "./styled/StyledSplash";
import Title from "./styled/Title";
function Splash() {
  return (
    <StyledSplash>
      <ColoredSlash/>
      <Title>
        <h1>Derek Johnson</h1>
        <h3>Resume & Repo</h3>
      </Title>
      <Circle/>
      <ScrollIndicator/>
    </StyledSplash>
  );
}

export default Splash;
