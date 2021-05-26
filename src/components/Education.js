import Card from "./Card";
import Header from "./Header";
import SkillEntry from "./SkillEntry";
import StyledEducation, {
  Box,
  BoxHead,
  BoxBody,
  Boxes,
  LeftBoxes,
  RightBoxes,
  TwoColumnList,
} from "./styled/StyledEducation";

function Education() {
  return (
    <StyledEducation>
      <Header
        title="Education"
        subtitle="“Errors of opinion may be tolerated where reason is left free to combat it” -Thomas Jefferson"
      />
      <Card
        organization="University of Virginia"
        dateRange="Aug 2018 - Present"
        title="Bachelors of Science in CS"
        details="I began at UVA as an engineer and quickly fell in love with coding. After my first CS class I knew I wanted it to be my major. I maintain a 3.67 GPA. During my first year I became a founding member of the UVA blockchain club."
      />
      <Boxes>
        <Box>
          <BoxHead>
            <h3>Relavent Courses</h3>
          </BoxHead>
          <BoxBody>
            <TwoColumnList>
              <li>Algorithms</li>
              <li>Blockchain Technology</li>
              <li>Compilers</li>
              <li>Moble App Development</li>
              <li>Software Development</li>
              <li>Operating Systems</li>
            </TwoColumnList>
          </BoxBody>
        </Box>
        <LeftBoxes>
          <Box>
            <BoxHead>
              <h3>Languages I Know</h3>
            </BoxHead>
            <BoxBody>
              <TwoColumnList>
                <li>Python</li>
                <li>Java</li>
                <li>C++</li>
                <li>JavaScript</li>
                <li>Rust</li>
              </TwoColumnList>
            </BoxBody>
          </Box>
        </LeftBoxes>
        <RightBoxes>
          <Box>
            <BoxHead>
              <h3>Skills</h3>
            </BoxHead>
            <BoxBody>
              <SkillEntry
                topic="Web Development:"
                skills="HTML/CSS/JavaScript, React, Django, Java Spring, REST"
              />
              <SkillEntry
                topic="Machine Learning:"
                skills="Pandas, scikit-learn"
              />
              <SkillEntry
                topic="Software Development"
                skills="Git, Scrum, Bash Scripting, Cloud Computing"
              />
            </BoxBody>
          </Box>
        </RightBoxes>
      </Boxes>
    </StyledEducation>
  );
}

export default Education;
