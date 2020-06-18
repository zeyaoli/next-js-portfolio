import Head from "next/head";
import Link from "next/link";

import Layout from "../components/layout";
import aboutStyles from "../styles/about.module.css";
import utilStyles from "../styles/utils.module.css";

export default function AboutPage() {
  return (
    <Layout about>
      <Head>
        <title>About - Zeyao Li</title>
      </Head>
      <div className={aboutStyles.about_container}>
        <div className={aboutStyles.about_content}>
          <div className={aboutStyles.profile_pic}>
            <img src="/profile_bw.jpeg" alt="zeyao's headshot" />
          </div>

          <div className={aboutStyles.profile_text}>
            <div className={aboutStyles.profile_info}>
              <p className={utilStyles.headingLg}>
                Zeyao Li is a Design Engineer studying at NYU ITP. He focuses on
                using web technology to enhance human relationships with the
                help of Internet. Born in Beijing, worked and studied in Prague,
                Seattle, and Shanghai, Zeyao is now working and living in New
                York City.
              </p>
            </div>
            <div className={aboutStyles.profile_detail}>
              <h4 className={utilStyles.headingMd}>Education</h4>
              <ul className={utilStyles.list}>
                <li className={utilStyles.listItems}>
                  NYU Tisch School of Arts | 2019 - 2021
                </li>
                <li className={utilStyles.listItems}>
                  New York University Shanghai | 2015 - 2019
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>
        {`
          body {
            background-color: #f3f1e9;
          }
        `}
      </style>
    </Layout>
  );
}
