import Card from "./Card";
import Header from "./Header";
import StyledExperience from "./styled/StyledExperience";

function Experience() {
  return (
    <StyledExperience>
      <Header
        title="Experience"
        subtitle="“To give anything less than your best is to sacrifice the gift” -Steve Prefontaine"
      />
      <Card
        organization="Leidos"
        dateRange="Jun 2020 - Aug 2020"
        title="Software Engineering Intern"
        details="Worked on a team building a large scale web app for accessing secure information. Used Java Spring Framework to build and test components for the REST API."
      />
      <Card
        organization="Leidos"
        dateRange="Jun 2019 - Aug 2019"
        title="Systems Integration Intern"
        details="Worked on an R&D project exploring containerizing virtual network functions. Built a front-end using the Django framework for demo purposes"
      />
    </StyledExperience>
  );
}

export default Experience;
