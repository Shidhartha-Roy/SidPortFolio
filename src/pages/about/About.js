import AboutMe from "../../components/AboutMe"
import PageHeader from "../../components/PageHeader"


const About = ({ name, email, location, availability, brand }) => {
    return(
        <section className="about">
            <PageHeader title="About Me" description="Let me introduce myself" />
            <AboutMe name = {name} email={email} brand={brand} location={location} workstat={availability} />

        </section>
    )
}

export default About