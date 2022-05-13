import Navbar from "../components/navbar";
import Head from "next/head";

function Portfolio() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Portfolio</h1>
            <p className="description">
              Yang dibawah hanya contoh semata, saya mengambilnya{" "}
              <u>
                <a target="_blank" rel="noreferrer" href="https://dribbble.com/search/web">
                  disini.
                </a>
              </u>
            </p>

            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <img src="/web-portfolio1.jpg" alt="portfolio1" className="portfolio-img" />

                <h4 className="portfolio-name">Web Portfolio</h4>
                <div className="portfolio-category">Web Dev</div>
              </div>

              <div className="portfolio-item">
                <img src="/web-portfolio2.png" alt="portfolio2" className="portfolio-img" />

                <h4 className="portfolio-name">Web Portfolio</h4>
                <div className="portfolio-category">Web Dev</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
