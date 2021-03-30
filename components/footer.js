import utilStyles from "../styles/utils.module.css";
import footerStyles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={footerStyles.footer} id="footer">
      <div className={footerStyles.footerLeft}>
        <p className={utilStyles.footerText}>
          Zeyao Li © 2021 Built with Next.js
        </p>
      </div>
      <div className={footerStyles.footerRight}>
        <a href="mailto:zeyao.li@nyu.edu" className={utilStyles.footerText}>
          <p>zeyao.li@nyu.edu</p>
        </a>
      </div>
    </footer>
  );
}
