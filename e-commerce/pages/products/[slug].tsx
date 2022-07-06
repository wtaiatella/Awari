import type { NextPageContext, NextPage } from 'next';
import Price from '../../components/price';

export const getServerSideProps = async (context: NextPageContext) => {
	const { slug } = context.query;
	const responseProduct = await fetch(
		`${process.env.BACKEND_API}/products/${slug}`
	);
	const productObject = await responseProduct.json();

	if (productObject) {
		return {
			props: {
				product: productObject,
			},
		};
	} else {
		return { notFound: true };
	}
};

const showPrice = (product) => {
	if (product.priceWithDiscount > 0) {
		return (
			<>
				<p>De: {product.price}</p>
				<p>Por: {product.priceWithDiscount}</p>
			</>
		);
	} else {
		return <p>{product.price}</p>;
	}
};

const ProductPage: NextPage = ({ product }) => {
	//if (product) {
	return (
		<div>
			<h1>{product.name}</h1>
			<h2>{product.headline}</h2>
			<p>{product.description}</p>
			<p>Com lógica condicional no código</p>
			<div>
				{(() => {
					if (product.priceWithDiscount > 0) {
						return (
							<>
								<p>De: {product.price}</p>
								<p>Por: {product.priceWithDiscount}</p>
							</>
						);
					} else {
						return <p>{product.price}</p>;
					}
				})()}
			</div>

			<p>Com Componente</p>

			<Price
				price={product.price}
				priceWithDiscount={product.priceWithDiscount}
			/>

			<p>Com função</p>
			<div>{showPrice(product)}</div>
		</div>
	);
	//	} else {
	//		return
	//<div>Produto não existe</div>;
	//	}
};

export default ProductPage;
