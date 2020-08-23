import styles from "./pcNav.module.scss";
import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";

export default function PcNav({ navigation }) {

  return (
    <>
      <Navbar variant="light">
        <Nav className="mr-auto">
          <div className="d-flex  align-items-center justify-content-center">
            {navigation.map((link, key) => {
              return (
                <p key={key} href={link.path}>
                  <Link href={link.path}>
                    <a index={key} className={styles.linkNavPc}>
                      {link.title}
                    </a>
                  </Link>
                </p>
              );
            })}
          </div>
        </Nav>
        <div className="d-flex  align-items-center justify-content-end mr-3">
          <button className={styles.button} type="button">
            RESERVER
          </button>
        </div>
      </Navbar>
      <div className="d-flex my-5  align-items-center justify-content-center">
        <img
          className={styles.logoYR}
          src="/images/logo.png"
          alt="Logo Grée des Landes"
        />
      </div>
    </>
  );
}
