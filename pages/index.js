import Head from 'next/head'
import Popular from '../components/popular';

function Home({movies}) {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico"/>
			</Head>

			<Popular movies={movies} />

		</>
	)
}

export async function getServerSideProps() {
	const request = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=3f07b70ca2f276f05519205855a206b8&language=en-US&page=1`);
	const movies = await request.json();
	return {
		props: {
			movies,
		},
	}
}

export default Home
