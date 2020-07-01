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
            Internet. <br />
            Born in Beijing, worked and studied in Prague, Seattle, and
            Shanghai, Zeyao is now working and living in New York City.
          </p>
        </div>
        <div className={indexStyles.social}>
          <a href="#">Twitter</a>
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
          <a href="#">Are.na</a>
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
        <div className={indexStyles.archive}>
          <Link href="/">
            <a> Archive →︎</a>
          </Link>
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
