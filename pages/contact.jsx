import Navbar from "../components/navbar";
import Head from "next/head";

function Contact() {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Contact Me</h1>
            <p className="description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti provident, alias dolorem officia error hic</p>
            <ul className="contact-links">
              <li className="contact-item">Email: devapande66@gmail.com</li>
              <li className="contact-item">Phone: +62881234567</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
