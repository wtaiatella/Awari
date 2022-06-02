import styles from '../styles/home.module.scss';
import Head from 'next/head';
import { Header } from '../components/Header';

export default function Home() {
	return (
		<>
			<Head>
				<title>Mercado do Malte</title>
			</Head>
			<Header />
		</>
	);
}
