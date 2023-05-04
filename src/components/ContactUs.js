import React, {useRef} from "react";
import "./contact.css"
import emailjs from '@emailjs/browser';



export  default function ContactUs(){
  const form = useRef();

  const [formStatus, setFormStatus] = React.useState("Send");

  

  const sendEmail = (e) => {
    
    e.preventDefault();
    setFormStatus("Submitting...");
    emailjs.sendForm('service_tfsl5gj', 'template_afwt2gf', form.current, 'qpxSDyA1PykJtbR_N')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      setFormStatus("Submitted");
     
  };

  return (

<>

<div className="container ml-9 border border-primary rounded w-25 p-3">
      <h2 className="mb-3">Contact US</h2>


    <form ref={form} onSubmit={sendEmail}>
     <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" name="name" required />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" name="email" required />
        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="number">
            Phone
          </label>


<input className="form-control" type="tel" name="phone" placeholder="+1234567890" required
       pattern="^\+(?:[0-9] ?){6,14}[0-9]$"
       title="Phone number must be in the format +1234567890"
        />



        </div>

        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" name="message" required />
        </div>
        <button id="danger" type="submit">
          {formStatus}
        </button>
    </form>

    </div>
    </>
  );
};
