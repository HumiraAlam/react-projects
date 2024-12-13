import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { Mail, MessageCircle, PhoneCall } from "lucide-react";

export default function ContactForm() {

  //useState to store form data
  const [name,setName]=useState("");  // to store name
  const [email,setEmail]=useState("");  // to store email
  const [text,setText]=useState("");  // to store text

  {/* to submit form event listner*/}
  const onSubmit=(event)=>{

    // to prevent default form submission
    event.preventDefault();

    // to store the form data
    setName(event.target[0].value);  
    setEmail(event.target[1].value); 
    setText(event.target[2].value); 
    
  }


  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MessageCircle size={24} />} />
          <Button text="VIA CALL" icon={<PhoneCall size={24} />} />
        </div>

        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<Mail size={24} />}
        />
        
        <form onSubmit={onSubmit}> 
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8"/>
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button  text="SUBMIT" />
          </div>
          <div>
            {
              // to display the form data
              <div>
                <h3>Form Data</h3>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Text: {text}</p>
              </div>
            }
          </div>
        </form>

      </div>
      <div className={styles.contact_image}>
        <img src="/images/contact.png" alt="" />
      </div>
    </section>
  );
}
