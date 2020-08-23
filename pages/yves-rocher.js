import Nav from "../components/navigation/Navigation";
import Banner from "../components/banner/Banner";
import Footer from "../components/footer/footer";
import Spacer from "../components/spacers/BodySpacer";
import Article1 from "../components/articles/Article1";

export default function Offer() {
  return (
    <>
      <Nav />
      <main>
        <header>
          <Banner
            title="Yves Rocher"
            titleStyle="fade-down"
            background="header.jpg"
            titleColor="#8b9620"
          />
        </header>
        <Spacer space="100px" />
        <Article1 />
        <Footer />
      </main>
    </>
  );
}
