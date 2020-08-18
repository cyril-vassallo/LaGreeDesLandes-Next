import Nav from "./../components/nav/Nav";
import Header from "./../components/header/Header";
import Room from "./../components/room/Room";
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
          <Room/>
        </section>
      </main>
    </>   
  );
}
