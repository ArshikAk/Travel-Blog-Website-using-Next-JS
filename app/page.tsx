import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Journey from "./components/Journey";
import Banner1 from "./components/Banner1";
import Blog from "./components/Blog";
import Banner2 from "./components/Banner2";
import Footer from "./components/Footer";

export default function Home() {
  return(
    <main>
      <Navbar />
      <Intro />
      <Journey/>
      <Banner1 />
      <Blog />
      <Banner2 />
      <Footer />
    </main>
  );
}
