import Nav from "../components/navigation/Navigation";
import Banner from "../components/banner/Banner";
import Footer from "../components/footer/footer";
import Cards from "../components/cards/Cards";
import BodySpacer from "../components/spacers/BodySpacer";

export default function Offer() {
  return (
    <>
      <Nav />
      <main>
        <header>
          <Banner
            title="Nos séjours de rêves"
            titleStyle="fade-down"
            background="header.jpg"
            titleColor="#8b9620"
          />
        </header>
        <Cards />
        <Cards />
        <BodySpacer space="20vh" />
        <Banner
          title="Nos soins les plus apaisants"
          titleStyle="fade-down"
          background="header2.jpg"
          titleColor="#7D92B2"
        />
        <Cards />
        <BodySpacer space="20vh" />
        <Footer />
      </main>
    </>
  );
}
