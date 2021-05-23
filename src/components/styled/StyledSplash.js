import styled from "styled-components";
import treeBackground from "../../images/treeBackground.jpg";

const StyledSplash = styled.div`
  background: no-repeat center center fixed url(${treeBackground});
  background-size: cover;
  height: 100vh;
  width: 100vw;
  align-items: center;
  justify-content: flex-start;
`;

export default StyledSplash;
