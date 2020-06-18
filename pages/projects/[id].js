import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import postStyle from "../../styles/posts.module.css";
import utilStyles from "../../styles/utils.module.css";

const name = "Zeyao Li";
const bgColor = "#f3f1e9";

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{`${postData.title} - ${name}`}</title>
      </Head>
      <article className={postStyle.posts}>
        <img src={postData.thumbnail} alt={postData.title} />
        <h2 className={utilStyles.heading2Xl}>{postData.title}</h2>
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHTML }} />
      </article>
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
