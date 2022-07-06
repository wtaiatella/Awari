import type { NextPage } from 'next';
import Link from 'next/link';
import Price from '../../components/price';

export const getServerSideProps: GetServerSideProps = async (context) => {
	const { id } = context.query;

	const responseCategory = await fetch(
		`${process.env.BACKEND_API}/categories/${id}`
	);
	const categoryObject = await responseCategory.json();

	const resposeProducts = await fetch(
		`${process.env.BACKEND_API}/categories/${id}/products`
	);
	const productObject = await resposeProducts.json();

	const category = {
		...categoryObject,
		products: productObject,
	};

	//if (category) {
	return { props: { category } };
	//} else {
	//	return { notFound: true };
	//}
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
//sendgrid
