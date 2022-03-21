import indexStyles from "../styles/index.module.css";

const Intro = () => {
    return (
        <section className={indexStyles.intro}>
            <p>
                I am Zeyao, a web developer and designer specializing in
                building sites and design systems for enhancing companies'
                branding and value and refining their audience's web experience.
                I am currently working at PINT, a full-service web development
                agency. I also teach{" "}
                <a
                    href="https://zeyao.online"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--purple-text)" }}
                >
                    Web Production
                </a>{" "}
                at Hunter College as an Adjunct Professor.
            </p>
        </section>
    );
};

export default Intro;
