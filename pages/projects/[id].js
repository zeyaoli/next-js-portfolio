import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import postStyle from "../../styles/posts.module.css";
import utilStyles from "../../styles/utils.module.css";

const name = "Zeyao Li";

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{`${postData.title} - ${name}`}</title>
            </Head>
            <div className={postStyle.container}>
                <article className={postStyle.posts}>
                    <img src={postData.thumbnail} alt={postData.title} />
                    <section className={postStyle.intro}>
                        <div className={postStyle.introLeft}>
                            <h1>{postData.title}</h1>
                            <p>{postData.year}</p>
                            <p>{postData.role}</p>
                            <p>
                                {postData.award
                                    ? `Exhibition/Award: ${postData.award}`
                                    : ""}
                            </p>
                        </div>
                        <div className={postStyle.introRight}>
                            <p>{postData.description}</p>
                        </div>
                    </section>

                    <div
                        className={postStyle.content}
                        dangerouslySetInnerHTML={{
                            __html: postData.contentHTML,
                        }}
                    />
                </article>
            </div>
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

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    //fetch necessary data for the post using params.id
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}
