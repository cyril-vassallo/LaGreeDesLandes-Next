import Nav from "../components/navigation/Navigation";
import Header from "./../components/header/Header";
import Article1 from "./../components/articles/Article1";
import Article2 from "./../components/articles/Article2";
import Cards from "./../components/cards/Cards";
import Footer from "./../components/footer/footer";

export default function Home() {


  return (
    <>
      <Nav />
      <main>
        <Header/>
        <section>
          <Article1 />
          <Article2 />
        </section>
        <section>
          <Cards />
        </section>
        <Footer/>
      </main>
    </>
  );
}
