import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { useEffect } from 'react'

type PostProps = {
  post: string
}

const Post: NextPage<PostProps> = ({ post }) => {
  return (
    <div className=''>
      <Head>
        <title>Post - RootLab | NextJS Products (Typescript)</title>
        <meta name="description" content="RootLab first session" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>
        <h1 className=''>
          Welcome to the Rootlab | Rootstack - Post
        </h1>

        <p className=''>
          <code className=''>Post: &quot;{post}&quot;</code>
        </p>
      </main>

      <footer className=''>
        <a
          href="https://rootstack.com/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className=''>
            Rootstack
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Post

type ServerSidePropsType = {
  query: {
    pid: string
  }
}

export async function getServerSideProps({ query }: ServerSidePropsType) {
  const post = query.pid

  return {
    props: {
      post
    }
  }
}
