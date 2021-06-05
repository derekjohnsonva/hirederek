import styled from "styled-components";

const StyledProfile = styled.div`
  background: ${(props) => props.theme.colors.lightblue};
  padding: 3rem;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const AboutMe = styled.div`
  max-width: 12.5rem;
  margin: 1rem 3rem;
  justify-content: flex-start;
`;

export const AboutMeBody = styled.div`
  text-align: left;
`;

export const Boxes = styled.div`
  flex-direction: column;
  height: 100%;
  @media ${(props) => props.theme.device.tablet} {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const ProfilePic = styled.div`
  max-width: 17rem;
  margin: 1rem 3rem;
  img {
    width: 100%;
  }
`;

export const Details = styled.div`
`;
export const SocialLogos = styled.div`
  flex-direction: row;
`;

export default StyledProfile;
