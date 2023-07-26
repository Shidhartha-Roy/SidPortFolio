import { motion } from "framer-motion";
import me from "../images/me.jpg"
import Socialicons from "./SocialIcons"
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const AboutMe = ({ name,email,location, brand}) => {
    const[ref, inView] = useInView({
        threshold: 0.2,
        triggerOnce: true
    });


    const [downloading, setDownloading] = useState({
      message: "Download Resume"
    });

    

    const handleDownload = () => {
        setDownloading({
          message: "Downloading...",
        })
        const link = document.createElement("a");
        link.href = "https://drive.google.com/file/d/1ZXH1YuNsiGx77ABeZNQesAbgNR52ACKp/view?usp=sharing";
        link.onload = () => {
          link.remove();
          setDownloading({
            message: "Download"
          });
        };
        document.body.appendChild(link);
        link.click();
};

return(
    <div className="aboutContainer container">
    <div className="row">
      <motion.div
        className="personalImage col-12 col-lg-4"
        ref={ref}
        initial={{ x: "-10vw", opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <img src={me} alt={name} />
      </motion.div>
      <motion.div
        className="personalInfo col-12 col-lg-8"
        ref={ref}
        initial={{ x: "10vw", opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: "10vw", opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <div className="contentContainer">
          <h4>Nice to meet you</h4>
          <h5>Software developer creating Awesome and practical applications</h5>
          <div className="contentDescription">
          {brand}
          </div>
          <div className="infoContainer">
            <div className="row">
              <div className="col-12 col-md-6 info">
                <span>Name:</span>
                <p>Shidhartha Roy</p>
              </div>
              <div className="col-12 col-md-6 info">
                <span>Email:</span>
                <p>
                  <a href={`mailto:${email}`}>{email}</a>
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 info">
                <span>Location:</span>
                <p>{location}</p>
              </div>
              <div className="col-12 col-md-6 info">
                <span>Working Status:</span>
                <p>Open to Work</p>
              </div>
            </div>
          </div>
          <div className="buttonContainer">
            <button className="btn downloadCV" onClick={handleDownload}>
              {downloading.message}
            </button>{" "}
            <Socialicons/>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
);
}

export default AboutMe