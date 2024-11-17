import { Faq } from "./sections/faq";
import { Features } from "./sections/Features";
import { Footer } from "./sections/Footer";
import { Header } from "./sections/Header";
import { Hero } from "./sections/Hero";

const App = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Features />
      <Faq />
      <Footer />
    </main>
  );
};

export default App;
