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
                <div className={indexStyles.projectDescription}>
                    <Link href="/projects/[id]" as={`/projects/${id}`}>
                        <div
                            className={`${utilStyles.headingLgNoMargin} ${indexStyles.title}`}
                        >
                            {title}
                        </div>
                    </Link>
                    <div className={utilStyles.textSm}>{description}</div>
                    <div className={utilStyles.textLightSm}>{skill}</div>
                </div>
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
                        👋 I am a web developer, designer, and educator,
                        teaching{" "}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://zeyao.online/"
                        >
                            "Web Production 1"
                        </a>{" "}
                        at Hunter College this fall. I also work at PINT, a web
                        agency as a web engineer.{" "}
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
