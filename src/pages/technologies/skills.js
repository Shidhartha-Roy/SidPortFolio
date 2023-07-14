import PageHeader from "../../components/PageHeader";
import "../technologies/technologies.css"
import Slider from "../../components/skill";
const Technologies = () =>{
    return(
        <section className="tech" id="tech">
            <PageHeader title="Technologies" description="I know these" />
            <Slider />
        </section>
    )
}

export default Technologies