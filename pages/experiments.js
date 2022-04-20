import ExperimentsIntro from "../components/experimentsIntro";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import indexStyles from "../styles/index.module.css";
import utilStyles from "../styles/utils.module.css";


import { getSortedPostsData } from "../lib/posts";


export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Experiments({allPostsData}){
  const experimentsPost = allPostsData.filter(post => post.category === 'experiments');
  const listItems = experimentsPost.map(
      ({ id, title, description, thumbnail, skill, year, role }) => (   
          
          <li className={utilStyles.listItem} key={id}>
              <Link href="/projects/[id]" as={`/projects/${id}`}>
                  <div
                      style={{ backgroundImage: `url(${thumbnail})` }}
                      className={indexStyles.image}
                  ></div>
              </Link>
              <div className={indexStyles.projectTags}>
                  {typeof skill === "object" &&
                      skill.map(({ name, color }) => {
                          return (
                              <span className={`projectTag__${color}`} key={name}>
                                  {name}
                              </span>
                          );
                      })}
              </div>
              <div className={indexStyles.projectDetail}>
                  <div className={indexStyles.projectColLeft}>
                      <Link href="/projects/[id]" as={`/projects/${id}`}>
                          <a className={`${indexStyles.title}`}>{title}</a>
                      </Link>
                      <p className={indexStyles.projectSubDetail}>{role}</p>
                      <p className={indexStyles.projectSubDetail}>{year}</p>
                  </div>

                  <div className={`${indexStyles.projectDescription}`}>
                      {description}
                  </div>
              </div>
          </li>
      )
  );


  return (
    <Layout>
        <Head>
            <title>Experiments - Zeyao Li</title>
        </Head>
        <ExperimentsIntro />
        <section className={indexStyles.projectSection}>
            <ul className={`${utilStyles.list} ${indexStyles.projects}`}>
                {listItems}
            </ul>
        </section>
    </Layout>
);
}