import type { NextPage } from 'next';
import prisma from '../../lib/prisma';

export const getServerSideProps = async (context) => {
	const { id } = context.query;

	const category = await prisma.category.findUnique({
		where: {
			id: id,
		},
		include: { products: true },
	});

	return { props: { category: category } };
};

const CategoryPage: NextPage = ({ category }) => {
	return (
		<div>
			<h1>{category.name}</h1>

			<div>
				{category.products.map((product) => (
					<h2 key={product.id}>{product.name}</h2>
				))}
			</div>
		</div>
	);
};

export default CategoryPage;
