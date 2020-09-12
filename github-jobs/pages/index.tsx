import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Board from './board'

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Nav />

    <Board />
  </div>
)

export default Home
