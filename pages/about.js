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
                        Hi 👋 , I am Zeyao. I am an experienced web developer
                        and designer specializing in building content-rich
                        websites and web-based apps, with a broad range of tech
                        stacks in hand.
                        <br />
                        <br />
                        Currently, I am a Web Engineer at PINT, where I build
                        and maintain websites for clients in variable fields.
                        Recently, I led the development process of{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://glaukos.com/"
                        >
                            Glaukos
                        </a>
                        , an ophthalmic medical technology company's brand new
                        website.
                        <br />
                        <br />I am also an an adjunct professor at{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://fm.hunter.cuny.edu/"
                        >
                            Hunter College Film and Media department
                        </a>{" "}
                        ,teaching Web Production in the Department of Film and
                        Media. I believe in life learning, and teaching helps me
                        learn better myself and break down the web development
                        foundation for my students. I am proud of leading my
                        students into the door of web development and seeing
                        them grow over the semester. <br /> <br />
                        I hold a Master's degree in Interactive
                        Telecommunications Program (ITP) from NYU Tisch School
                        of the Arts and a Bachelor of Science's degree in
                        Interactive Media Arts from NYU Shanghai.
                        <br />
                        <br />
                        Previously, I was a front-end engineer developing
                        Dropmark at{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://oak.is"
                        >
                            Oak Studios LLC
                        </a>
                        , and a Project Manager at{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://www.rga.com/"
                        >
                            R/GA
                        </a>
                        .
                        <br />
                        <br />
                        Chat with me if you have freelance web development
                        projects or want to collaborate with me in the NYC area
                        or remote. You can find my resume/CV{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://docs.google.com/document/d/1puJl2BLUl-K39SPM_lc2yBSgOdKo7jGJHVaJIFTdsrY/edit?usp=sharing"
                        >
                            here
                        </a>
                        .
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
                                Java(Processing), Jekyll, PHP
                            </span>
                        </div>
                        <div className={aboutStyles.skills_column}>
                            <span className={utilStyles.headingLightMd}>
                                Libraries/ Framework{" "}
                            </span>
                            <span className={utilStyles.headingLightMdSans}>
                                — React.js, Next.js, Storybook, Node.js,
                                Express.js, WordPress, D3.js, p5.js, three.js,
                                socket.io (Web Socket), MongoDB
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
                                    href="https://itp.nyu.edu/adjacent/issue-8/2021/06/24/cybernetics-of-sex-webzine/"
                                >
                                    Adjacent Issue 8
                                </a>
                                , Cybernetics of Sex Webzine, New York, NY, Oct
                                2021
                            </li>
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
                        <h3 className={utilStyles.headingLightLg}>Teaching</h3>
                        <ul>
                            <li>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://zeyao.online/"
                                >
                                    Web Production 1
                                </a>
                                , Hunter College CUNY, 2021-2022
                            </li>
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
                                Telecommunications Program
                            </li>
                            <li>
                                New York University Prague, Exchange, Media
                                Culture and Communication
                            </li>
                            <li>
                                New York University Shanghai, Bachelor of
                                Science, Interactive Media Arts
                            </li>
                        </ul>
                    </section>
                </div>
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
