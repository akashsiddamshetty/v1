import Banner from "@/components/Banner";
import Contactus from "@/components/Contactus";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Banner />
        <Projects />
        <Contactus />
      </main>
      <Footer />
    </>
  );
}
