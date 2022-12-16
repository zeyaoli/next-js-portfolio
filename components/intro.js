import indexStyles from "../styles/index.module.css";

const Intro = () => {
    return (
        <section className={indexStyles.intro}>
            <p>
                Zeyao is a web developer and designer based in New York City. He leads marketing site development and helps reshape various brands' online presence.
                He is currently working at <a href="https://ramp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--yellow-text)" }}>Ramp</a>. He is also an Adjunct Professor
                at Hunter College.
            </p>
        </section>
    );
};

export default Intro;
