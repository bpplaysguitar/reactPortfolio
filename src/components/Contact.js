import React from 'react';
import Form from './Form';

function Contact() {
  return (
    <div>
   <section className="container my-5">
   <h2 className="container pb-3 border-bottom" id="contact">Contact</h2>
   <section className="pt-2 
    d-flex
    flex-row
    justify-content-center
    ">
    <div className="row container">
      <Form />
    </div>
  </section>
    </section>
    </div>
  );
}

export default Contact;
