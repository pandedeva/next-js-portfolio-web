import Navbar from "../components/navbar";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">About Me</h1>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dignissimos dolorem sint necessitatibus. Voluptatibus adipisci illo quam repudiandae nesciunt voluptatem rerum reprehenderit consectetur ducimus ut dolore, animi
              ab repellat obcaecati corrupti, laboriosam officia harum incidunt ullam vitae saepe ipsum commodi magni. Aliquam ducimus deleniti vero corrupti, veritatis sint tempora neque voluptatum perspiciatis, sed dolorem pariatur
              obcaecati optio blanditiis repudiandae animi facere perferendis! Dolorem quaerat at voluptate consequatur itaque. Dignissimos pariatur, atque voluptas sit impedit voluptatibus necessitatibus! Odio accusamus ut, quisquam totam
              quae iusto tempore nulla, ab quaerat natus fuga excepturi suscipit adipisci! Possimus neque distinctio sit libero cumque, expedita accusantium.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
