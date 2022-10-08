import type { NextPage } from 'next'
import Head from 'next/head'

type BlogProps = {
  posts: string[]
}

const Blog: NextPage<BlogProps> = ({ posts }) => {

  return (
    <div className=''>
      <Head>
        <title>Blog - RootLab | NextJS Products (Typescript)</title>
        <meta name="description" content="RootLab first session" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>
        <h1 className=''>
          Welcome to the Rootlab | Rootstack - Blog
        </h1>

        <p className=''>
          <code className=''>Typescript</code>
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

export default Blog

export async function getServerSideProps() {
  const posts = ['Posts']

  return {
    props: {
      posts
    }
  }
}
