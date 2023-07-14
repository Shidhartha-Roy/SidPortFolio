import PageHeader from "../../components/PageHeader"
import SocialIcons from "../../components/SocialIcons"
import Form from "../../components/Form"
import ContactInfo from "../../components/ContactInfo"

const Contact = () => {
    return(
        <section className="contact" id="contact">
      <PageHeader title="Contact" description="Get in touch" />
      <div className="contactWrap container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <Form />
          </div>
          <div className="col-12 col-lg-6">
            <ContactInfo name="Shidhartha Roy" location="Guwahati, Assam, India" email="sidroy192@gmail.com" />
          </div>
        </div>
      </div>
      <SocialIcons />
    </section>
    )
}

export default Contact