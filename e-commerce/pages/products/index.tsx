import type { NextPage } from 'next';

export const getServerSideProps = async () => {
	const product = {
		name: 'Nome do Produto',
		price: 10.5,
		description: 'Descrição do produto',
	};
	return {
		props: {
			product: product,
		},
	};
};

const ProductsPage: NextPage = ({}) => {
	return;
	<div>
		<h1>product</h1>;
	</div>;
};

export default ProductsPage;
