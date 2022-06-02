import styled from 'styled-components';

export const Container = styled.main`
	background-image: url('/images/bg-site.jpg');
	background-repeat: repeat;
	height: calc(100vh - 93px - 2.6rem);
`;

export const Content = styled.div`
	max-width: 1120px;
	margin: 0 auto;
	padding: 2.5rem 1rem;

	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;
`;
