import React from 'react'
import Head from 'next/head'
import DefaultTemplate from '../components/templates/DefaultTemplate'

interface HomeProps {
  children: React.ReactNode
}

const Home: React.FC<HomeProps> = () => {
  return (
    <DefaultTemplate>
      <Head>
        <title>Hello Title</title>
      </Head>
      <h1>Hello World</h1>
    </DefaultTemplate>
  )
}

export default Home
