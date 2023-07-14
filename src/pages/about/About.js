import AboutMe from "../../components/AboutMe"
import PageHeader from "../../components/PageHeader"


const About = () => {
    return(
        <section className="about" id="about">
            <PageHeader title="About Me" description="Let me introduce myself" />
            <AboutMe name = "Shidhartha Roy" email="sidroy192@gmail.com" brand="My combined technical expertise in developing software and debugging combined with my experience as a tutor teaching children of many ages and standards gives me an unique advantage of understanding what the clients want and helps me to explain to them the hardest of technical problems with ease" location="Guwahati, Assam, India" workstat="Open to Work" />

        </section>
    )
}

export default About