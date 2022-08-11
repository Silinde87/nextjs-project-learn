import { render } from '@testing-library/react';
import Date from './Date';

describe('Date Component', () => {
	it('renders a time element with proper date format',  () => {
		const { getByTestId } = render(<Date dateString="2020-01-02" />);
		const time = getByTestId('date-component');
		
        expect(time).toBeInTheDocument();
        expect(time.tagName).toBe('TIME');
        expect(time.innerHTML).toBe('January 2, 2020');
	});
});
