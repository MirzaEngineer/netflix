"use client"
import { Mulish } from "next/font/google";
const mulish = Mulish({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900']
})
import styles from "@/app/contact/contact.module.css"
import { useState } from "react";
// import { preconnect } from "react-dom";


const ContactForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: ""


  });
  const [status, setStatus] = useState()

  // const handlerChange = (e) => {
  //   const name = e.target.name;
  //   const value = e.target.value;
  //   setUser((prevUser)=>{
  //     ...prevUser,
  //     [name] : value
  //   })


  // }
  const handlerChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value
    }))

      // setUser(
      //   {
      //     ...user,
      //     [e.target.name]:e.target.value
      //   }
      // )
      ;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { "Content_Type": "application/json" },
        body: JSON.stringify({
          username: user.username,
          email: user.email,
          phone: user.phone,
          message: user.message
        })
      })
      // Set the status based on the response from the API route
      if (response.status === 200) {
        setUser({
          username: "",
          email: "",
          phone: "",
          message: ""
        })
        setStatus('success');
      } else {
        setStatus('error');
      }

    } catch (e) {
      console.log(e)
    }

  }


  return (
    <form className={styles.contact_form} onSubmit={handleSubmit}>

      <div className={styles.input_field}>
        <label htmlFor="username" className={styles.label}>
          Enter your name
          <input type="text" name="username" id="username"
            placeholder="Enter your name"
            className={mulish.className}
            onChange={handlerChange}
            value={user.username}
            autoComplete="off"
            required

          />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="email" className={styles.label}>
          Email
          <input type="email" name="email" id="email"
            placeholder="Enter your email"
            className={mulish.className}
            onChange={handlerChange}
            value={user.email}
            autoComplete="off"
            required




          />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="phone" className={styles.label}>
          Phone
          <input type="number" name="phone" id="phone"
            placeholder="Enter your phone"
            className={mulish.className}
            onChange={handlerChange}
            value={user.phone}
            autoComplete="off"
            required



          />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="message" className={styles.label}>
          Message
          <textarea name="message" id="message" rows={5}
            placeholder="Enter your Message"
            className={mulish.className}
            onChange={handlerChange}
            value={user.message}
            autoComplete="off"
            required



          />
        </label>
      </div>

      <div>
        {status === 'success' && <p className={styles.success_msg}>Thank you for your message!</p>}
        {status === 'error' && <p className={styles.error_msg}>There was an error submitting your message. Please try again.</p>}

        <button type="submit" className={mulish.className}>Send Message</button>
      </div>


    </form>
  )
}

export default ContactForm
