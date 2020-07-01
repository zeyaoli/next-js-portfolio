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
        <section className={postStyle.intro}>
          <div className={postStyle.introLeft}>
            <h2 className={utilStyles.headingLg}>{postData.title}</h2>
            <p className={utilStyles.textSm}> {postData.description} </p>
          </div>
          <div className={postStyle.introRight}>
            <ul className={utilStyles.list}>
              <li className={utilStyles.textSm}>{postData.year}</li>
              <li className={utilStyles.textSm}>
                {`Duration: ${postData.duration}`}
              </li>
              <li
                className={utilStyles.textSm}
              >{`My role: ${postData.role}`}</li>
              <li
                className={utilStyles.textSm}
              >{`Skill set: ${postData.skill}`}</li>
              <li className={utilStyles.textSm}>
                {postData.award ? `Exhibition/Award: ${postData.award}` : ""}
              </li>
            </ul>
          </div>
        </section>

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
