import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Popular from '../components/popular'


export default function Home({movies}) {
  console.log(movies.result)
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

   <h3>Popüler Filmler</h3>

   <Popular movies={movies}/>
  
    </>
  )
}

export async function getStaticProps(){
  const request = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=3f07b70ca2f276f05519205855a206b8&language=en-US&page=1")
  const movies = await request.json();
  return {
    props: {
      movies
    }
  }
}
