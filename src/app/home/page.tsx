import Features from "./features";
import Hero from "./hero";
import About from "./about";
import Clients from "./clients";
import Testimonials from "./testimonials";
import Footer from "./footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Features />
      <About />
      <Testimonials />
      <Footer />
    </>
  );
}
