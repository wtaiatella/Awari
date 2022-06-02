import Image from 'next/image';
import { Container, Content } from './styles';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { SignInButton } from '../SignInButton/Index';

export function Header() {
	const { Search } = Input;
	const onSearch = (value) => console.log(value);

	return (
		<Container>
			<Content>
				<a href='./'>
					<Image
						src='/images/logo.png'
						alt='logo Mercado do Malte'
						width='107'
						height='87'
					/>
				</a>

				<Search
					className='busca'
					placeholder='Procure seu arquivo'
					onSearch={onSearch}
					allowClear
					style={{
						width: 600,
					}}
				/>
				<SignInButton />
			</Content>
		</Container>
	);
}
