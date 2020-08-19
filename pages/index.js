import Nav from "../components/navigation/Navigation";
import Header from "./../components/header/Header";
import Article1 from "./../components/articles/Article1";
import Article2 from "./../components/articles/Article2";
import AOS from "aos";
import { useEffect } from "react";




export default function Home() {
  useEffect(() => {
    AOS.init({duration:2000});
  });

  return (
    <>
      <Nav/>
      <main>
        <Header/>
        <section>
          <Article1/>
          <Article2/>
        </section>
      </main>
    </>   
  );
}
