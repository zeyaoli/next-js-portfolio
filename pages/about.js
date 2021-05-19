import Head from "next/head";
import Link from "next/link";

import Layout from "../components/layout";
import Social from "../components/social";
import aboutStyles from "../styles/about.module.css";
import utilStyles from "../styles/utils.module.css";
import indexStyles from "../styles/index.module.css";

export default function AboutPage() {
    return (
        <Layout about>
            <Head>
                <title>About - Zeyao Li</title>
            </Head>
            <div className={aboutStyles.about_container}>
                <div className={aboutStyles.profile_info}>
                    <p className={utilStyles.bodyLong}>
                        Hi 👋 ,{" "}
                        <span className="intro_oblique">
                            I am Zeyao, a creative web developer, designer, and
                            educator.
                        </span>{" "}
                        Currently, I am a Frontend Engineer at{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://oak.is"
                        >
                            Oak Studios LLC
                        </a>
                        , as well as pursuing my master's degree in Interactive
                        Telecommunication Program at NYU Tisch. Previously, I
                        was web development instructor at{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://itp.nyu.edu/camp2020/"
                        >
                            ITP Camp
                        </a>
                        , and worked as a Producer at{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.rga.com/"
                        >
                            R/GA
                        </a>
                        . <br /> <br />
                        As a queer developer, my work contains websites related
                        to relationships, dating culture, social media, and
                        sexuality. My work had been exhibited at Liberty Science
                        Center, Maker Faire NY, featured on GameScenes, and
                        awarded by Adobe and Netflix.
                        <br /> <br />
                        Before stepping into the field of technology, I worked
                        in the media industry, covering fashion news for{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://i-d.vice.com/en_uk"
                        >
                            i-D magazine
                        </a>
                        , lifestyle and beauty for{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.nytimes.com/section/t-magazine"
                        >
                            The New York Times Style Magazine
                        </a>{" "}
                        China Edition, and LGBTQ activism for{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://soundcloud.com/nyupraguecast"
                        >
                            {" "}
                            PragueCast
                        </a>{" "}
                        in Prague.
                        <br />
                        <br />I am actively looking for a front-end developer
                        position and/or freelance web development projects in
                        the NYC area or remote. You can find my resume/CV{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://docs.google.com/document/d/126bJILgGepDddcDs6jiLrojiDb_Ec6aiBnOGcItrAiU/edit?usp=sharing"
                        >
                            here
                        </a>
                        . Let's grab a coffee (over zoom or wherever on the
                        Internet space)!
                    </p>
                    <div className={aboutStyles.profile_pic}>
                        <img
                            src="./about/profile.webp"
                            alt="headshot"
                            id="headshot"
                        />
                    </div>
                </div>
                <div className={aboutStyles.profile_skills}>
                    <h2 className={utilStyles.headingLightLg}>Skills</h2>
                    <div className={aboutStyles.skills_detail}>
                        <div className={aboutStyles.skills_column}>
                            <span className={utilStyles.headingLightMd}>
                                Programming Languages{" "}
                            </span>
                            <span className={utilStyles.headingLightMdSans}>
                                — HTML/CSS/SASS, JavaScript, TypeScript, Python,
                                Java(Processing), Jekyll, Liquid
                            </span>
                        </div>
                        <div className={aboutStyles.skills_column}>
                            <span className={utilStyles.headingLightMd}>
                                Libraries/ Framework{" "}
                            </span>
                            <span className={utilStyles.headingLightMdSans}>
                                — React.js, Next.js, Storybook, Node.js,
                                Express.js, D3.js, p5.js, three.js, socket.io
                                (Web Socket), MongoDB
                            </span>
                        </div>
                        <div className={aboutStyles.skills_column}>
                            <span className={utilStyles.headingLightMd}>
                                Software / Tools{" "}
                            </span>
                            <span className={utilStyles.headingLightMdSans}>
                                — Arduino, Adobe Suite, Docker, Figma, Git, NPM,
                                Sketch, Webpack, Unity
                            </span>
                        </div>
                        <div className={aboutStyles.skills_column}>
                            <span className={utilStyles.headingLightMd}>
                                Project Production{" "}
                            </span>
                            <span className={utilStyles.headingLightMdSans}>
                                — UX / UI Design, Prototyping, 3D Printing,
                                Laser Cutting, Photogrammetry, Wireframing
                            </span>
                        </div>
                    </div>
                </div>
                <div className={aboutStyles.profile_detail}>
                    <section className={aboutStyles.detailSection}>
                        <h3 className={utilStyles.headingLightLg}>
                            Exhibition/Press
                        </h3>
                        <ul>
                            <li>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://makeprojects.com/make/project/thirsty-plant"
                                >
                                    Maker Faire
                                </a>
                                , Thirsty Plant, New York, NY, May 2020
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://itp.nyu.edu/shows/spring2020/aaalone/"
                                >
                                    NYU ITP Spring Show
                                </a>
                                , Aaalone, Virtual, May 2020
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://tisch.nyu.edu/itp/news/spring-2020/itp-students-present-work-at-liberty-science-center"
                                >
                                    Liberty Science Center Engineering Week
                                </a>
                                , Thirsty Plant, Jersey City, NJ, Feb 2020
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.youtube.com/watch?v=11M3RLmayz8"
                                >
                                    NYU ITP Winter Show
                                </a>
                                , Thirsty Plant, New York, NY, Dec 2019
                            </li>
                            <li>
                                <a href="https://www.gamescenes.org/2019/07/game-art-zayao-lis-the-man-and-woman-who-married-the-internet-2019.html">
                                    GameScenes
                                </a>
                                , The Man and Woman Who Married The Internet,
                                July 2019
                            </li>
                            <li>
                                NYU Shanghai IMA Winter Show, Broken Heart
                                Museum, Shanghai, China, Dec 2018
                            </li>
                        </ul>
                    </section>
                    <section className={aboutStyles.detailSection}>
                        <h3 className={utilStyles.headingLightLg}>Workshops</h3>
                        <ul>
                            <li>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://glitch.com/@zeyaoli/intro-to-fetch-api-workshop"
                                >
                                    Intro to Fetch API in JavaScript -
                                    Requesting Data from DogAPI
                                </a>
                                , ITP Camp, 2020
                            </li>
                            <li>
                                Why do we make, what we make? - A Panel
                                Discussion about "Intention" behind your Design
                                Practice, ITP Camp, 2020
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://glitch.com/@zeyaoli/web-vr-aframe-and-p-5"
                                >
                                    Prototype Web VR: build your own web VR
                                    experience with a-frame and p5.js
                                </a>
                                , MakerSpace, 2019
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://glitch.com/@zeyaoli/web-vr-aframe-and-p-5"
                                >
                                    Prototype Web VR: build your own web VR
                                    experience with a-frame and p5.js
                                </a>
                                , ITP Camp, 2019
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://docs.google.com/presentation/d/1Sy-2hzWUiFGpLQtYLFjlKyE3r8U7QQrDGIGYw7Hb0lk/edit?usp=sharing"
                                >
                                    Intro to Photogrammetry: Turning yourself
                                    into a 3D model and twerking in a virtual
                                    environment
                                </a>
                                , ITP Camp, 2019
                            </li>
                        </ul>
                    </section>
                    <section className={aboutStyles.detailSection}>
                        <h3 className={utilStyles.headingLightLg}>Education</h3>
                        <ul>
                            <li>
                                New York University, MPS, Interactive
                                Telecommunications Program, 2019 - 2021
                            </li>
                            <li>
                                New York University Prague, Exchange, Media
                                Culture and Communication, 2017
                            </li>
                            <li>
                                New York University Shanghai, Bachelor of
                                Science, Interactive Media Arts, 2015-2019
                            </li>
                        </ul>
                    </section>
                </div>
                <Social />
            </div>

            <style jsx>
                {`
                    :global(body) {
                        background-color: #f3f1e9;
                    }
                    .intro_oblique {
                        font-style: oblique;
                    }
                `}
            </style>
        </Layout>
    );
}
