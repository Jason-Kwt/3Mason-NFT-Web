import Head from "next/head";
import Header from "components/Header";
import Origin from "components/Sections/Origin";
import Dogmas from "components/Sections/Dogmas";
import Hero from "components/Hero/Hero";
import Pledge from "components/Sections/Pledge";
import Avatars from "components/Sections/Avatars";
import Footer from "components/Footer";
import MasonInYou from "components/Sections/MasonInYou";
import Lodge from "components/Sections/Lodge";

export default function Home() {
  return (
    <>
      <Head>
        <title>3</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative bg-black h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <Header />
        <Hero />
        <Lodge />
        <Origin />
        <Dogmas />
        <Pledge />
        <MasonInYou />
        <Avatars />
        <Footer />
      </main>
    </>
  );
}
