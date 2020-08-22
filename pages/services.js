import Nav from "../components/navigation/Navigation";
import Banner from "../components/banner/Banner";
import Footer from "../components/footer/footer";
import Cards from "../components/cards/Cards";

export default function Home() {


  return (
    <>
      <Nav />
      <main>
        <Banner
          title="Nos séjours de rêves"
          titleStyle="fade-down"
          background="header.jpg"
          titleColor="#8b9620"
        />
        <Cards />
        <Footer />
        <Banner
          title="Nos soins les plus paissant"
          titleStyle="fade-down"
          background="header2.jpg"
          titleColor="#7D92B2"
        />
        <Cards />
      </main>
    </>
  );
}
