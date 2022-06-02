import Image from 'next/image';
import { Container, Content } from './styles';
import 'antd/dist/antd.css';
import { Input, Button } from 'antd';

export function Header() {
	const { Search } = Input;
	const onSearch = (value) => console.log(value);

	return (
		<Container>
			<Content>
				<Image
					src='/images/logo.png'
					alt='logo Mercado do Malte'
					width='107'
					height='87'
					//layout='fill'
				/>

				<Search
					className='busca'
					placeholder='Procure seu arquivo'
					onSearch={onSearch}
					allowClear
					style={{
						width: 600,
					}}
				/>
				<Button type='link'>Login</Button>
			</Content>
		</Container>
	);
}
