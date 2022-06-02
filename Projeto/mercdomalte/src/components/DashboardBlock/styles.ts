import styled from 'styled-components';

export const Container = styled.div`
	padding: 1rem;
	display: grid;
	grid-template-columns: 50px 1fr 50px;
	gap: 1rem;
	border: 1px solid;
	.fileIcon {
		color: blue;
	}

	div {
		p {
			font-size: 1.3rem;
			font-weight: bold;
			margin-bottom: 0;
		}
	}
	.downloadIcon {
		color: green;
	}
`;
