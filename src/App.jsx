import Header from "./components/Header";
import Hero from "./components/Hero";
import Testimonial from "./components/Testimonial";
import What from "./What";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="w-full flex flex-col gap-20 justify-center p-8 md:w-4/6 mx-auto">
        {/* NAV BAR */}
        <Header />
        {/* Hero section*/}
        <Hero />
        {/* whats inside section*/}
        <What />
        {/* Testimonal section*/}
        <Testimonial />
        {/* Footer section*/}
        <Footer />
      </div>
    </>
  );
}

export default App;
