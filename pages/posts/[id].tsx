import { getAllPostIds, getPostData, getSortedPostsData } from '@/lib/posts';
import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head';
import React from 'react'
import postStyle from '../../styles/Post.module.css';

const Post = ({postData}: {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}) => {
  return (
    <div className={postStyle.container }>
     <Head>
      <title>{postData.title}</title>
     </Head>
     <article>
      <h1 >{postData.title}</h1>
          <div>
            {postData.date}
          </div>
          <div dangerouslySetInnerHTML={{__html: postData.contentHtml}} />
        
       
     </article>

    </div>
  );
}
export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();
// {{params: {id: 'pre-rendering'}. {param...}}
    return {
      paths,
      fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData
    }
  }
}