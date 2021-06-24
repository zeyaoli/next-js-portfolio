import utilStyles from "../styles/utils.module.css";
import footerStyles from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={footerStyles.footer} id="footer">
            <div className={footerStyles.footerLeft}>
                <p className={utilStyles.footerText}>
                    Zeyao Li © 2021{" "}
                    <span style={{ fontSize: "0.6rem" }}>
                        This site is designed and developed by me
                    </span>
                </p>
            </div>
            <div className={footerStyles.footerRight}>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/lizeyao"
                    className={utilStyles.footerText}
                >
                    Twitter
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/zeyaoli/"
                    className={utilStyles.footerText}
                >
                    LinkedIn
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/zeyaoli"
                    className={utilStyles.footerText}
                >
                    GitHub
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.are.na/zeyao-li"
                    className={utilStyles.footerText}
                >
                    Are.na
                </a>

                <a
                    href="mailto:zeyao.li@nyu.edu"
                    className={utilStyles.footerText}
                >
                    Email
                </a>
            </div>
        </footer>
    );
}
