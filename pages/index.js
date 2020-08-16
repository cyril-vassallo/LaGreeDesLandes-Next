import Nav from "./../components/nav/Nav";
import Header from "./../components/header/Header";
import Room from "./../components/room/Room";


export default function Home() {
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
