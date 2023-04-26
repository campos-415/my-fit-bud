import About from "@/components/About/About";
import Landing from "@/components/Landing/Landing";
import NavBar from "@/components/Navbar/NavBar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>My FitBud</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="relative pt-12 max-w-[1240px] mx-auto">
        <section className="max-w-[1240px] mx-auto flex items-center sm:items-center justify-center md:h-screen">
          <Landing />
        </section>
        <section className="max-w-[1240px] mx-auto flex items-center sm:items-center justify-center md:h-screen">
          <About />
         </section>
      </main>
    </>
  );
}
