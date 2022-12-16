import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import Intro from "../components/intro";

import utilStyles from "../styles/utils.module.css";
import indexStyles from "../styles/index.module.css";

import { getSortedPostsData } from "../lib/posts";

// const bgColor = "#fcfcfc";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}
export default function Home({ allPostsData }) {
    const work = allPostsData.filter(post => post.category === 'work');
    const listItems = work.map(
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
                <title>Zeyao Li</title>
            </Head>
            <Intro />
            <section className={indexStyles.projectSection}>
                <ul className={`${utilStyles.list} ${indexStyles.projects}`}>
                    {listItems}
                </ul>
            </section>

            {/* <style jsx global>
                {`
                    body {
                        background-color: ${bgColor};
                    }
                `}
            </style> */}
        </Layout>
    );
}
