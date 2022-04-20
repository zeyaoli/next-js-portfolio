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
                                    <span>Zeyao Li</span>
                                </a>
                            </Link>
                        </div>
                        <div className={styles.headerRight}>
                            <Link href="/">
                                <a>
                                    <span>Work</span>
                                </a>
                            </Link>
                            <Link href="/experiments">
                                <a>
                                    <span>Experiments</span>
                                </a>
                            </Link>
                                <span className={utilStyles.lightText}>
                                    About
                                </span>
                        </div>
                    </>
                ) : (
                    <>
                        <div className={styles.headerLeft}>
                            <Link href="/">
                                <a>
                                    <span>Zeyao Li</span>
                                </a>
                            </Link>
                        </div>
                        <div className={styles.headerRight}>
                            <Link href="/">
                                <a>
                                    <span>Work</span>
                                </a>
                            </Link>
                            <Link href="/experiments">
                                <a>
                                    <span>Experiments</span>
                                </a>
                            </Link>
                            <Link href="/about">
                                <a>
                                    <span>About</span>
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
