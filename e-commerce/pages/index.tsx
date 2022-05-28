import type { NextPage } from 'next';
import Link from 'next/link';

import styles from '../styles/Home.module.css';

import prisma from '../lib/prisma';

export const getServerSideProps = async (context) => {
	const { id } = context.query;

	const categories = await prisma.category.findMany({});

	return { props: { categories } };
};
const Home: NextPage = ({ categories }) => {
	return (
		<ul>
			{categories.map((category) => {
				return (
					<li key={category.id}>
						<Link
							href={{
								pathname: '/categories/[id]',
								query: { id: category.id },
							}}
						>
							{category.name}
						</Link>
					</li>
				);
			})}
		</ul>
	);
};

export default Home;
