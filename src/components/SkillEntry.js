import styled from "styled-components";

const StyledSkillEntry = styled.div`
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  max-width: 30rem;
  padding: .5rem 0rem;
  & > * {
    padding-bottom: .5rem;
    max-width: 15rem;
  }

  @media ${(props) => props.theme.device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

const Col = styled.div`
  max-width: 80%;
  @media ${(props) => props.theme.device.tablet} {
    width: 50%;
  }
`;

function Card(props) {
  const topic = props.topic;
  const skills = props.skills;
  return (
    <StyledSkillEntry>
      <Col>
      <strong>{topic}</strong>
      </Col>
      <Col>
      <p>{skills}</p>
      </Col>
    </StyledSkillEntry>
  );
}

export default Card;
