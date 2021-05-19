import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import Social from "../components/social";

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
                <Link href="/projects/[id]" as={`/projects/${id}`}>
                    <div
                        style={{ backgroundImage: `url(${thumbnail})` }}
                        className={indexStyles.image}
                    ></div>
                    {/* <img alt={thumbnail} src={thumbnail} loading="lazy" /> */}
                </Link>
                <Link href="/projects/[id]" as={`/projects/${id}`}>
                    <div className={indexStyles.projectDescription}>
                        <a
                            className={`${utilStyles.headingLgNoMargin} ${indexStyles.title}`}
                        >
                            {title}
                        </a>
                        <div className={utilStyles.textSm}>{description}</div>
                        <div className={utilStyles.textLightSm}>{skill}</div>
                    </div>
                </Link>
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
                        👋 I am a web developer, designer, and educator, working
                        at{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://oak.is"
                        >
                            {" "}
                            Oak Studios
                        </a>{" "}
                        and building{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="http://dropmark.com/"
                        >
                            Dropmark
                        </a>
                        . I just graduated from{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://tisch.nyu.edu/itp"
                        >
                            NYU ITP
                        </a>{" "}
                        where I made websites and installations about queer and
                        digital dating culture.{" "}
                        <a
                            href="#socialSection"
                            style={{
                                borderBottom: `solid 1px`,
                            }}
                        >
                            Chat with me
                        </a>{" "}
                        for freelance web design and development work or if you
                        want to know more about me and my work.
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
            </section>

            <Social />

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
