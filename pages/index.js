import Nav from "../components/navigation/Navigation";
import Carousel from "../components/carousels/HeaderCarousel";
import Article1 from "./../components/articles/Article1";
import Article2 from "./../components/articles/Article2";
import Cards from "./../components/cards/Cards";
import Footer from "./../components/footer/footer";
import Spacer from "./../components/spacers/BodySpacer";
import AOS from "aos";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });

  return (
    <>
      <Nav />
      <main>
        <header>
          <Carousel />
        </header>
        <section>
          <Article1 />
          <Spacer space="100px" />
          <Article2 />
          <Spacer space="100px" />
        </section>
        <section>
          <Cards source="data-home" />
        </section>
        <Footer />
      </main>
    </>
  );
}
