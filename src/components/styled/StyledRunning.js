import styled from "styled-components";

const StyledRunning = styled.div`
  background: ${(props) => props.theme.colors.secondaryDark};
  padding: 3rem;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Paragraph = styled.div`
  text-align: left;
  max-width: 50rem;
  margin: 3rem 0rem;
  p {
    color: ${(props) => props.theme.colors.primaryLight}
  }
`;
export const PRTable = styled.table`
  border-collapse: collapse;
  width: 17rem;
  color: ${(props) => props.theme.colors.darkText};
  td,
  th {
    width: 50%;
    border-color: #000000;
    border-style: solid;
    border-width: 0 1px 1px 0;
    padding: 0.5rem;
    text-align: center;
  };
  td {
    border-bottom: 0;
  }
  td:nth-child(2){
    border-right: 0;
  };
  th:nth-child(2){
    border-right: 0;
  };
`;

export const Tooltip = styled.div`
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */

  span {
    visibility: hidden;
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
    margin: 0 10px;
    /* Position the tooltip text - see examples below! */
    position: absolute;
    z-index: 1;
  }

  &:hover span{
    visibility: visible;
  }

  span::after {
    content: " ";
    position: absolute;
    top: 50%;
    right: 100%; /* To the left of the tooltip */
    margin-top: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: transparent black transparent transparent;
}
`;

export const TooltipText = styled.span`
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;

  /* Position the tooltip text - see examples below! */
  position: absolute;
  z-index: 1;

`;

export const SectionHead = styled.div`
  max-width: 17rem;
  color: ${(props) => props.theme.colors.primaryLight};
`;
export default StyledRunning;
