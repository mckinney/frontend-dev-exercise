const currencyFormatter = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
	minimumFractionDigits: 0,
	maximumFractionDigits: 0,
	minimumSignificantDigits: 1, // Requried for Edge version 44.17763+
});

const stringNumberFormatter = new Intl.NumberFormat('en-US', {
	style: 'decimal',
	useGrouping: true,
});

const thousandsStringFormatter = function thousandsStringFormatter(value) {
	return Math.abs(value) > 999
		? `${Math.sign(value) * ((Math.abs(value) / 1000).toFixed(1))}k`
		: Math.sign(value) * Math.abs(value);
};

const percentFormatter = function percentFormatter(value) {
	const roundedValue = Math.round(value * 100);
	return `${roundedValue}%`;
};

const numberWithCommas = function numberWithCommas(value) {
	return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export { percentFormatter };
export { currencyFormatter };
export { stringNumberFormatter };
export { thousandsStringFormatter };
export { numberWithCommas };
export default currencyFormatter;
