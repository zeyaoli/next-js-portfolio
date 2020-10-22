import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

import utilStyles from "../styles/utils.module.css";
import indexStyles from "../styles/index.module.css";

import { getSortedPostsData } from "../lib/posts";

const bgColor = "#f3f1e9";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  const listItems = allPostsData.map(
    ({ id, title, description, thumbnail, skill }) => (
      <li className={utilStyles.listItem} key={id}>
        <Link href='/projects/[id]' as={`/projects/${id}`}>
          <div
            style={{ backgroundImage: `url(${thumbnail})` }}
            className={indexStyles.image}
          ></div>
        </Link>
        <Link href='/projects/[id]' as={`/projects/${id}`}>
          <a className={`${utilStyles.headingLgNoMargin} ${indexStyles.title}`}>
            {title}
          </a>
        </Link>
        <div className={utilStyles.textLightSm}>{skill}</div>
        <div className={utilStyles.textSm}>{description}</div>
      </li>
    )
  );

  return (
    <Layout>
      <Head>
        <title>Zeyao Li</title>
      </Head>
      <section className={indexStyles.info}>
        <div className={indexStyles.introduction}>
          <p className={utilStyles.headingLightLg}>
            👋 <span className={utilStyles.headingBoldLg}>Zeyao Li</span> is a
            designer and developer based in New York City. <br />
            He specializes in building and designing websites, installations,{" "}
            <br />
            and making the Internet as his creative playground. <br />I am
            looking for a full-time position in NYC/remote.{" "}
            <a
              href='#social'
              style={{
                borderBottom: `solid 1px`,
              }}
            >
              Chat with me
            </a>
          </p>
        </div>
      </section>
      <section className={indexStyles.projectSection}>
        <div className={indexStyles.sectionTitle}>
          <h3>Selected Work</h3>
        </div>
        <ul className={`${utilStyles.list} ${indexStyles.projects}`}>
          {listItems}
        </ul>
        {/* <div className={indexStyles.archive}>
          <Link href="/">
            <a> Archive →︎</a>
          </Link>
        </div> */}
      </section>

      <section>
        <div className={indexStyles.social} id='social'>
          <a href='https://twitter.com/lizeyao'>Twitter</a>
          <a href='https://www.linkedin.com/in/zeyaoli/'>LinkedIn</a>
          <a href='https://github.com/zeyaoli'>GitHub</a>
          <a href='https://www.are.na/zeyao-li'>Are.na</a>
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
