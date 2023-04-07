import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useState } from "react";
import React, {useRef} from "react";
import emailjs from '@emailjs/browser'

  
const ContactUs = () => {
    const form = useRef();
    const inView = useInView({
          threshold: 0,
          triggerOnce: true,
        });


  const success = useState(false);

  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
    
  });
  const sendEmail = (e) => {
      e.preventDefault();
      alert("Email Sent");
  
      emailjs.sendForm('service_mdrpn3m', 'template_m04djxh', form.current, 'xz44QJhu_ypIQkas_')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
   
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  

  return (
    <motion.form
      action=""
      ref={form}
      className="contactForm"
      initial={{ x: "-10vw", opacity: 0 }}
      animate={inView ? { x: 0, opacity: 1 } : { x: "-10vw", opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      onSubmit={sendEmail}
    >
      <h4 className="contentTitle">Message Me</h4>
      <div className="col-12 col-md-6 formGroup" style={{ display: "inline-block" }}>
        <input
          type="text"
          className="formControl"
          onChange={handleChange}
          value={formData.from_name}
          id="contactName"
          name="from_name"
          placeholder="Name"
          required
        />
      </div>
      <div className="col-12 col-md-6 formGroup" style={{ display: "inline-block" }}>
        <input
          type="email"
          className="formControl"
          onChange={handleChange}
          value={formData.from_email}
          id="contactEmail"
          name="from_email"
          placeholder="Email"
          required
        />
      </div>
      <div className="col-12 formGroup">
        <input
          type="text"
          className="formControl"
          onChange={handleChange}
          value={formData.subject}
          id="contactSubject"
          name="subject"
          placeholder="Subject"
          required
        />
      </div>
      <div className="col-12 formGroup">
        <textarea
          className="formControl"
          onChange={handleChange}
          value={formData.message}
          name="message"
          id="contactMessage"
          rows="5"
          placeholder="Message"
          required
        ></textarea>
      </div>
      <div className="col-12 formGroup formSubmit">
        <button className="btn">{success ? "Message Sent" : "Send Message"}</button>
        
      </div>
    </motion.form>
  );
};

export default ContactUs;
