import Head from "next/head";
import Link from "next/link";

import Layout from "../components/layout";
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
        {/* <div className={aboutStyles.profile_pic}>
            <img src="/profile_bw.jpeg" alt="zeyao's headshot" />
          </div> */}

        <div className={aboutStyles.profile_info}>
          <p className={utilStyles.textMd}>
            I am a design engineer and educator studying at NYU's Interactive
            Telecommunications Program. Previously, I worked as a Counselor at{" "}
            <a href="https://itp.nyu.edu/camp2020/">ITP Camp</a>, a Design Lab
            Coordinator at{" "}
            <a href="http://makerspace.engineering.nyu.edu/">NYU MakerSpace</a>,
            and a Producer at <a href="https://www.rga.com/">R/GA</a>. <br />{" "}
            <br />
            As a Design Engineer (some people call it UX Engineer, UX
            developer...), I mainly work on building interactive web experiences
            that implement the good design. I am confident working in a
            fast-paced environment that has a cross-disciplinary team with
            multiple cultural backgrounds. <br /> <br />
            My web development work includes tools like HTML, CSS, JavaScript
            Framework like React/Next.js, p5.js, and a-frame, as well as some
            back-end technology, such as WebSocket, Node.js/Express.js, and
            MongoDB. I also work with IoT tools like Arduino and Teensy. <br />
            <br />
            The designer side of me pursues creative and smooth interactions
            between the user and the web. I demonstrate the design with the help
            of Adobe XD and Figma.
            <br />
            <br />
            Before stepping into the field of technology, I worked in the media
            industry, covering fashion news for{" "}
            <a href="https://i-d.vice.com/en_uk">i-D magazine</a>, lifestyle and
            beauty for{" "}
            <a href="https://www.nytimes.com/section/t-magazine">
              The NYTimes Style Magazine
            </a>{" "}
            China Edition, and LGBTQ activism for{" "}
            <a href="https://soundcloud.com/nyupraguecast"> PragueCast</a> in
            Prague.
            <br />
            <br />I am looking for opportunities for Fall/Winter 2020 internship
            and full-time 2021 work. Get in touch with me!
          </p>
        </div>
        <div className={aboutStyles.profile_detail}>
          <section className={aboutStyles.detailSection}>
            <h4 className={utilStyles.headingMdBold}>Exhibition/Press</h4>
            <ul>
              <li>
                <a href="https://makeprojects.com/make/project/thirsty-plant">
                  Maker Faire
                </a>
                , Thirsty Plant, New York, NY, May 2020
              </li>
              <li>
                <a href="https://itp.nyu.edu/shows/spring2020/aaalone/">
                  NYU ITP Spring Show
                </a>
                , Aaalone, Virtual, May 2020
              </li>
              <li>
                <a href="https://tisch.nyu.edu/itp/news/spring-2020/itp-students-present-work-at-liberty-science-center">
                  Liberty Science Center Engineering Week
                </a>
                , Thirsty Plant, Jersey City, NJ, Feb 2020
              </li>
              <li>
                <a href="https://www.youtube.com/watch?v=11M3RLmayz8">
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
            <h4 className={utilStyles.headingMdBold}>Workshops</h4>
            <ul>
              <li>
                <a href="https://glitch.com/@zeyaoli/intro-to-fetch-api-workshop">
                  Intro to Fetch API in JavaScript - Requesting Data from DogAPI
                </a>
                , ITP Camp, 2020
              </li>
              <li>
                Why do we make, what we make? - A Panel Discussion about
                "Intention" behind your Design Practice, ITP Camp, 2020
              </li>
              <li>
                <a href="https://glitch.com/@zeyaoli/web-vr-aframe-and-p-5">
                  Prototype Web VR: build your own web VR experience with
                  a-frame and p5.js
                </a>
                , MakerSpace, 2019
              </li>
              <li>
                <a href="https://glitch.com/@zeyaoli/web-vr-aframe-and-p-5">
                  Prototype Web VR: build your own web VR experience with
                  a-frame and p5.js
                </a>
                , ITP Camp, 2019
              </li>
              <li>
                <a href="https://docs.google.com/presentation/d/1Sy-2hzWUiFGpLQtYLFjlKyE3r8U7QQrDGIGYw7Hb0lk/edit?usp=sharing">
                  Intro to Photogrammetry: Turning yourself into a 3D model and
                  twerking in a virtual environment
                </a>
                , ITP Camp, 2019
              </li>
            </ul>
          </section>
          <section className={aboutStyles.detailSection}>
            <h4 className={utilStyles.headingMdBold}>Education</h4>
            <ul>
              <li>
                New York University, MPS, Interactive Telecommunications
                Program, 2019 - 2021
              </li>
              <li>
                New York University Prague, Exchange, Media Culture and
                Communication, 2017
              </li>
              <li>
                New York University Shanghai, Bachelor of Science, Interactive
                Media Arts, 2015-2019
              </li>
            </ul>
          </section>
        </div>

        <section>
          <div className={indexStyles.social} id="social">
            <a href="https://twitter.com/lizeyao">Twitter</a>
            <a href="https://www.linkedin.com/in/zeyaoli/">LinkedIn</a>
            <a href="https://github.com/zeyaoli">GitHub</a>
            <a href="https://www.are.na/zeyao-li">Are.na</a>
          </div>
        </section>
      </div>

      <style jsx global>
        {`
          body {
            background-color: #f3f1e9;
          }
        `}
      </style>
    </Layout>
  );
}
