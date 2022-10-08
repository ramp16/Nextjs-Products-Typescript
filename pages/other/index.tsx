import type { NextPage } from 'next'
import Head from 'next/head'

type OtherProps = {
  message: string
}

const Other: NextPage<OtherProps> = ({ message }) => {

  return (
    <div className=''>
      <Head>
        <title>Other - RootLab | NextJS Products (Typescript)</title>
        <meta name="description" content="RootLab first session" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=''>
        <h1 className=''>
          Welcome to the Rootlab | Rootstack - Other
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

export default Other

export async function getServerSideProps() {
  const message = 'Message'

  return {
    props: {
      message
    }
  }
}
