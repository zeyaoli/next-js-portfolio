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
            NYC-based web developer, designer, and educator, working at <a href="https://oak.is"> Oak Studios</a>. 
            He specializes in designing and building full-stack creative web
            apps with tools like <b>Figma</b>, <b>React</b>, <b>Web Socket</b>,
            and <b>Node.js</b>.
            He is always down to grab a cup of coffee (virtually).{" "}
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
