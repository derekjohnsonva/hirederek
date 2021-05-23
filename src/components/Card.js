import styled from "styled-components";

const StyledCard = styled.div`
  flex-direction: column;
  width: 100%;
  max-width: 35rem;
  padding: 2rem 0rem;
  @media ${(props) => props.theme.device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
`;

const RightColumn = styled.div`
  max-width: 17rem;
`;

const LeftColumn = styled.div`
  max-width: 17rem;
  justify-content: flex-start;
  h3 {
    padding-top: 0;
    padding-left: 0;
  }
`;

function Card(props) {
  return (
    <StyledCard>
      <LeftColumn>
        <h3>{props.organization}</h3>
        <p>{props.dateRange}</p>
      </LeftColumn>
      <RightColumn>
        <h5>{props.title}</h5>
        <p>{props.details}</p>
      </RightColumn>
    </StyledCard>
  );
}

export default Card;
