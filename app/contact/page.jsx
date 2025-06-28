import styles from "@/app/contact/contact.module.css"
import ContactCard from "../components/ContactCard"
import ContactForm from "../components/ContactForm"
const Contact = () => {
  return (
    <>
    <h1>Local Side</h1>
    <p>ME</p>
      <div className={styles.container}>
        <h1>Contact Us</h1>

        <ContactCard />

        <section className={styles.contact_section}>
          <h2>We'd love to hear <span> from you </span></h2>

          <ContactForm />

        </section>

      </div>
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435616.16677595937!2d73.87166219902343!3d31.46227254112767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918fde40e954753%3A0xb8ea639d79127a78!2sLahore%20City%2C%20Pakistan!5e0!3m2!1sen!2s!4v1740906767213!5m2!1sen!2s"
        width={1900} height={600} style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}


      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2547158278226!2d73.91419611127971!3d18.562551782466336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20-%20Viman%20Nagar!5e0!3m2!1sen!2sin!4v1681696533582!5m2!1sen!2sin"
        width={100} height={450} style={{ border: 0 }} allowFullScreen="" loading="lazy" className={styles.mapping}
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </>
  )
}

export default Contact
