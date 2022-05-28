import type { NextPage } from 'next';
import prisma from '../../lib/prisma';
import Link from 'next/link';
import Price from '../../components/price';

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { id } = context.query;

	const category = await prisma.category.findUnique({
		where: {
			id: id,
		},
		include: { products: true },
	});

	if (category) {
		return { props: { category } };
	} else {
		return { notFound: true };
	}
};

const CategoryPage: NextPage = ({ category }) => {
	return (
		<div>
			<h1>{category.name}</h1>

			<div>
				{category.products.map((product) => (
					<div>
						<h2>
							<Link
								href={{
									pathname: '/products/[slug]',
									query: { slug: product.slug },
								}}
							>
								{product.name}
							</Link>
						</h2>
						<Price
							price={product.price}
							priceWithDiscount={product.priceWithDiscount}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default CategoryPage;
