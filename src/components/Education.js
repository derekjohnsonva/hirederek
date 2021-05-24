import Card from "./Card";
import Header from "./Header";
import StyledEducation, {Box, BoxHead, BoxBody} from "./styled/StyledEducation";

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
      <div className="Boxes">
        <Box>
          <BoxHead>
            <h3>Relavent Courses</h3>
          </BoxHead>
          <BoxBody>
            <ul>
              <li>Algorithms</li>
              <li>Blockchain Technology</li>
              <li>Compilers</li>
              <li>Moble App Development</li>
              <li>Software Development</li>
              <li>Operating Systems</li>
            </ul>
          </BoxBody>
        </Box>
        <Box>
          <h3>Languages I Know</h3>
          <ul>
            <li>Python</li>
            <li>Java</li>
            <li>C++</li>
            <li>JavaScript</li>
            <li>Rust</li>
          </ul>
        </Box>
        <Box>
          <h3>Skills</h3>
          <div className="Row">
            <p className="Bold">Web Development:</p>
            <p>HTML/CSS/JavaScript, React, Django, Java Spring, REST</p>
          </div>
          <div className="Row">
            <p className="Bold">Machine Learning</p>
            <p>Pandas, scikit-learn</p>
          </div>
          <div className="Row">
            <p className="Bold">Software Development</p>
            <p>Git, Scrum, Bash Scripting, Cloud Computing</p>
          </div>
        </Box>
      </div>
    </StyledEducation>
  );
}

export default Education;
