import { Container, Content } from './styles';
import { DashboardBlock } from '../DashboardBlock';

export function Dashboard() {
	return (
		<Container>
			<Content>
				<DashboardBlock />
				<DashboardBlock />
				<DashboardBlock />
				<DashboardBlock />
			</Content>
		</Container>
	);
}
