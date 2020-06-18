import utilStyles from "../styles/utils.module.css";
import footerStyles from "./footer.module.css";

export default function Footer() {
  return (
    <a
      href="mailto:zeyao.li@nyu.edu"
      className={`${utilStyles.footerText} ${footerStyles.footer}`}
    >
      zeyao.li@nyu.edu
    </a>
  );
}
