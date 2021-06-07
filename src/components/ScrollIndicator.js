import styled, { keyframes } from "styled-components";

const MouseAndArrow = styled.div`
  position: absolute;
  bottom: 5rem;

  flex-direction: column;
  margin: 0 auto;
  width: auto;
  height: auto;
  color: ${(props) => props.theme.colors.primaryLight};

  @media ${(props) => props.theme.device.smallerThanLaptop} {
    display: none;
  }
`;

const Mouse = styled.div`
  height: 42px;
  width: 24px;
  border-radius: 14px;
  border: 2px solid;
  top: 170px;
`;
const wheelAnimation = keyframes`
  0% { top: 1px; }
  25% { top: 2px; }
  50% { top: 3px;}
  75% { top: 2px;}
  100% { top: 1px;}
`;
const Wheel = styled.div`
  margin: 5px auto;
  position: relative;
  height: 4px;
  width: 4px;
  border: 2px solid;
  border-radius: 8px;
  animation: ${wheelAnimation} 0.6s linear infinite;
`;

const scrollAnimation = keyframes`
  0%   { opacity: 0; }
  50%  { opacity: .5; }
  100% { opacity: 1; }
`;

const Arrow = styled.span`
  width: 5px;
  height: 5px;
  transform: rotate(45deg);

  border-right: 2px solid;
  border-bottom: 2px solid;
  margin: 0 0 3px 4px;

  width: 16px;
  height: 16px;
  animation: ${scrollAnimation} 1s infinite;
  animation-direction: alternate;
  animation-delay: ${(props) => props.i * .1}s;

`;

function ScrollIndicator() {
  return (
    <MouseAndArrow>
      <Mouse>
        <Wheel />
      </Mouse>
      <div>
        <Arrow i={1} />
        <Arrow i={2} />
        <Arrow i={3} />
      </div>
    </MouseAndArrow>
  );
}

export default ScrollIndicator;
