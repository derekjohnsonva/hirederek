import styled from "styled-components";
import { StyledIconBase } from "@styled-icons/styled-icon";
import Theme from "../theme/Theme";
const IconStyleWrapper = styled.div`
  ${StyledIconBase} {
      color: ${Theme.colors.linkDark};
      width: 2.5rem;
      height: 2.5rem;
      padding: 1rem;
  };
  ${StyledIconBase}:hover {
        color: ${Theme.colors.linkLight};

        /* Start the shake animation and make the animation last for 0.5 seconds */
        animation: shake 0.2s;

        @keyframes shake {
        0% { transform: translate(1px, 1px) rotate(0deg); }
        10% { transform: translate(-1px, -2px) rotate(-1deg); }
        /* 20% { transform: translate(-3px, 0px) rotate(1deg); } */
        30% { transform: translate(2px, 2px) rotate(0deg); }
        /* 40% { transform: translate(1px, -1px) rotate(1deg); } */
        50% { transform: translate(-1px, 2px) rotate(-1deg); }
        /* 60% { transform: translate(-3px, 1px) rotate(0deg); } */
        70% { transform: translate(2px, 1px) rotate(-1deg); }
        /* 80% { transform: translate(-1px, -1px) rotate(1deg); } */
        90% { transform: translate(1px, 2px) rotate(0deg); }
        100% { transform: translate(1px, -2px) rotate(-1deg); }
        }
  }
`;

function SocialLogo(props) {
  const TheIcon = props.icon;
  const link = props.link;
  return (
    <IconStyleWrapper>
      <a href={link}>
        <TheIcon/>
      </a>
    </IconStyleWrapper>
  );
}

export default SocialLogo;
