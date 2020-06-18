import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Meta from "./meta.js";
import Footer from "./footer.js";

function Layout({ children, about }) {
  return (
    <>
      <Meta />
      <div className={styles.container}>
        <header className={styles.header}>
          {about ? (
            <>
              <Link href="/">
                <a>
                  <h1 className={utilStyles.headingLightMd}>Zeyao Li</h1>
                </a>
              </Link>
              <h1
                className={`${utilStyles.headingLightMd} ${utilStyles.lightText}`}
              >
                About
              </h1>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <h1 className={utilStyles.headingLightMd}>Zeyao Li</h1>
                </a>
              </Link>
              <Link href="/about">
                <a>
                  <h1 className={utilStyles.headingLightMd}>About</h1>
                </a>
              </Link>
            </>
          )}
        </header>
        <main className={styles.innerContainer}>{children}</main>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
