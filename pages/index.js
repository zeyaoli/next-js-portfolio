import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

import utilStyles from "../styles/utils.module.css";
import indexStyles from "../styles/index.module.css";

import { getSortedPostsData } from "../lib/posts";

const bgColor = "#f3f1e9";
const singleProject = `${utilStyles.listItem} ${indexStyles.singleProject}`;

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
        <p className={utilStyles.headingLightXl}>
          Zeyao Li is a Design Engineer studying at NYU ITP. He focuses on using
          web technology to enhance human relationships with the help of
          Internet. Born in Beijing, worked and studied in Prague, Seattle, and
          Shanghai, Zeyao is now working and living in New York City.
        </p>
      </section>
      <section>
        <ul className={`${utilStyles.list} ${indexStyles.projects}`}>
          {allPostsData.map(({ id, title, description, thumbnail, skill }) => (
            <li className={singleProject} key={id}>
              <Link href="/projects/[id]" as={`/projects/${id}`}>
                <img
                  src={thumbnail}
                  alt={title}
                  className={indexStyles.image}
                />
              </Link>
              <Link href="/projects/[id]" as={`/projects/${id}`}>
                <a className={utilStyles.headingLightXl}>{title}</a>
              </Link>
              <li>{skill}</li>
              <li>{description}</li>
            </li>
          ))}
        </ul>
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
