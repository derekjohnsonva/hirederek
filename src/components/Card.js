import styled from "styled-components";

const StyledCard = styled.div`
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 35rem;
  padding: 2rem 0rem;
  @media ${(props) => props.theme.device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

const RightColumn = styled.div`
  width: 100%;
  max-width: 17rem;
  & > * {
    padding: 0 0 .5rem 0;
  }
`;

const LeftColumn = styled.div`
  width: 100%;
  max-width: 17rem;
  justify-content: flex-start;
  & > * {
    padding: 0 0 .5rem 0;
  }
`;

function Card(props) {
  return (
    <StyledCard>
      <LeftColumn>
        <h3>{props.organization}</h3>
        <p>
          <em>{props.dateRange}</em>
        </p>
      </LeftColumn>
      <RightColumn>
        <h5>{props.title}</h5>
        <p>{props.details}</p>
      </RightColumn>
    </StyledCard>
  );
}

export default Card;
