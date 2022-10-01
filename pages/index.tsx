import type { NextPage } from 'next'
import Head from 'next/head'

type HomeProps = {
  response: string
}

const Home: NextPage<HomeProps> = ({ response }) => {

  return (
    <div className=''>
      <Head>
        <title>RootLab | NextJS Products (Typescript)</title>
        <meta name="description" content="RootLab first session" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>
        <h1 className=''>
          Welcome to the Rootlab | Rootstack
        </h1>

        <p className=''>
          <code className=''>Typescript {response}</code>
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

export default Home

export async function getServerSideProps() {
  const response = 'Message'

  return {
    props: {
      response
    }
  }
}
