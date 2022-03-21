import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import Intro from "../components/intro";

import utilStyles from "../styles/utils.module.css";
import indexStyles from "../styles/index.module.css";

import { getSortedPostsData } from "../lib/posts";

const bgColor = "#fcfcfc";

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
        ({ id, title, description, thumbnail, skill, year, role }) => (
            <li className={utilStyles.listItem} key={id}>
                <Link href="/projects/[id]" as={`/projects/${id}`}>
                    <div
                        style={{ backgroundImage: `url(${thumbnail})` }}
                        className={indexStyles.image}
                    ></div>
                </Link>
                {/* {console.log({ skillArr })} */}
                <div className={indexStyles.projectTags}>
                    {typeof skill === "object" &&
                        skill.map(({ name, color }) => {
                            return (
                                <span className={`projectTag__${color}`}>
                                    {name}
                                </span>
                            );
                        })}
                </div>
                <div className={indexStyles.projectDetail}>
                    <div className={indexStyles.projectColLeft}>
                        <Link href="/projects/[id]" as={`/projects/${id}`}>
                            <a
                                className={`${utilStyles.headingLgNoMargin} ${indexStyles.title}`}
                            >
                                {title}
                            </a>
                        </Link>
                        <p className={indexStyles.projectSubDetail}>{role}</p>
                        <p className={indexStyles.projectSubDetail}>{year}</p>
                    </div>

                    <div
                        className={`${utilStyles.textSm} ${indexStyles.projectDescription}`}
                    >
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
                <div className={indexStyles.sectionTitle}>
                    <h3>Select Projects</h3>
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
                    .projectTag__yellow {
                        background: #fbf3da;
                    }
                    .projectTag__green {
                        background: #ddedea;
                    }
                    .projectTag__red {
                        background: #fbe4e4;
                    }
                    .projectTag__purple {
                        background: #eae4f2;
                    }
                    .projectTag__pink {
                        background: #f4dfeb;
                    }
                    .projectTag__gray {
                        background: #ebeced;
                    }
                    .projectTag__blue {
                        background: #ddebf1;
                    }
                    .projectTag__orange {
                        background: #faebdd;
                    }
                `}
            </style>
        </Layout>
    );
}
