import { Container } from './styles';
import 'antd/dist/antd.css';
import { Avatar } from 'antd';
import { AiOutlineUser } from 'react-icons/ai';

export function SignInButton() {
	return (
		<Container>
			<a href='./minhaconta'>
				Login
				<Avatar size={50} icon={<AiOutlineUser />} />
			</a>
		</Container>
	);
}
