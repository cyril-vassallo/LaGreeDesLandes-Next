import styles from "./nav.module.scss"

export default function Nav() {
    return (
      <nav className="container-fluid navigation my-1">
        <div className="row">
          <div className="col d-flex  align-items-center justify-content-start ml-3">
            <img className={styles.burger} src="/svg/open-menu.svg" />
          </div>
          <div className="col d-flex  align-items-center justify-content-center">
            <img className={styles.logo} src="/images/logo.png" />
          </div>
          <div className="col d-flex  align-items-center justify-content-end mr-3">
            <button className={styles.button} type="button">
              RESERVER
            </button>
          </div>
        </div>
      </nav>
    );
}
