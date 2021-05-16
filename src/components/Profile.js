import Header from './Header'

function Profile() {
    return (
        <div className="Profile">
            <Header title="Profile"
                subtitle="I'm a student, a runner, and a developer"
            />
            <div className="AboutMe">
                <h3>About Me</h3>
                <p>I am currently a student at the University of Virginia studying Computer Science. I am a well balanced developer with experience in both front and back end we development. I enjoy the dichotomy between creativity  and structure that comes with coding. In my free time I run for the varsity track team at UVA and play guitar in my bedroom.</p>
            </div>
            <div className="Details">
                <div className="Location">
                    <p className="strong">Location:</p>
                    <p>Charlottesville, VA</p>
                </div>
                <p className="strong">Socials:</p>
                <div className="SocialLogos">
                    <div className="Logo"></div>
                    <div className="Logo"></div>
                    <div className="Logo"></div>
                </div>
            </div>
        </div>
    );
  }
  
  export default Profile;