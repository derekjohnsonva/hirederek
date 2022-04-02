import "./Header";
import Header from "./Header";
import StyledRunning, { Paragraph, PRTable, SectionHead, Tooltip, TooltipText } from "./styled/StyledRunning";

function Running() {
  return (
    <StyledRunning>
      <Header
        title="Running"
        subtitle="“Athletics is not so much about the legs. It’s about the heart and mind - Eliud Kipchoge” "
      />
      <Paragraph>
        <p>
          I joined the cross country team my freshman year of high school and
          never looked back. In high school I had the oportunity to run at 7
          state championship meets and be named to the all State team twice.{" "}
          <br />
          <br />I have been a member of the UVA Track and field team fro the
          past 3 years. During my time on the team I have represented UVA at 5
          ACC champtionships.{" "}
        </p>
      </Paragraph>
      <SectionHead><h3>Current Lifetime Bests</h3></SectionHead>
      <PRTable>
        <thead>
          <tr>
            <th>Event</th>
            <th>PR</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3000</td>
            <td>8:12.67</td>
          </tr>
          <tr>
            <td>3000S</td>
            <td>
              <Tooltip> 8:28.72 🇺🇸
                <span>All American</span>
              </Tooltip>
            </td>
          </tr>
          <tr>
            <td>5000</td>
            <td>13:54.46</td>
          </tr>
          <tr>
            <td>8K (XC)</td>
            <td>24:04.2</td>
          </tr>
        </tbody>
      </PRTable>
    </StyledRunning>
  );
}

export default Running;
