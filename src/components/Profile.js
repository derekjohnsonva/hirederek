import Header from "./Header";
import profilePic from "../images/profilePic.jpg";
import { LinkedinBox } from "@styled-icons/remix-line/LinkedinBox";
import { Twitter } from "@styled-icons/remix-line/Twitter";
import { GithubOutline } from "@styled-icons/evaicons-outline/GithubOutline";

import StyledProfile, {
  AboutMe,
  Boxes,
  Details,
  SocialLogos,
  ProfilePic,
} from "./styled/StyledProfile";

import Content from "./styled/Content";
import SocialLogo from "./SocialLogo";

function Profile() {
  return (
    <StyledProfile>
      <Content>
        <Header
          title="Profile"
          subtitle="I'm a student, a runner, and a developer"
        />
        <Boxes>
          <AboutMe>
            <h3>About Me</h3>
            <p>
              I am currently a student at the University of Virginia studying
              Computer Science. I am a well balanced developer with experience
              in both front and back end we development. I enjoy the dichotomy
              between creativity and structure that comes with coding. <br />
              <br />
              In my free time I run for the varsity track team at UVA and play
              guitar.
            </p>
          </AboutMe>
          <ProfilePic>
            <img tabindex="1" src={profilePic} alt="Derek's Profile" />
          </ProfilePic>
        </Boxes>
        <Details>
          <h3>Details</h3>
          <p>
            <strong>Location:</strong> Charlottesville, VA
          </p>
          <p>
            <strong>Socials:</strong>
          </p>
          <SocialLogos>
            <SocialLogo
              icon={Twitter}
              link="https://twitter.com/derekjohnsonva"
              label="link to Derek's Twitter"
            />
            <SocialLogo
              icon={LinkedinBox}
              link="https://www.linkedin.com/in/derek-johnson-88464116a/"
              label="link to Derek's Linkedin"
            />
            <SocialLogo
              icon={GithubOutline}
              link="https://github.com/derekjohnsonva"
              label="link to Derek's Github"
            />
          </SocialLogos>
        </Details>
      </Content>
    </StyledProfile>
  );
}

export default Profile;
