import Nav from "../components/navigation/Navigation";
import Banner from "../components/banner/Banner";
import Footer from "../components/footer/footer";
import Spacer from "../components/spacers/BodySpacer";
import Article2 from "../components/articles/Article2";
export default function Offer() {


  return (
    <>
      <Nav />
      <main>
        <Banner
          title="Nous contacter"
          titleStyle="fade-down"
          background="header2.jpg"
          titleColor="#7D92B2"
        />
        <Spacer space="100px" />
        <Article2 />
        <Footer />
      </main>
    </>
  );
}
