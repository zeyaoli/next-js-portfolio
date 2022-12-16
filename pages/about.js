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
          <div>
            <p className={aboutStyles.bodyText}>
              I am currently working at Ramp as a Web Engineer to shape Ramp's
              marketing site and drive Ramp's growth through the website.
              Previously, I led the development and helped refresh various
              brands' websites, including Glaukos, KLA, and Rubicon MD. I also
              developed the new Dropmark under Oak Studios. Outside of work, I
              was an Adjunct Professor at Hunter College and taught a Web
              Development course at Film and Media department at Hunter College
              (2021-2022).{" "}
            </p>
            <p className={aboutStyles.bodyText}>
              I hold a Master's degree in Interactive Telecommunications Program
              (ITP) from NYU Tisch School of the Arts and a Bachelor of
              Science's degree in Interactive Media Arts from NYU Shanghai.
            </p>
            <p className={aboutStyles.bodyText}>
              Chat with me if you have freelance web development projects or
              want to collaborate with me in the NYC area or remote. You can
              find my resume/CV{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://docs.google.com/document/d/1puJl2BLUl-K39SPM_lc2yBSgOdKo7jGJHVaJIFTdsrY/edit?usp=sharing"
                style={{ color: "var(--yellow-text)" }}
              >
                here
              </a>
              .
            </p>
          </div>

          <div className={aboutStyles.profile_pic}>
            <img src="./about/profile-2022.webp" alt="headshot" id="headshot" />
          </div>
        </div>
        <div className={aboutStyles.profile_detail}>
          <section className={aboutStyles.detailSection}>
            <h3 className={utilStyles.headingLightMdSans}>Exhibition/Press</h3>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.thesparkpodcast.org/episodes/developing-webs-and-minds-a-conversation-with-zeyao-li"
                >
                  Developing Webs and Minds - A Conversation with Zeyao Li
                </a>
                , the Spark 火花, Mar 2022
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://itp.nyu.edu/adjacent/issue-8/2021/06/24/cybernetics-of-sex-webzine/"
                >
                  Adjacent Issue 8
                </a>
                , Cybernetics of Sex Webzine, New York, NY, Oct 2021
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
                , The Man and Woman Who Married The Internet, July 2019
              </li>
              <li>
                NYU Shanghai IMA Winter Show, Broken Heart Museum, Shanghai,
                China, Dec 2018
              </li>
            </ul>
          </section>
          <section className={aboutStyles.detailSection}>
            <h3 className={utilStyles.headingLightMdSans}>Teaching</h3>
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
                  Intro to Fetch API in JavaScript - Requesting Data from DogAPI
                </a>
                , ITP Camp, 2020
              </li>
              <li>
                Why do we make, what we make? - A Panel Discussion about
                "Intention" behind your Design Practice, ITP Camp, 2020
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://glitch.com/@zeyaoli/web-vr-aframe-and-p-5"
                >
                  Prototype Web VR: build your own web VR experience with
                  a-frame and p5.js
                </a>
                , MakerSpace, 2019
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://glitch.com/@zeyaoli/web-vr-aframe-and-p-5"
                >
                  Prototype Web VR: build your own web VR experience with
                  a-frame and p5.js
                </a>
                , ITP Camp, 2019
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://docs.google.com/presentation/d/1Sy-2hzWUiFGpLQtYLFjlKyE3r8U7QQrDGIGYw7Hb0lk/edit?usp=sharing"
                >
                  Intro to Photogrammetry: Turning yourself into a 3D model and
                  twerking in a virtual environment
                </a>
                , ITP Camp, 2019
              </li>
            </ul>
          </section>
          <section className={aboutStyles.detailSection}>
            <h3 className={utilStyles.headingLightMdSans}>Education</h3>
            <ul>
              <li>
                New York University, MPS, Interactive Telecommunications Program
              </li>
              <li>
                New York University Prague, Exchange, Media Culture and
                Communication
              </li>
              <li>
                New York University Shanghai, Bachelor of Science, Interactive
                Media Arts
              </li>
            </ul>
          </section>
        </div>
      </div>

      <style jsx>
        {`
          .intro_oblique {
            font-style: oblique;
          }
        `}
      </style>
    </Layout>
  );
}
