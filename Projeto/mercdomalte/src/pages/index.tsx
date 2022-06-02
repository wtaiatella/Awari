import Head from 'next/head';
import { Dashboard } from '../components/Dashboard/Index';

export default function Home() {
	return (
		<>
			<Head>
				<title>Mercado do Malte</title>
			</Head>
			<Dashboard />
		</>
	);
}
