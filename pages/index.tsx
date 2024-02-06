import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import homeStyles from "@/styles/Home.module.css";
import { getSortedPostsData } from "@/lib/posts";
import { GetStaticProps } from 'next'
import Link from 'next/link'

const Home = ({allPostsData}:  {
  allPostsData:{
    date: string
    title: string
    id: string
  }[]
}) => {
  return (
    <div>
      <Head>
       <title>Bourgeois</title>
       </Head>

      <section className={homeStyles.headingMd}>
       <p>[Bourgeois Introduction]</p>
       <p>
          (This is a website)
       </p>
      </section>

      <section className={`${homeStyles.headingMd} ${homeStyles.padding1px}`}>
        <h2 className={homeStyles.headingLg}>Blog</h2>
        <ul className={homeStyles.list}>
          {allPostsData.map(({id, date, title}) =>
          <li className={homeStyles.listItem} key={id}>
          
                <a>{title}</a>
           
            <br/>
            <small className={homeStyles.lightText}>
              {date}
            </small>

          </li> 

          )}

        </ul>
      </section>
     </div>
  );
}
export default Home;

export const getStaticProps: GetStaticProps =async () => {
  const allPostsData = getSortedPostsData();
  return  {
    props : {
      allPostsData
    }
  }
}
