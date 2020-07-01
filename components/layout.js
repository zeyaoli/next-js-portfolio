import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Meta from "./meta.js";
import Footer from "./footer.js";

function Layout({ children, about }) {
  return (
    <>
      <Meta />
      <header className={styles.header}>
        {about ? (
          <>
            <div className={styles.headerLeft}>
              <Link href="/">
                <a>
                  <h1 className={utilStyles.headingLightMd}>Zeyao Li</h1>
                </a>
              </Link>
            </div>
            <div className={styles.headerRight}>
              <a>
                <h1
                  className={`${utilStyles.headingLightMd} ${utilStyles.lightText}`}
                >
                  About
                </h1>
              </a>
            </div>
          </>
        ) : (
          <>
            <div className={styles.headerLeft}>
              <Link href="/">
                <a>
                  <h1 className={utilStyles.headingLightMd}>Zeyao Li</h1>
                </a>
              </Link>
            </div>
            <div className={styles.headerRight}>
              <Link href="/about">
                <a>
                  <h1 className={utilStyles.headingLightMd}>About</h1>
                </a>
              </Link>
            </div>
          </>
        )}
      </header>
      <div className={styles.container}>
        <main className={styles.innerContainer}>{children}</main>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
