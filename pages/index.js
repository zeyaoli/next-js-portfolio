import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

import utilStyles from "../styles/utils.module.css";
import indexStyles from "../styles/index.module.css";

import { getSortedPostsData } from "../lib/posts";

const bgColor = "#FFE52C";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Zeyao Li</title>
      </Head>
      <section className={indexStyles.info}>
        <div className={indexStyles.introduction}>
          <p className={utilStyles.headingLg}>
            Zeyao Li is a Design Engineer studying at NYU ITP. He focuses on
            using web technology to enhance human relationships with the help of
            Internet. Born in Beijing, worked and studied in Prague, Seattle,
            and Shanghai, Zeyao is now working and living in New York City.{" "}
            <br />
            <br />I am currently looking for a 2020 Fall/Winter Internship or a
            2021 Full-time position. Feel free to chat with me{" "}
            <a
              href="#social"
              style={{
                border: `solid 1px`,
                borderRadius: `15px`,
                display: `inline`,
                padding: `3px 15px`,
              }}
            >
              here
            </a>
          </p>
        </div>
      </section>
      <section>
        <ul className={`${utilStyles.list} ${indexStyles.projects}`}>
          {allPostsData.map(({ id, title, description, thumbnail, skill }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/projects/[id]" as={`/projects/${id}`}>
                <div
                  style={{ backgroundImage: `url(${thumbnail})` }}
                  className={indexStyles.image}
                ></div>
              </Link>
              <Link href="/projects/[id]" as={`/projects/${id}`}>
                <a
                  className={`${utilStyles.headingLgNoMargin} ${indexStyles.title}`}
                >
                  {title}
                </a>
              </Link>
              <div className={utilStyles.textLightSm}>{skill}</div>
              <div className={utilStyles.textMd}>{description}</div>
            </li>
          ))}
        </ul>
        {/* <div className={indexStyles.archive}>
          <Link href="/">
            <a> Archive →︎</a>
          </Link>
        </div> */}
      </section>

      <section>
        <div className={indexStyles.social} id="social">
          <a href="https://twitter.com/lizeyao">Twitter</a>
          <a href="https://www.linkedin.com/in/zeyaoli/">LinkedIn</a>
          <a href="https://github.com/zeyaoli">GitHub</a>
          <a href="https://www.are.na/zeyao-li">Are.na</a>
        </div>
      </section>

      <style jsx global>
        {`
          body {
            background-color: ${bgColor};
          }
        `}
      </style>
    </Layout>
  );
}
