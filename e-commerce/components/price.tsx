import NumberFormat from 'react-number-format';

const Price = ({ price, priceWithDiscount }) => {
	if (priceWithDiscount > 0) {
		return (
			<>
				<p>
					De:{' '}
					<NumberFormat
						value={price}
						displayType={'text'}
						thousandSeparator={'.'}
						decimalSeparator={','}
						fixedDecimalScale={true}
						decimalScale={2}
						prefix={'R$ '}
					/>
				</p>
				<p>
					Por:{' '}
					<NumberFormat
						value={priceWithDiscount}
						displayType={'text'}
						thousandSeparator={'.'}
						decimalSeparator={','}
						fixedDecimalScale={true}
						decimalScale={2}
						prefix={'R$ '}
					/>
				</p>
				<p>
					Desc:{' '}
					<NumberFormat
						value={(1 - priceWithDiscount / price) * 100}
						displayType={'text'}
						thousandSeparator={'.'}
						decimalSeparator={','}
						fixedDecimalScale={true}
						decimalScale={2}
						suffix={' %'}
					/>
				</p>
			</>
		);
	} else {
		return (
			<p>
				<NumberFormat
					value={price}
					displayType={'text'}
					thousandSeparator={'.'}
					decimalSeparator={','}
					fixedDecimalScale={true}
					decimalScale={2}
					prefix={'R$ '}
				/>
			</p>
		);
	}
};

export default Price;
