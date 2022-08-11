import { parseISO, format } from 'date-fns';
import { DateProps } from './Date.types';

const Date: React.FC<DateProps> = ({ dateString, dataTestId = 'date-component' }) => {
	const date = parseISO(dateString);
	return (
		<time dateTime={dateString} data-testid={dataTestId}>
			{format(date, 'LLLL d, yyyy')}
		</time>
	);
};

export default Date;
