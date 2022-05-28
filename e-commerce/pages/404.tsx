import Link from 'next/link';

const CustomError = () => {
	return (
		<div>
			<h1> Erro de página</h1>
			<Link href={{ pathname: '/' }}>Ir para Home</Link>
		</div>
	);
};

export default CustomError;
