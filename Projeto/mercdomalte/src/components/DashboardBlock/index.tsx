import { Container } from './styles';
import {
	FaRegFileExcel,
	FaRegFilePdf,
	FaRegFileImage,
	FaRegFileVideo,
} from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

export function DashboardBlock() {
	return (
		<Container>
			<FaRegFileExcel className='fileIcon' size={50} />
			<div>
				<p>Titulo do arquivo</p>
				<span>#Categoria</span>
			</div>
			<FiDownload className='downloadIcon' size={50} />
		</Container>
	);
}
