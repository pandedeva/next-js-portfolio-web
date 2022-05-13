import Link from "next/link";
import Navbar from "../components/navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper">
            <h1 className="title">Halo, saya K0NTOLODONN</h1>
            <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi consequatur suscipit excepturi assumenda a vero numquam ut deleniti quos magni.</p>

            <Link href="/contact">
              <a className="cta">Kontak Saya</a>
            </Link>
          </div>

          <div className="image-wrapper">
            <img src="/profile-pic.png" alt="profile pic" />
          </div>
        </div>
      </section>
    </>
  );
}
