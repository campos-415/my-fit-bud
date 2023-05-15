import Landing from "@/components/Landing/Landing";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>My FitBud</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative pt-12 max-w-[1240px] mx-auto">
        <section className="max-w-[1240px] mx-auto flex items-center sm:items-center justify-center md:h-screen">
          <Landing />
        </section>
      </main>
    </>
  );
}
